const day8Tasks = [
  {
    id: 1,
    title: "Review environment variables before deployment",
    topic: "environment",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Plan production database connection settings",
    topic: "database",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Prepare API health checks for hosting platforms",
    topic: "health-checks",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "List deployment logs to inspect after release",
    topic: "monitoring",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 5,
    title: "Document production testing steps",
    topic: "testing",
    difficulty: "intermediate",
    completed: false,
  },
];

function getDay8Summary() {
  const completedCount = day8Tasks.filter((task) => task.completed).length;

  return {
    day: 8,
    focus: "Deployment planning, production settings, health checks, and release review",
    totalTasks: day8Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day8Tasks.length - completedCount,
  };
}

function getDay8Tasks(topic) {
  if (!topic) {
    return day8Tasks;
  }

  return day8Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getDay8TaskById(id) {
  return day8Tasks.find((task) => task.id === Number(id));
}

module.exports = {
  day8Tasks,
  getDay8Summary,
  getDay8Tasks,
  getDay8TaskById,
};
