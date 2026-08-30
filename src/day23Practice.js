const day23Tasks = [
  {
    id: 1,
    title: "Define the roles that can access protected API actions",
    topic: "role-design",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Create reusable middleware for checking allowed roles",
    topic: "authorization-middleware",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Return a safe 403 response when an authenticated user lacks permission",
    topic: "forbidden-responses",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Protect write actions without blocking read-only public endpoints",
    topic: "route-authorization",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 5,
    title: "Review role changes and privileged actions for audit logging",
    topic: "security-review",
    difficulty: "intermediate",
    completed: false,
  },
];

const day23Checklist = [
  {
    id: 1,
    item: "Authenticate the user before checking their role",
    done: true,
  },
  {
    id: 2,
    item: "Keep role checks in reusable middleware instead of duplicating them in routes",
    done: true,
  },
  {
    id: 3,
    item: "Return 403 when a valid user does not have the required permission",
    done: false,
  },
  {
    id: 4,
    item: "Record sensitive role changes without exposing private data",
    done: false,
  },
];

function getDay23Summary() {
  const completedCount = day23Tasks.filter((task) => task.completed).length;

  return {
    day: 23,
    focus: "Role-based authorization, permission checks, forbidden responses, and privileged-route protection",
    goal: "Apply clear, reusable role checks after authentication so users can access only allowed API actions",
    totalTasks: day23Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day23Tasks.length - completedCount,
  };
}

function getDay23Tasks(topic) {
  if (!topic) {
    return day23Tasks;
  }

  return day23Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getDay23TaskById(id) {
  return day23Tasks.find((task) => task.id === Number(id));
}

function getDay23Checklist() {
  return day23Checklist;
}

function getDay23Progress() {
  const completedTasks = day23Tasks.filter((task) => task.completed);
  const completedChecklistItems = day23Checklist.filter((item) => item.done);

  return {
    taskProgress: `${completedTasks.length}/${day23Tasks.length}`,
    checklistProgress: `${completedChecklistItems.length}/${day23Checklist.length}`,
    nextFocus: "Return safe 403 responses and apply role checks to privileged write routes",
  };
}

module.exports = {
  day23Tasks,
  day23Checklist,
  getDay23Summary,
  getDay23Tasks,
  getDay23TaskById,
  getDay23Checklist,
  getDay23Progress,
};
