const day15Tasks = [
  {
    id: 1,
    title: "Create a router for learning task endpoints",
    topic: "routers",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Move repeated not-found responses into middleware",
    topic: "middleware",
    difficulty: "intermediate",
    completed: true,
  },
  {
    id: 3,
    title: "Design controller actions for list, detail, create, update, and delete",
    topic: "controllers",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Plan validation rules before accepting request bodies",
    topic: "validation",
    difficulty: "beginner",
    completed: false,
  },
  {
    id: 5,
    title: "Review how route files will connect to database services",
    topic: "services",
    difficulty: "intermediate",
    completed: false,
  },
];

const day15Checklist = [
  {
    id: 1,
    item: "Keep route files focused on paths and middleware order",
    done: true,
  },
  {
    id: 2,
    item: "Keep controllers focused on request and response behavior",
    done: true,
  },
  {
    id: 3,
    item: "Keep service helpers focused on data access",
    done: false,
  },
  {
    id: 4,
    item: "Return consistent errors from every feature route",
    done: false,
  },
];

function getDay15Summary() {
  const completedCount = day15Tasks.filter((task) => task.completed).length;

  return {
    day: 15,
    focus: "Express routers, controller actions, validation planning, and route-level cleanup",
    goal: "Turn the planned API structure into cleaner feature route modules",
    totalTasks: day15Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day15Tasks.length - completedCount,
  };
}

function getDay15Tasks(topic) {
  if (!topic) {
    return day15Tasks;
  }

  return day15Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getDay15TaskById(id) {
  return day15Tasks.find((task) => task.id === Number(id));
}

function getDay15Checklist() {
  return day15Checklist;
}

function getDay15Progress() {
  const completedTasks = day15Tasks.filter((task) => task.completed);
  const completedChecklistItems = day15Checklist.filter((item) => item.done);

  return {
    taskProgress: `${completedTasks.length}/${day15Tasks.length}`,
    checklistProgress: `${completedChecklistItems.length}/${day15Checklist.length}`,
    nextFocus: "Create the first real router, controller, and service files for one resource",
  };
}

module.exports = {
  day15Tasks,
  day15Checklist,
  getDay15Summary,
  getDay15Tasks,
  getDay15TaskById,
  getDay15Checklist,
  getDay15Progress,
};
