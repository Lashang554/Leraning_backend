const day22Tasks = [
  {
    id: 1,
    title: "Read bearer tokens from the Authorization header",
    topic: "token-parsing",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Return a safe 401 response when a token is missing or invalid",
    topic: "authentication-middleware",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Attach verified user details for protected route handlers",
    topic: "protected-routes",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Require an allowed role before privileged write operations",
    topic: "authorization-middleware",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 5,
    title: "Keep token values and private user data out of authentication logs",
    topic: "security-review",
    difficulty: "intermediate",
    completed: false,
  },
];

const day22Checklist = [
  {
    id: 1,
    item: "Accept tokens only from the standard Bearer authorization scheme",
    done: true,
  },
  {
    id: 2,
    item: "Reject missing, malformed, expired, and invalid tokens with 401",
    done: true,
  },
  {
    id: 3,
    item: "Make the verified user available only after authentication succeeds",
    done: false,
  },
  {
    id: 4,
    item: "Use a separate role check for actions that need extra permission",
    done: false,
  },
];

function getDay22Summary() {
  const completedCount = day22Tasks.filter((task) => task.completed).length;

  return {
    day: 22,
    focus: "Authentication middleware, bearer-token handling, protected routes, and role checks",
    goal: "Apply authentication and authorization checks consistently before protected API actions run",
    totalTasks: day22Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day22Tasks.length - completedCount,
  };
}

function getDay22Tasks(topic) {
  if (!topic) {
    return day22Tasks;
  }

  return day22Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getDay22TaskById(id) {
  return day22Tasks.find((task) => task.id === Number(id));
}

function getDay22Checklist() {
  return day22Checklist;
}

function getDay22Progress() {
  const completedTasks = day22Tasks.filter((task) => task.completed);
  const completedChecklistItems = day22Checklist.filter((item) => item.done);

  return {
    taskProgress: `${completedTasks.length}/${day22Tasks.length}`,
    checklistProgress: `${completedChecklistItems.length}/${day22Checklist.length}`,
    nextFocus: "Attach verified user data and add role checks to protected write routes",
  };
}

module.exports = {
  day22Tasks,
  day22Checklist,
  getDay22Summary,
  getDay22Tasks,
  getDay22TaskById,
  getDay22Checklist,
  getDay22Progress,
};
