const day17Tasks = [
  {
    id: 1,
    title: "Create validation helpers before controller actions run",
    topic: "validation",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Return clear messages for missing required request fields",
    topic: "errors",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Keep controllers focused on request parsing and responses",
    topic: "controllers",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Let services report not-found results without choosing status codes",
    topic: "services",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 5,
    title: "Plan reusable validation rules for future create and update routes",
    topic: "validation",
    difficulty: "intermediate",
    completed: false,
  },
];

const day17Checklist = [
  {
    id: 1,
    item: "Validate required fields before calling service helpers",
    done: true,
  },
  {
    id: 2,
    item: "Use consistent JSON shapes for validation errors",
    done: true,
  },
  {
    id: 3,
    item: "Keep HTTP status decisions inside controllers",
    done: false,
  },
  {
    id: 4,
    item: "Reuse validation helpers across create and update actions",
    done: false,
  },
];

function getDay17Summary() {
  const completedCount = day17Tasks.filter((task) => task.completed).length;

  return {
    day: 17,
    focus: "Validation helpers, controller responses, service errors, and reusable request rules",
    goal: "Prepare feature routes to reject bad input before service logic runs",
    totalTasks: day17Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day17Tasks.length - completedCount,
  };
}

function getDay17Tasks(topic) {
  if (!topic) {
    return day17Tasks;
  }

  return day17Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getDay17TaskById(id) {
  return day17Tasks.find((task) => task.id === Number(id));
}

function getDay17Checklist() {
  return day17Checklist;
}

function getDay17Progress() {
  const completedTasks = day17Tasks.filter((task) => task.completed);
  const completedChecklistItems = day17Checklist.filter((item) => item.done);

  return {
    taskProgress: `${completedTasks.length}/${day17Tasks.length}`,
    checklistProgress: `${completedChecklistItems.length}/${day17Checklist.length}`,
    nextFocus: "Build reusable validation middleware for one real resource route",
  };
}

module.exports = {
  day17Tasks,
  day17Checklist,
  getDay17Summary,
  getDay17Tasks,
  getDay17TaskById,
  getDay17Checklist,
  getDay17Progress,
};
