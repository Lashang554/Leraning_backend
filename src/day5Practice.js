const day5Lessons = [
  {
    id: 1,
    title: "Create a Mongoose-style schema plan",
    topic: "database",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Understand models and collections",
    topic: "mongoose",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Design create and read data flows",
    topic: "crud",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Plan validation before saving records",
    topic: "validation",
    difficulty: "intermediate",
    completed: false,
  },
];

function getDay5Summary() {
  const completedCount = day5Lessons.filter((lesson) => lesson.completed).length;

  return {
    day: 5,
    focus: "MongoDB planning, Mongoose models, and database-backed CRUD flow",
    totalLessons: day5Lessons.length,
    completedLessons: completedCount,
    remainingLessons: day5Lessons.length - completedCount,
  };
}

function getDay5Lessons(topic) {
  if (!topic) {
    return day5Lessons;
  }

  return day5Lessons.filter((lesson) => lesson.topic === topic.toLowerCase());
}

module.exports = {
  day5Lessons,
  getDay5Summary,
  getDay5Lessons,
};
