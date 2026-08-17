const day19Tasks = [
  {
    id: 1,
    title: "Log each API request with its method and path",
    topic: "request-logging",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Include response status codes in production request logs",
    topic: "observability",
    difficulty: "intermediate",
    completed: true,
  },
  {
    id: 3,
    title: "Measure how long important API requests take",
    topic: "performance",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Avoid logging passwords, tokens, and private request data",
    topic: "security",
    difficulty: "beginner",
    completed: false,
  },
  {
    id: 5,
    title: "Plan structured logs for future database-backed routes",
    topic: "structured-logging",
    difficulty: "intermediate",
    completed: false,
  },
];

const day19Checklist = [
  {
    id: 1,
    item: "Record the request method and path for each API call",
    done: true,
  },
  {
    id: 2,
    item: "Keep sensitive values out of application logs",
    done: true,
  },
  {
    id: 3,
    item: "Capture response status and duration for debugging",
    done: false,
  },
  {
    id: 4,
    item: "Use a consistent log format that production tools can parse",
    done: false,
  },
];

function getDay19Summary() {
  const completedCount = day19Tasks.filter((task) => task.completed).length;

  return {
    day: 19,
    focus: "Request logging, safe observability, response timing, and structured log planning",
    goal: "Make API behavior visible without exposing sensitive data",
    totalTasks: day19Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day19Tasks.length - completedCount,
  };
}

function getDay19Tasks(topic) {
  if (!topic) {
    return day19Tasks;
  }

  return day19Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getDay19TaskById(id) {
  return day19Tasks.find((task) => task.id === Number(id));
}

function getDay19Checklist() {
  return day19Checklist;
}

function getDay19Progress() {
  const completedTasks = day19Tasks.filter((task) => task.completed);
  const completedChecklistItems = day19Checklist.filter((item) => item.done);

  return {
    taskProgress: `${completedTasks.length}/${day19Tasks.length}`,
    checklistProgress: `${completedChecklistItems.length}/${day19Checklist.length}`,
    nextFocus: "Add response status and duration to the request logger",
  };
}

module.exports = {
  day19Tasks,
  day19Checklist,
  getDay19Summary,
  getDay19Tasks,
  getDay19TaskById,
  getDay19Checklist,
  getDay19Progress,
};
