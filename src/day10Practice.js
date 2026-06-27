const day10Tasks = [
  {
    id: 1,
    title: "Sketch user and learning-progress document shapes",
    topic: "schemas",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Choose required fields before writing model code",
    topic: "validation",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Plan references between users, notes, and tasks",
    topic: "relationships",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Identify indexes for common API lookups",
    topic: "indexes",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 5,
    title: "Document which fields should never be returned publicly",
    topic: "security",
    difficulty: "intermediate",
    completed: false,
  },
];

const day10Checklist = [
  {
    id: 1,
    item: "List fields for each planned MongoDB collection",
    done: true,
  },
  {
    id: 2,
    item: "Mark required, optional, and private fields",
    done: true,
  },
  {
    id: 3,
    item: "Choose embedded data versus referenced documents",
    done: false,
  },
  {
    id: 4,
    item: "Plan indexes for email, owner id, and status filters",
    done: false,
  },
];

function getDay10Summary() {
  const completedCount = day10Tasks.filter((task) => task.completed).length;

  return {
    day: 10,
    focus: "MongoDB schema design, relationship planning, indexes, and data validation",
    goal: "Plan database models before connecting the API to a real database",
    totalTasks: day10Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day10Tasks.length - completedCount,
  };
}

function getDay10Tasks(topic) {
  if (!topic) {
    return day10Tasks;
  }

  return day10Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getDay10TaskById(id) {
  return day10Tasks.find((task) => task.id === Number(id));
}

function getDay10Checklist() {
  return day10Checklist;
}

function getDay10Progress() {
  const completedTasks = day10Tasks.filter((task) => task.completed);
  const completedChecklistItems = day10Checklist.filter((item) => item.done);

  return {
    taskProgress: `${completedTasks.length}/${day10Tasks.length}`,
    checklistProgress: `${completedChecklistItems.length}/${day10Checklist.length}`,
    nextFocus: "Turn the planned schemas into Mongoose models and connect them to routes",
  };
}

module.exports = {
  day10Tasks,
  day10Checklist,
  getDay10Summary,
  getDay10Tasks,
  getDay10TaskById,
  getDay10Checklist,
  getDay10Progress,
};
