const day3Tasks = [
  {
    id: 1,
    title: "Create reusable middleware",
    topic: "middleware",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Read JSON request bodies",
    topic: "request",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Validate required fields",
    topic: "validation",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Return the correct status codes",
    topic: "response",
    difficulty: "intermediate",
    completed: false,
  },
];

const practiceNotes = [];

function getDay3Summary() {
  const completedCount = day3Tasks.filter((task) => task.completed).length;

  return {
    day: 3,
    focus: "Express middleware, JSON request bodies, and validation",
    totalTasks: day3Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day3Tasks.length - completedCount,
  };
}

function getDay3TasksByTopic(topic) {
  if (!topic) {
    return day3Tasks;
  }

  return day3Tasks.filter((task) => task.topic === topic.toLowerCase());
}

function getCompletedDay3Tasks() {
  return day3Tasks.filter((task) => task.completed);
}

function createPracticeNote(note) {
  const newNote = {
    id: practiceNotes.length + 1,
    title: note.title,
    content: note.content,
    createdAt: new Date().toISOString(),
  };

  practiceNotes.push(newNote);

  return newNote;
}

function getPracticeNotes() {
  return practiceNotes;
}

module.exports = {
  day3Tasks,
  getDay3Summary,
  getDay3TasksByTopic,
  getCompletedDay3Tasks,
  createPracticeNote,
  getPracticeNotes,
};
