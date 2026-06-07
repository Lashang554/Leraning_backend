const express = require("express");

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
    endpoints: ["/health", "/api/topics"],
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
