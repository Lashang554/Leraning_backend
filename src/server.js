const express = require("express");
const {
  getDay2Summary,
  getTasksByTopic,
  getTaskById,
} = require("./day2Practice");
const {
  getDay3Summary,
  getDay3TasksByTopic,
  createPracticeNote,
  getPracticeNotes,
} = require("./day3Practice");
const {
  getDay4Summary,
  getDay4Projects,
  getDay4ProjectById,
  getDay4Checklist,
} = require("./day4Practice");
const { getDay5Summary } = require("./day5Practice");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

function logRequest(req, res, next) {
  console.log(`${req.method} ${req.path}`);
  next();
}

function validatePracticeNote(req, res, next) {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      message: "Title and content are required",
    });
  }

  return next();
}

app.use(logRequest);

const learningTopics = [
  {
    id: 1,
    title: "Express basics",
    status: "in-progress",
  },
  {
    id: 2,
    title: "REST API design",
    status: "planned",
  },
  {
    id: 3,
    title: "MongoDB with Mongoose",
    status: "planned",
  },
];

app.get("/", (req, res) => {
  res.json({
    message: "Backend Learning API",
    endpoints: [
      "/health",
      "/api/topics",
      "/api/day-2",
      "/api/day-2/tasks",
      "/api/day-3",
      "/api/day-3/tasks",
      "/api/day-3/notes",
      "/api/day-4",
      "/api/day-4/projects",
      "/api/day-4/checklist",
    ],
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
  });
});

app.get("/api/topics", (req, res) => {
  res.json({
    count: learningTopics.length,
    topics: learningTopics,
  });
});

app.get("/api/day-2", (req, res) => {
  res.json(getDay2Summary());
});

app.get("/api/day-2/tasks", (req, res) => {
  const tasks = getTasksByTopic(req.query.topic);

  res.json({
    count: tasks.length,
    tasks,
  });
});

app.get("/api/day-2/tasks/:id", (req, res) => {
  const task = getTaskById(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  return res.json(task);
});

app.get("/api/day-3", (req, res) => {
  res.json(getDay3Summary());
});

app.get("/api/day-3/tasks", (req, res) => {
  const tasks = getDay3TasksByTopic(req.query.topic);

  res.json({
    count: tasks.length,
    tasks,
  });
});

app.get("/api/day-3/notes", (req, res) => {
  const notes = getPracticeNotes();

  res.json({
    count: notes.length,
    notes,
  });
});

app.post("/api/day-3/notes", validatePracticeNote, (req, res) => {
  const note = createPracticeNote(req.body);

  res.status(201).json(note);
});

app.get("/api/day-4", (req, res) => {
  res.json(getDay4Summary());
});

app.get("/api/day-4/projects", (req, res) => {
  const projects = getDay4Projects(req.query.topic);

  res.json({
    count: projects.length,
    projects,
  });
});

app.get("/api/day-4/projects/:id", (req, res) => {
  const project = getDay4ProjectById(req.params.id);

  if (!project) {
    return res.status(404).json({
      message: "Project not found",
    });
  }

  return res.json(project);
});

app.get("/api/day-4/checklist", (req, res) => {
  const checklist = getDay4Checklist();

  res.json({
    count: checklist.length,
    checklist,
  });
});

app.get("/api/day-5", (req, res) => {
  res.json(getDay5Summary());
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
