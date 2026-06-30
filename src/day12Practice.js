const day12Tasks = [
  {
    id: 1,
    title: "Read the MongoDB connection string from environment variables",
    topic: "environment",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Create a reusable database connection helper",
    topic: "connection",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Handle successful and failed database connection attempts",
    topic: "errors",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Start the Express server after the database is ready",
    topic: "startup",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 5,
    title: "Document local and production database setup steps",
    topic: "documentation",
    difficulty: "beginner",
    completed: false,
  },
];

function getDay12Summary() {
  const completedCount = day12Tasks.filter((task) => task.completed).length;

  return {
    day: 12,
    focus: "MongoDB connection setup, environment variables, and database startup flow",
    goal: "Prepare the Express API to connect safely to MongoDB before adding database-backed routes",
    totalTasks: day12Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day12Tasks.length - completedCount,
  };
}

function getDay12Tasks(topic) {
  if (!topic) {
    return day12Tasks;
  }

  return day12Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getDay12TaskById(id) {
  return day12Tasks.find((task) => task.id === Number(id));
}

module.exports = {
  day12Tasks,
  getDay12Summary,
  getDay12Tasks,
  getDay12TaskById,
};
