const day7Tasks = [
  {
    id: 1,
    title: "Plan consistent error response shapes",
    topic: "errors",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Design not-found middleware behavior",
    topic: "middleware",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Map validation failures to 400 responses",
    topic: "validation",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Plan async error handling for route handlers",
    topic: "async",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 5,
    title: "List API reliability checks before deployment",
    topic: "reliability",
    difficulty: "intermediate",
    completed: false,
  },
];

function getDay7Summary() {
  const completedCount = day7Tasks.filter((task) => task.completed).length;

  return {
    day: 7,
    focus: "Error handling, validation responses, async safety, and API reliability",
    totalTasks: day7Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day7Tasks.length - completedCount,
  };
}

function getDay7Tasks(topic) {
  if (!topic) {
    return day7Tasks;
  }

  return day7Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getDay7TaskById(id) {
  return day7Tasks.find((task) => task.id === Number(id));
}

module.exports = {
  day7Tasks,
  getDay7Summary,
  getDay7Tasks,
  getDay7TaskById,
};
