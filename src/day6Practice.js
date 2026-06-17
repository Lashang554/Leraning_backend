const day6Tasks = [
  {
    id: 1,
    title: "Compare authentication and authorization",
    topic: "auth-basics",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Plan password hashing before saving users",
    topic: "security",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Sketch JWT payload and expiry fields",
    topic: "tokens",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Design protected route middleware",
    topic: "middleware",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 5,
    title: "Map roles to allowed actions",
    topic: "authorization",
    difficulty: "intermediate",
    completed: false,
  },
];

const day6Checklist = [];

function getDay6Summary() {
  const completedCount = day6Tasks.filter((task) => task.completed).length;

  return {
    day: 6,
    focus: "Authentication, authorization, protected routes, and token planning",
    totalTasks: day6Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day6Tasks.length - completedCount,
  };
}

function getDay6Tasks(topic) {
  if (!topic) {
    return day6Tasks;
  }

  return day6Tasks.filter((task) => task.topic === topic.toLowerCase());
}

module.exports = {
  day6Tasks,
  day6Checklist,
  getDay6Summary,
  getDay6Tasks,
};
