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

const day5StudySessions = [
  {
    id: 1,
    title: "Sketch database fields for a learning topic",
    minutes: 25,
    type: "planning",
    completed: true,
  },
  {
    id: 2,
    title: "Map API request body to model fields",
    minutes: 30,
    type: "crud",
    completed: false,
  },
  {
    id: 3,
    title: "Write validation rules for required data",
    minutes: 20,
    type: "validation",
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

function getDay5LessonById(id) {
  return day5Lessons.find((lesson) => lesson.id === Number(id));
}

function getDay5StudySessions(type) {
  if (!type) {
    return day5StudySessions;
  }

  return day5StudySessions.filter(
    (session) => session.type === type.toLowerCase()
  );
}

module.exports = {
  day5Lessons,
  day5StudySessions,
  getDay5Summary,
  getDay5Lessons,
  getDay5LessonById,
  getDay5StudySessions,
};
