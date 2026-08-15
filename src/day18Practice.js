const day18Tasks = [
  {
    id: 1,
    title: "Create one consistent JSON shape for API errors",
    topic: "error-responses",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Pass unexpected route errors to Express error middleware",
    topic: "middleware",
    difficulty: "intermediate",
    completed: true,
  },
  {
    id: 3,
    title: "Keep stack traces out of production API responses",
    topic: "security",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Map common validation failures to useful client messages",
    topic: "validation",
    difficulty: "beginner",
    completed: false,
  },
  {
    id: 5,
    title: "Plan error handling for future async database operations",
    topic: "async",
    difficulty: "intermediate",
    completed: false,
  },
];

const day18Checklist = [
  {
    id: 1,
    item: "Send clients a stable error message and HTTP status code",
    done: true,
  },
  {
    id: 2,
    item: "Place the error-handling middleware after all routes",
    done: true,
  },
  {
    id: 3,
    item: "Log unexpected errors with enough request context to debug them",
    done: false,
  },
  {
    id: 4,
    item: "Avoid exposing internal implementation details to API clients",
    done: false,
  },
];

function getDay18Summary() {
  const completedCount = day18Tasks.filter((task) => task.completed).length;

  return {
    day: 18,
    focus: "Centralized Express error handling, safe client messages, and async error planning",
    goal: "Make API failures consistent, useful, and safe before adding database-backed routes",
    totalTasks: day18Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day18Tasks.length - completedCount,
  };
}

function getDay18Tasks(topic) {
  if (!topic) {
    return day18Tasks;
  }

  return day18Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getDay18TaskById(id) {
  return day18Tasks.find((task) => task.id === Number(id));
}

function getDay18Checklist() {
  return day18Checklist;
}

function getDay18Progress() {
  const completedTasks = day18Tasks.filter((task) => task.completed);
  const completedChecklistItems = day18Checklist.filter((item) => item.done);

  return {
    taskProgress: `${completedTasks.length}/${day18Tasks.length}`,
    checklistProgress: `${completedChecklistItems.length}/${day18Checklist.length}`,
    nextFocus: "Add centralized error middleware to a feature router",
  };
}

module.exports = {
  day18Tasks,
  day18Checklist,
  getDay18Summary,
  getDay18Tasks,
  getDay18TaskById,
  getDay18Checklist,
  getDay18Progress,
};
