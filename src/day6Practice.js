const day6Tasks = [];

const day6Checklist = [];

function getDay6Summary() {
  const completedCount = day6Tasks.filter((task) => task.completed).length;

  return {
    day: 6,
    focus: "Authentication, authorization, protected routes, and token planning",
    totalTasks: day6Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day6Tasks.length - completedCount,
  };
}

module.exports = {
  day6Tasks,
  day6Checklist,
  getDay6Summary,
};
