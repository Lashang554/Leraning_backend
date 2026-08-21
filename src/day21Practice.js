const day21Tasks = [
  {
    id: 1,
    title: "Define the user data needed to sign in securely",
    topic: "authentication",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Keep password hashes out of API responses",
    topic: "password-security",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Design a short-lived access token payload",
    topic: "tokens",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Plan middleware for protected API routes",
    topic: "route-protection",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 5,
    title: "Decide how roles control access to write operations",
    topic: "authorization",
    difficulty: "intermediate",
    completed: false,
  },
];

const day21Checklist = [
  {
    id: 1,
    item: "Store a password hash instead of the original password",
    done: true,
  },
  {
    id: 2,
    item: "Return only safe user fields after a successful sign-in",
    done: true,
  },
  {
    id: 3,
    item: "Verify a token before allowing access to protected routes",
    done: false,
  },
  {
    id: 4,
    item: "Check a user's role before privileged write operations",
    done: false,
  },
];

function getDay21Summary() {
  const completedCount = day21Tasks.filter((task) => task.completed).length;

  return {
    day: 21,
    focus: "Authentication basics, password safety, token design, protected routes, and authorization",
    goal: "Prepare a safe authentication flow before implementing user accounts and protected resources",
    totalTasks: day21Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day21Tasks.length - completedCount,
  };
}

function getDay21Tasks(topic) {
  if (!topic) {
    return day21Tasks;
  }

  return day21Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getDay21TaskById(id) {
  return day21Tasks.find((task) => task.id === Number(id));
}

function getDay21Checklist() {
  return day21Checklist;
}

function getDay21Progress() {
  const completedTasks = day21Tasks.filter((task) => task.completed);
  const completedChecklistItems = day21Checklist.filter((item) => item.done);

  return {
    taskProgress: `${completedTasks.length}/${day21Tasks.length}`,
    checklistProgress: `${completedChecklistItems.length}/${day21Checklist.length}`,
    nextFocus: "Add sign-in validation and token-verification middleware to protected routes",
  };
}

module.exports = {
  day21Tasks,
  day21Checklist,
  getDay21Summary,
  getDay21Tasks,
  getDay21TaskById,
  getDay21Checklist,
  getDay21Progress,
};
