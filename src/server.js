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
const {
  getDay5Summary,
  getDay5Lessons,
  getDay5LessonById,
  getDay5StudySessions,
  getDay5Progress,
} = require("./day5Practice");
const {
  getDay6Summary,
  getDay6Tasks,
  getDay6TaskById,
  getDay6Checklist,
  getDay6Progress,
} = require("./day6Practice");
const {
  getDay7Summary,
  getDay7Tasks,
  getDay7TaskById,
  getDay7Checklist,
  getDay7Progress,
} = require("./day7Practice");
const {
  getDay8Summary,
  getDay8Tasks,
  getDay8TaskById,
  getDay8Checklist,
  getDay8Progress,
} = require("./day8Practice");
const {
  getDay9Summary,
  getDay9Tasks,
  getDay9TaskById,
  getDay9Checklist,
  getDay9Progress,
} = require("./day9Practice");
const {
  getDay10Summary,
  getDay10Tasks,
  getDay10TaskById,
  getDay10Checklist,
  getDay10Progress,
} = require("./day10Practice");
const {
  getDay11Summary,
  getDay11Tasks,
  getDay11TaskById,
  getDay11Checklist,
  getDay11Progress,
} = require("./day11Practice");
const {
  getDay12Summary,
  getDay12Tasks,
  getDay12TaskById,
  getDay12Checklist,
  getDay12Progress,
} = require("./day12Practice");
const {
  getDay13Summary,
  getDay13Tasks,
  getDay13TaskById,
  getDay13Checklist,
  getDay13Progress,
} = require("./day13Practice");
const {
  getDay14Summary,
  getDay14Tasks,
  getDay14TaskById,
  getDay14Checklist,
  getDay14Progress,
} = require("./day14Practice");
const {
  getDay15Summary,
  getDay15Tasks,
  getDay15TaskById,
  getDay15Checklist,
  getDay15Progress,
} = require("./day15Practice");
const {
  getDay16Summary,
  getDay16Tasks,
  getDay16TaskById,
  getDay16Checklist,
  getDay16Progress,
} = require("./day16Practice");
const {
  getDay17Summary,
  getDay17Tasks,
  getDay17TaskById,
  getDay17Checklist,
  getDay17Progress,
} = require("./day17Practice");
const {
  getDay18Summary,
  getDay18Tasks,
  getDay18TaskById,
  getDay18Checklist,
  getDay18Progress,
} = require("./day18Practice");
const {
  getDay19Summary,
  getDay19Tasks,
  getDay19TaskById,
  getDay19Checklist,
  getDay19Progress,
} = require("./day19Practice");

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
  {
    id: 4,
    title: "Deployment and production readiness",
    status: "planned",
  },
  {
    id: 5,
    title: "API testing and debugging",
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
      "/api/day-5",
      "/api/day-5/lessons",
      "/api/day-5/sessions",
      "/api/day-5/progress",
      "/api/day-6",
      "/api/day-6/tasks",
      "/api/day-6/checklist",
      "/api/day-6/progress",
      "/api/day-7",
      "/api/day-7/tasks",
      "/api/day-7/checklist",
      "/api/day-7/progress",
      "/api/day-8",
      "/api/day-8/tasks",
      "/api/day-8/checklist",
      "/api/day-8/progress",
      "/api/day-9",
      "/api/day-9/tasks",
      "/api/day-9/checklist",
      "/api/day-9/progress",
      "/api/day-10",
      "/api/day-10/tasks",
      "/api/day-10/checklist",
      "/api/day-10/progress",
      "/api/day-11",
      "/api/day-11/tasks",
      "/api/day-11/checklist",
      "/api/day-11/progress",
      "/api/day-12",
      "/api/day-12/tasks",
      "/api/day-12/checklist",
      "/api/day-12/progress",
      "/api/day-13",
      "/api/day-13/tasks",
      "/api/day-13/checklist",
      "/api/day-13/progress",
      "/api/day-14",
      "/api/day-14/tasks",
      "/api/day-14/checklist",
      "/api/day-14/progress",
      "/api/day-15",
      "/api/day-15/tasks",
      "/api/day-15/checklist",
      "/api/day-15/progress",
      "/api/day-16",
      "/api/day-16/tasks",
      "/api/day-16/checklist",
      "/api/day-16/progress",
      "/api/day-17",
      "/api/day-17/tasks",
      "/api/day-17/checklist",
      "/api/day-17/progress",
      "/api/day-18",
      "/api/day-18/tasks",
      "/api/day-18/checklist",
      "/api/day-18/progress",
      "/api/day-19",
      "/api/day-19/tasks",
      "/api/day-19/checklist",
      "/api/day-19/progress",
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

app.get("/api/day-5/lessons", (req, res) => {
  const lessons = getDay5Lessons(req.query.topic);

  res.json({
    count: lessons.length,
    lessons,
  });
});

app.get("/api/day-5/lessons/:id", (req, res) => {
  const lesson = getDay5LessonById(req.params.id);

  if (!lesson) {
    return res.status(404).json({
      message: "Lesson not found",
    });
  }

  return res.json(lesson);
});

app.get("/api/day-5/sessions", (req, res) => {
  const sessions = getDay5StudySessions(req.query.type);

  res.json({
    count: sessions.length,
    sessions,
  });
});

app.get("/api/day-5/progress", (req, res) => {
  res.json(getDay5Progress());
});

app.get("/api/day-6", (req, res) => {
  res.json(getDay6Summary());
});

app.get("/api/day-6/tasks", (req, res) => {
  const tasks = getDay6Tasks(req.query.topic);

  res.json({
    count: tasks.length,
    tasks,
  });
});

app.get("/api/day-6/tasks/:id", (req, res) => {
  const task = getDay6TaskById(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  return res.json(task);
});

app.get("/api/day-6/checklist", (req, res) => {
  const checklist = getDay6Checklist();

  res.json({
    count: checklist.length,
    checklist,
  });
});

app.get("/api/day-6/progress", (req, res) => {
  res.json(getDay6Progress());
});

app.get("/api/day-7", (req, res) => {
  res.json(getDay7Summary());
});

app.get("/api/day-7/tasks", (req, res) => {
  const tasks = getDay7Tasks(req.query.topic);

  res.json({
    count: tasks.length,
    tasks,
  });
});

app.get("/api/day-7/tasks/:id", (req, res) => {
  const task = getDay7TaskById(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  return res.json(task);
});

app.get("/api/day-7/checklist", (req, res) => {
  const checklist = getDay7Checklist();

  res.json({
    count: checklist.length,
    checklist,
  });
});

app.get("/api/day-7/progress", (req, res) => {
  res.json(getDay7Progress());
});

app.get("/api/day-8", (req, res) => {
  res.json(getDay8Summary());
});

app.get("/api/day-8/tasks", (req, res) => {
  const tasks = getDay8Tasks(req.query.topic);

  res.json({
    count: tasks.length,
    tasks,
  });
});

app.get("/api/day-8/tasks/:id", (req, res) => {
  const task = getDay8TaskById(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  return res.json(task);
});

app.get("/api/day-8/checklist", (req, res) => {
  const checklist = getDay8Checklist();

  res.json({
    count: checklist.length,
    checklist,
  });
});

app.get("/api/day-8/progress", (req, res) => {
  res.json(getDay8Progress());
});

app.get("/api/day-9", (req, res) => {
  res.json(getDay9Summary());
});

app.get("/api/day-9/tasks", (req, res) => {
  const tasks = getDay9Tasks(req.query.topic);

  res.json({
    count: tasks.length,
    tasks,
  });
});

app.get("/api/day-9/tasks/:id", (req, res) => {
  const task = getDay9TaskById(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  return res.json(task);
});

app.get("/api/day-9/checklist", (req, res) => {
  const checklist = getDay9Checklist();

  res.json({
    count: checklist.length,
    checklist,
  });
});

app.get("/api/day-9/progress", (req, res) => {
  res.json(getDay9Progress());
});

app.get("/api/day-10", (req, res) => {
  res.json(getDay10Summary());
});

app.get("/api/day-10/tasks", (req, res) => {
  const tasks = getDay10Tasks(req.query.topic);

  res.json({
    count: tasks.length,
    tasks,
  });
});

app.get("/api/day-10/tasks/:id", (req, res) => {
  const task = getDay10TaskById(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  return res.json(task);
});

app.get("/api/day-10/checklist", (req, res) => {
  const checklist = getDay10Checklist();

  res.json({
    count: checklist.length,
    checklist,
  });
});

app.get("/api/day-10/progress", (req, res) => {
  res.json(getDay10Progress());
});

app.get("/api/day-11", (req, res) => {
  res.json(getDay11Summary());
});

app.get("/api/day-11/tasks", (req, res) => {
  const tasks = getDay11Tasks(req.query.topic);

  res.json({
    count: tasks.length,
    tasks,
  });
});

app.get("/api/day-11/tasks/:id", (req, res) => {
  const task = getDay11TaskById(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  return res.json(task);
});

app.get("/api/day-11/checklist", (req, res) => {
  const checklist = getDay11Checklist();

  res.json({
    count: checklist.length,
    checklist,
  });
});

app.get("/api/day-11/progress", (req, res) => {
  res.json(getDay11Progress());
});

app.get("/api/day-12", (req, res) => {
  res.json(getDay12Summary());
});

app.get("/api/day-12/tasks", (req, res) => {
  const tasks = getDay12Tasks(req.query.topic);

  res.json({
    count: tasks.length,
    tasks,
  });
});

app.get("/api/day-12/tasks/:id", (req, res) => {
  const task = getDay12TaskById(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  return res.json(task);
});

app.get("/api/day-12/checklist", (req, res) => {
  const checklist = getDay12Checklist();

  res.json({
    count: checklist.length,
    checklist,
  });
});

app.get("/api/day-12/progress", (req, res) => {
  res.json(getDay12Progress());
});

app.get("/api/day-13", (req, res) => {
  res.json(getDay13Summary());
});

app.get("/api/day-13/tasks", (req, res) => {
  const tasks = getDay13Tasks(req.query.topic);

  res.json({
    count: tasks.length,
    tasks,
  });
});

app.get("/api/day-13/tasks/:id", (req, res) => {
  const task = getDay13TaskById(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  return res.json(task);
});

app.get("/api/day-13/checklist", (req, res) => {
  const checklist = getDay13Checklist();

  res.json({
    count: checklist.length,
    checklist,
  });
});

app.get("/api/day-13/progress", (req, res) => {
  res.json(getDay13Progress());
});

app.get("/api/day-14", (req, res) => {
  res.json(getDay14Summary());
});

app.get("/api/day-14/tasks", (req, res) => {
  const tasks = getDay14Tasks(req.query.topic);

  res.json({
    count: tasks.length,
    tasks,
  });
});

app.get("/api/day-14/tasks/:id", (req, res) => {
  const task = getDay14TaskById(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  return res.json(task);
});

app.get("/api/day-14/checklist", (req, res) => {
  const checklist = getDay14Checklist();

  res.json({
    count: checklist.length,
    checklist,
  });
});

app.get("/api/day-14/progress", (req, res) => {
  res.json(getDay14Progress());
});

app.get("/api/day-15", (req, res) => {
  res.json(getDay15Summary());
});

app.get("/api/day-15/tasks", (req, res) => {
  const tasks = getDay15Tasks(req.query.topic);

  res.json({
    count: tasks.length,
    tasks,
  });
});

app.get("/api/day-15/tasks/:id", (req, res) => {
  const task = getDay15TaskById(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  return res.json(task);
});

app.get("/api/day-15/checklist", (req, res) => {
  const checklist = getDay15Checklist();

  res.json({
    count: checklist.length,
    checklist,
  });
});

app.get("/api/day-15/progress", (req, res) => {
  res.json(getDay15Progress());
});

app.get("/api/day-16", (req, res) => {
  res.json(getDay16Summary());
});

app.get("/api/day-16/tasks", (req, res) => {
  const tasks = getDay16Tasks(req.query.topic);

  res.json({
    count: tasks.length,
    tasks,
  });
});

app.get("/api/day-16/tasks/:id", (req, res) => {
  const task = getDay16TaskById(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  return res.json(task);
});

app.get("/api/day-16/checklist", (req, res) => {
  const checklist = getDay16Checklist();

  res.json({
    count: checklist.length,
    checklist,
  });
});

app.get("/api/day-16/progress", (req, res) => {
  res.json(getDay16Progress());
});

app.get("/api/day-17", (req, res) => {
  res.json(getDay17Summary());
});

app.get("/api/day-17/tasks", (req, res) => {
  const tasks = getDay17Tasks(req.query.topic);

  res.json({
    count: tasks.length,
    tasks,
  });
});

app.get("/api/day-17/tasks/:id", (req, res) => {
  const task = getDay17TaskById(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  return res.json(task);
});

app.get("/api/day-17/checklist", (req, res) => {
  const checklist = getDay17Checklist();

  res.json({
    count: checklist.length,
    checklist,
  });
});

app.get("/api/day-17/progress", (req, res) => {
  res.json(getDay17Progress());
});

app.get("/api/day-18", (req, res) => {
  res.json(getDay18Summary());
});

app.get("/api/day-18/tasks", (req, res) => {
  const tasks = getDay18Tasks(req.query.topic);

  res.json({
    count: tasks.length,
    tasks,
  });
});

app.get("/api/day-18/tasks/:id", (req, res) => {
  const task = getDay18TaskById(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found",
    });
  }

  return res.json(task);
});

app.get("/api/day-18/checklist", (req, res) => {
  const checklist = getDay18Checklist();

  res.json({
    count: checklist.length,
    checklist,
  });
});

app.get("/api/day-18/progress", (req, res) => {
  res.json(getDay18Progress());
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
