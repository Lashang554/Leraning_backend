const express = require("express");
const {
  getDay2Summary,
  getTasksByTopic,
  getTaskById,
} = require("./day2Practice");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

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
    endpoints: ["/health", "/api/topics", "/api/day-2", "/api/day-2/tasks"],
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
