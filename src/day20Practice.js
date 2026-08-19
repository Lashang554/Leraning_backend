const day20Tasks = [
  {
    id: 1,
    title: "Identify public and protected API routes",
    topic: "access-control",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Validate request bodies before processing data",
    topic: "input-validation",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Plan rate limits for authentication and write endpoints",
    topic: "rate-limiting",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Configure allowed origins for browser clients",
    topic: "cors",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 5,
    title: "Review response data for accidental sensitive fields",
    topic: "data-exposure",
    difficulty: "intermediate",
    completed: false,
  },
];

const day20Checklist = [
  {
    id: 1,
    item: "Define which routes require an authenticated user",
    done: true,
  },
  {
    id: 2,
    item: "Validate and normalize incoming request data",
    done: true,
  },
  {
    id: 3,
    item: "Set rate limits for sensitive and expensive routes",
    done: false,
  },
  {
    id: 4,
    item: "Allow browser requests only from trusted origins",
    done: false,
  },
];

function getDay20Summary() {
  const completedCount = day20Tasks.filter((task) => task.completed).length;

  return {
    day: 20,
    focus: "Access control, input validation, rate limiting, CORS, and safe response data",
    goal: "Reduce API attack surface before adding authentication and database-backed routes",
    totalTasks: day20Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day20Tasks.length - completedCount,
  };
}

function getDay20Tasks(topic) {
  if (!topic) {
    return day20Tasks;
  }

  return day20Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getDay20TaskById(id) {
  return day20Tasks.find((task) => task.id === Number(id));
}

function getDay20Checklist() {
  return day20Checklist;
}

function getDay20Progress() {
  const completedTasks = day20Tasks.filter((task) => task.completed);
  const completedChecklistItems = day20Checklist.filter((item) => item.done);

  return {
    taskProgress: `${completedTasks.length}/${day20Tasks.length}`,
    checklistProgress: `${completedChecklistItems.length}/${day20Checklist.length}`,
    nextFocus: "Add authentication middleware and rate limits to sensitive API routes",
  };
}

module.exports = {
  day20Tasks,
  day20Checklist,
  getDay20Summary,
  getDay20Tasks,
  getDay20TaskById,
  getDay20Checklist,
  getDay20Progress,
};
