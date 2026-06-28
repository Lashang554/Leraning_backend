const day11Tasks = [];

function getDay11Summary() {
  const completedCount = day11Tasks.filter((task) => task.completed).length;

  return {
    day: 11,
    focus: "Mongoose models, schema validation, timestamps, and model exports",
    goal: "Turn planned MongoDB document shapes into reusable Mongoose-style model definitions",
    totalTasks: day11Tasks.length,
    completedTasks: completedCount,
    remainingTasks: day11Tasks.length - completedCount,
  };
}

module.exports = {
  day11Tasks,
  getDay11Summary,
};
