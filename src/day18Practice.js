const day18Tasks = [
  {
    id: 1,
    title: "Create one consistent JSON shape for API errors",
    topic: "error-responses",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Pass unexpected route errors to Express error middleware",
    topic: "middleware",
    difficulty: "intermediate",
    completed: true,
  },
  {
    id: 3,
    title: "Keep stack traces out of production API responses",
    topic: "security",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Map common validation failures to useful client messages",
    topic: "validation",
    difficulty: "beginner",
    completed: false,
  },
  {
    id: 5,
    title: "Plan error handling for future async database operations",
    topic: "async",
    difficulty: "intermediate",
    completed: false,
  },
];

const day18Checklist = [
  {
    id: 1,
    item: "Send clients a stable error message and HTTP status code",
    done: true,
  },
  {
    id: 2,
    item: "Place the error-handling middleware after all routes",
    done: true,
  },
  {
    id: 3,
    item: "Log unexpected errors with enough request context to debug them",
    done: false,
  },
  {
    id: 4,
    item: "Avoid exposing internal implementation details to API clients",
    done: false,
  },
];

module.exports = {
  day18Tasks,
  day18Checklist,
};
