const day13Tasks = [
  {
    id: 1,
    title: "Create a seed data plan for users and learning tasks",
    topic: "seed-data",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Decide which sample records are safe for local development",
    topic: "development",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Plan a reusable seed script for database resets",
    topic: "scripts",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Document when seed data should run automatically",
    topic: "workflow",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 5,
    title: "Prepare cleanup rules before reseeding collections",
    topic: "cleanup",
    difficulty: "intermediate",
    completed: false,
  },
];

function getDay13Summary() {
  const completedCount = day13Tasks.filter((task) => task.completed).length;

  return {
    day: 13,
    focus: "Database seed data, local development records, and repeatable reset scripts",
    goal: "Prepare realistic sample data so future database-backed routes can be tested faster",
    totalTasks: day13Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day13Tasks.length - completedCount,
  };
}

function getDay13Tasks(topic) {
  if (!topic) {
    return day13Tasks;
  }

  return day13Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getDay13TaskById(id) {
  return day13Tasks.find((task) => task.id === Number(id));
}

module.exports = {
  day13Tasks,
  getDay13Summary,
  getDay13Tasks,
  getDay13TaskById,
};
