const day7Tasks = [
  {
    id: 1,
    title: "Plan consistent error response shapes",
    topic: "errors",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Design not-found middleware behavior",
    topic: "middleware",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Map validation failures to 400 responses",
    topic: "validation",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Plan async error handling for route handlers",
    topic: "async",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 5,
    title: "List API reliability checks before deployment",
    topic: "reliability",
    difficulty: "intermediate",
    completed: false,
  },
];

const day7Checklist = [
  {
    id: 1,
    item: "Use one error JSON shape across routes",
    done: true,
  },
  {
    id: 2,
    item: "Return helpful messages for missing records",
    done: true,
  },
  {
    id: 3,
    item: "Keep validation errors clear for API clients",
    done: false,
  },
  {
    id: 4,
    item: "Review async handlers before adding database calls",
    done: false,
  },
];

function getDay7Summary() {
  const completedCount = day7Tasks.filter((task) => task.completed).length;

  return {
    day: 7,
    focus: "Error handling, validation responses, async safety, and API reliability",
    totalTasks: day7Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day7Tasks.length - completedCount,
  };
}

function getDay7Tasks(topic) {
  if (!topic) {
    return day7Tasks;
  }

  return day7Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getDay7TaskById(id) {
  return day7Tasks.find((task) => task.id === Number(id));
}

function getDay7Checklist() {
  return day7Checklist;
}

function getDay7Progress() {
  const completedTasks = day7Tasks.filter((task) => task.completed);
  const completedChecklistItems = day7Checklist.filter((item) => item.done);

  return {
    taskProgress: `${completedTasks.length}/${day7Tasks.length}`,
    checklistProgress: `${completedChecklistItems.length}/${day7Checklist.length}`,
    nextFocus: "Add reusable error middleware when async routes are introduced",
  };
}

module.exports = {
  day7Tasks,
  day7Checklist,
  getDay7Summary,
  getDay7Tasks,
  getDay7TaskById,
  getDay7Checklist,
  getDay7Progress,
};
