const day2Tasks = [
  {
    id: 1,
    title: "Create an Express route",
    topic: "routing",
    completed: true,
  },
  {
    id: 2,
    title: "Return JSON response",
    topic: "api",
    completed: true,
  },
  {
    id: 3,
    title: "Practice route parameters",
    topic: "routing",
    completed: false,
  },
  {
    id: 4,
    title: "Practice query parameters",
    topic: "request",
    completed: false,
  },
];

function getDay2Summary() {
  const completedCount = day2Tasks.filter((task) => task.completed).length;

  return {
    day: 2,
    focus: "Express routes, JSON responses, and request parameters",
    totalTasks: day2Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day2Tasks.length - completedCount,
  };
}

function getTasksByTopic(topic) {
  if (!topic) {
    return day2Tasks;
  }

  return day2Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getTaskById(id) {
  return day2Tasks.find((task) => task.id === Number(id));
}

module.exports = {
  day2Tasks,
  getDay2Summary,
  getTasksByTopic,
  getTaskById,
};
