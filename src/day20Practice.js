const day20Tasks = [
  {
    id: 1,
    title: "Identify public and protected API routes",
    topic: "access-control",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Validate request bodies before processing data",
    topic: "input-validation",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Plan rate limits for authentication and write endpoints",
    topic: "rate-limiting",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Configure allowed origins for browser clients",
    topic: "cors",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 5,
    title: "Review response data for accidental sensitive fields",
    topic: "data-exposure",
    difficulty: "intermediate",
    completed: false,
  },
];

const day20Checklist = [
  {
    id: 1,
    item: "Define which routes require an authenticated user",
    done: true,
  },
  {
    id: 2,
    item: "Validate and normalize incoming request data",
    done: true,
  },
  {
    id: 3,
    item: "Set rate limits for sensitive and expensive routes",
    done: false,
  },
  {
    id: 4,
    item: "Allow browser requests only from trusted origins",
    done: false,
  },
];

module.exports = { day20Tasks, day20Checklist };
