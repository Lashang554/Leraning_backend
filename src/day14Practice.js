const day14Tasks = [
  {
    id: 1,
    title: "Plan controllers for user and learning task routes",
    topic: "controllers",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Separate route handlers from server setup",
    topic: "routing",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Create reusable service functions for database actions",
    topic: "services",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Decide which errors belong in controllers versus middleware",
    topic: "errors",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 5,
    title: "Document the folder structure before adding real MongoDB routes",
    topic: "architecture",
    difficulty: "beginner",
    completed: false,
  },
];

const day14Checklist = [
  {
    id: 1,
    item: "Keep server startup separate from route logic",
    done: true,
  },
  {
    id: 2,
    item: "Name controller files after the resource they handle",
    done: true,
  },
  {
    id: 3,
    item: "Move database reads and writes into service helpers",
    done: false,
  },
  {
    id: 4,
    item: "Use middleware for repeated validation and error behavior",
    done: false,
  },
];

function getDay14Summary() {
  const completedCount = day14Tasks.filter((task) => task.completed).length;

  return {
    day: 14,
    focus: "Controller structure, service helpers, and cleaner Express route organization",
    goal: "Prepare the API folder structure before adding real database-backed feature routes",
    totalTasks: day14Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day14Tasks.length - completedCount,
  };
}

function getDay14Tasks(topic) {
  if (!topic) {
    return day14Tasks;
  }

  return day14Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getDay14TaskById(id) {
  return day14Tasks.find((task) => task.id === Number(id));
}

function getDay14Checklist() {
  return day14Checklist;
}

function getDay14Progress() {
  const completedTasks = day14Tasks.filter((task) => task.completed);
  const completedChecklistItems = day14Checklist.filter((item) => item.done);

  return {
    taskProgress: `${completedTasks.length}/${day14Tasks.length}`,
    checklistProgress: `${completedChecklistItems.length}/${day14Checklist.length}`,
    nextFocus: "Refactor a real resource route into router, controller, and service files",
  };
}

module.exports = {
  day14Tasks,
  day14Checklist,
  getDay14Summary,
  getDay14Tasks,
  getDay14TaskById,
  getDay14Checklist,
  getDay14Progress,
};
