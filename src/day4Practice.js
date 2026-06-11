const day4Projects = [
  {
    id: 1,
    name: "Learning Tracker API",
    topic: "crud",
    status: "in-progress",
    priority: "high",
  },
  {
    id: 2,
    name: "Habit Logger",
    topic: "rest",
    status: "planned",
    priority: "medium",
  },
  {
    id: 3,
    name: "Book Notes API",
    topic: "controllers",
    status: "planned",
    priority: "medium",
  },
];

const day4Checklist = [
  {
    id: 1,
    title: "Separate route logic into helper functions",
    completed: true,
  },
  {
    id: 2,
    title: "Practice REST-style project endpoints",
    completed: true,
  },
  {
    id: 3,
    title: "Handle missing project records",
    completed: false,
  },
  {
    id: 4,
    title: "Return useful project metadata",
    completed: false,
  },
];

function getDay4Summary() {
  const completedCount = day4Checklist.filter((item) => item.completed).length;

  return {
    day: 4,
    focus: "REST project resources, helper functions, and cleaner API responses",
    totalProjects: day4Projects.length,
    totalChecklistItems: day4Checklist.length,
    completedChecklistItems: completedCount,
    remainingChecklistItems: day4Checklist.length - completedCount,
  };
}

function getDay4Projects(topic) {
  if (!topic) {
    return day4Projects;
  }

  return day4Projects.filter((project) => project.topic === topic.toLowerCase());
}

function getDay4ProjectById(id) {
  return day4Projects.find((project) => project.id === Number(id));
}

function getDay4Checklist() {
  return day4Checklist;
}

module.exports = {
  day4Projects,
  getDay4Summary,
  getDay4Projects,
  getDay4ProjectById,
  getDay4Checklist,
};
