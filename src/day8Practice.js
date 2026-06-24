const day8Tasks = [
  {
    id: 1,
    title: "Review environment variables before deployment",
    topic: "environment",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Plan production database connection settings",
    topic: "database",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Prepare API health checks for hosting platforms",
    topic: "health-checks",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "List deployment logs to inspect after release",
    topic: "monitoring",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 5,
    title: "Document production testing steps",
    topic: "testing",
    difficulty: "intermediate",
    completed: false,
  },
];

const day8Checklist = [
  {
    id: 1,
    item: "Confirm required environment variables are listed",
    done: true,
  },
  {
    id: 2,
    item: "Check production database connection plan",
    done: true,
  },
  {
    id: 3,
    item: "Verify health endpoint response after deployment",
    done: false,
  },
  {
    id: 4,
    item: "Review server logs after first production request",
    done: false,
  },
];

function getDay8Summary() {
  const completedCount = day8Tasks.filter((task) => task.completed).length;

  return {
    day: 8,
    focus: "Deployment planning, production settings, health checks, and release review",
    totalTasks: day8Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day8Tasks.length - completedCount,
  };
}

function getDay8Tasks(topic) {
  if (!topic) {
    return day8Tasks;
  }

  return day8Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getDay8TaskById(id) {
  return day8Tasks.find((task) => task.id === Number(id));
}

function getDay8Checklist() {
  return day8Checklist;
}

function getDay8Progress() {
  const completedTasks = day8Tasks.filter((task) => task.completed);
  const completedChecklistItems = day8Checklist.filter((item) => item.done);

  return {
    taskProgress: `${completedTasks.length}/${day8Tasks.length}`,
    checklistProgress: `${completedChecklistItems.length}/${day8Checklist.length}`,
    nextFocus: "Deploy the API and verify the health endpoint in production",
  };
}

module.exports = {
  day8Tasks,
  day8Checklist,
  getDay8Summary,
  getDay8Tasks,
  getDay8TaskById,
  getDay8Checklist,
  getDay8Progress,
};
