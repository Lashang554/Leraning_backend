const day22Tasks = [
  {
    id: 1,
    title: "Read bearer tokens from the Authorization header",
    topic: "token-parsing",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 2,
    title: "Return a safe 401 response when a token is missing or invalid",
    topic: "authentication-middleware",
    difficulty: "beginner",
    completed: true,
  },
  {
    id: 3,
    title: "Attach verified user details for protected route handlers",
    topic: "protected-routes",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 4,
    title: "Require an allowed role before privileged write operations",
    topic: "authorization-middleware",
    difficulty: "intermediate",
    completed: false,
  },
  {
    id: 5,
    title: "Keep token values and private user data out of authentication logs",
    topic: "security-review",
    difficulty: "intermediate",
    completed: false,
  },
];

const day22Checklist = [
  {
    id: 1,
    item: "Accept tokens only from the standard Bearer authorization scheme",
    done: true,
  },
  {
    id: 2,
    item: "Reject missing, malformed, expired, and invalid tokens with 401",
    done: true,
  },
  {
    id: 3,
    item: "Make the verified user available only after authentication succeeds",
    done: false,
  },
  {
    id: 4,
    item: "Use a separate role check for actions that need extra permission",
    done: false,
  },
];

module.exports = {
  day22Tasks,
  day22Checklist,
};
