const day10Tasks = [
  {
    id: 1,
    title: "Sketch user and learning-progress document shapes",
    topic: "schemas",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Choose required fields before writing model code",
    topic: "validation",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Plan references between users, notes, and tasks",
    topic: "relationships",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Identify indexes for common API lookups",
    topic: "indexes",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 5,
    title: "Document which fields should never be returned publicly",
    topic: "security",
    difficulty: "intermediate",
    completed: false,
  },
];

function getDay10Summary() {
  return {
    day: 10,
    focus: "MongoDB schema design, relationship planning, indexes, and data validation",
    goal: "Plan database models before connecting the API to a real database",
    totalTasks: day10Tasks.length,
  };
}

function getDay10Tasks(topic) {
  if (!topic) {
    return day10Tasks;
  }

  return day10Tasks.filter((task) => task.topic === topic.toLowerCase());
}

module.exports = {
  day10Tasks,
  getDay10Summary,
  getDay10Tasks,
};
