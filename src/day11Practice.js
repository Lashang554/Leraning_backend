const day11Tasks = [
  {
    id: 1,
    title: "Create model files for users, notes, and learning tasks",
    topic: "models",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Add required fields and simple validation rules",
    topic: "validation",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Enable timestamps for created and updated records",
    topic: "timestamps",
    difficulty: "beginner",
    completed: false,
  },
  {
    id: 4,
    title: "Choose private fields to hide from API responses",
    topic: "security",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 5,
    title: "Export models so routes can use them later",
    topic: "exports",
    difficulty: "intermediate",
    completed: false,
  },
];

function getDay11Summary() {
  const completedCount = day11Tasks.filter((task) => task.completed).length;

  return {
    day: 11,
    focus: "Mongoose models, schema validation, timestamps, and model exports",
    goal: "Turn planned MongoDB document shapes into reusable Mongoose-style model definitions",
    totalTasks: day11Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day11Tasks.length - completedCount,
  };
}

function getDay11Tasks(topic) {
  if (!topic) {
    return day11Tasks;
  }

  return day11Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getDay11TaskById(id) {
  return day11Tasks.find((task) => task.id === Number(id));
}

module.exports = {
  day11Tasks,
  getDay11Summary,
  getDay11Tasks,
  getDay11TaskById,
};
