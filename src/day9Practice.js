const day9Tasks = [
  {
    id: 1,
    title: "Write manual test cases for important API routes",
    topic: "testing",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Practice checking successful and failed responses",
    topic: "responses",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Review request logs while calling endpoints",
    topic: "debugging",
    difficulty: "beginner",
    completed: false,
  },
  {
    id: 4,
    title: "Document common backend bugs and fixes",
    topic: "debugging",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 5,
    title: "Plan automated API tests for future routes",
    topic: "automation",
    difficulty: "intermediate",
    completed: false,
  },
];

const day9Checklist = [
  {
    id: 1,
    item: "Call summary and task endpoints manually",
    done: true,
  },
  {
    id: 2,
    item: "Check one missing task id returns a not-found response",
    done: true,
  },
  {
    id: 3,
    item: "Compare server logs with each request",
    done: false,
  },
  {
    id: 4,
    item: "List test cases to automate later",
    done: false,
  },
];

function getDay9Summary() {
  const completedCount = day9Tasks.filter((task) => task.completed).length;

  return {
    day: 9,
    focus: "API testing, response checks, debugging logs, and automated test planning",
    totalTasks: day9Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day9Tasks.length - completedCount,
  };
}

function getDay9Tasks(topic) {
  if (!topic) {
    return day9Tasks;
  }

  return day9Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getDay9TaskById(id) {
  return day9Tasks.find((task) => task.id === Number(id));
}

function getDay9Checklist() {
  return day9Checklist;
}

function getDay9Progress() {
  const completedTasks = day9Tasks.filter((task) => task.completed);
  const completedChecklistItems = day9Checklist.filter((item) => item.done);

  return {
    taskProgress: `${completedTasks.length}/${day9Tasks.length}`,
    checklistProgress: `${completedChecklistItems.length}/${day9Checklist.length}`,
    nextFocus: "Turn manual route checks into repeatable automated API tests",
  };
}

module.exports = {
  day9Tasks,
  day9Checklist,
  getDay9Summary,
  getDay9Tasks,
  getDay9TaskById,
  getDay9Checklist,
  getDay9Progress,
};
