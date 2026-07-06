const day16Tasks = [
  {
    id: 1,
    title: "Create service helpers for reusable data actions",
    topic: "services",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Keep database calls out of controller functions",
    topic: "architecture",
    difficulty: "intermediate",
    completed: true,
  },
  {
    id: 3,
    title: "Plan service return values for success and missing records",
    topic: "responses",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Document which validation checks happen before service calls",
    topic: "validation",
    difficulty: "beginner",
    completed: false,
  },
  {
    id: 5,
    title: "Prepare service functions for future async database queries",
    topic: "async",
    difficulty: "intermediate",
    completed: false,
  },
];

const day16Checklist = [
  {
    id: 1,
    item: "Name service functions around the action they perform",
    done: true,
  },
  {
    id: 2,
    item: "Return plain data from services instead of Express responses",
    done: true,
  },
  {
    id: 3,
    item: "Let controllers decide HTTP status codes",
    done: false,
  },
  {
    id: 4,
    item: "Keep service modules small enough to test directly",
    done: false,
  },
];

function getDay16Summary() {
  const completedCount = day16Tasks.filter((task) => task.completed).length;

  return {
    day: 16,
    focus: "Service helpers, controller boundaries, validation flow, and async data planning",
    goal: "Prepare feature routes to call reusable service functions cleanly",
    totalTasks: day16Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day16Tasks.length - completedCount,
  };
}

function getDay16Tasks(topic) {
  if (!topic) {
    return day16Tasks;
  }

  return day16Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getDay16TaskById(id) {
  return day16Tasks.find((task) => task.id === Number(id));
}

function getDay16Checklist() {
  return day16Checklist;
}

function getDay16Progress() {
  const completedTasks = day16Tasks.filter((task) => task.completed);
  const completedChecklistItems = day16Checklist.filter((item) => item.done);

  return {
    taskProgress: `${completedTasks.length}/${day16Tasks.length}`,
    checklistProgress: `${completedChecklistItems.length}/${day16Checklist.length}`,
    nextFocus: "Build a real feature service that controllers can reuse",
  };
}

module.exports = {
  day16Tasks,
  day16Checklist,
  getDay16Summary,
  getDay16Tasks,
  getDay16TaskById,
  getDay16Checklist,
  getDay16Progress,
};
