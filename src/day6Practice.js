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

const day6Checklist = [
  {
    id: 1,
    item: "Create user registration route plan",
    done: true,
  },
  {
    id: 2,
    item: "Create login route plan",
    done: true,
  },
  {
    id: 3,
    item: "Add token verification middleware notes",
    done: false,
  },
  {
    id: 4,
    item: "Add role-based authorization notes",
    done: false,
  },
];

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

function getDay6TaskById(id) {
  return day6Tasks.find((task) => task.id === Number(id));
}

function getDay6Checklist() {
  return day6Checklist;
}

module.exports = {
  day6Tasks,
  day6Checklist,
  getDay6Summary,
  getDay6Tasks,
  getDay6TaskById,
  getDay6Checklist,
};
