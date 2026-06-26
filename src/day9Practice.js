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

module.exports = {
  day9Tasks,
  getDay9Summary,
  getDay9Tasks,
  getDay9TaskById,
};
