// Function to prompt for a single task's data
function getTask(taskNumber) {
  const task = {};

  // Prompt for title and description once
  task.title = prompt(`Enter title for Task ${taskNumber}:`);
  task.description = prompt(`Enter description for Task ${taskNumber}:`);

  // Loop until a valid status is provided
  while (true) {
    let statusInput = prompt(`Enter status for Task ${taskNumber} (todo, doing, done):`);
    if (!statusInput) continue;

    const normalizedStatus = statusInput.toLowerCase();

    if (["todo", "doing", "done"].includes(normalizedStatus)) {
      task.status = normalizedStatus;
      break;
    } else {
      alert("❗ Invalid status. Please enter 'todo', 'doing', or 'done'.");
    }
  }

  return task;
}

// Function to handle task entry and logging
function handleTaskEntry() {
  const task1 = getTask(1);
  const task2 = getTask(2);

  const tasks = [task1, task2];

  // Filter tasks with status "done"
  const completedTasks = tasks.filter(task => task.status === "done");

  if (completedTasks.length > 0) {
    completedTasks.forEach(task => {
      console.log(`Title: ${task.title}, status: ${task.status}`);
    });
  } else {
    console.log("No tasks completed, let's get to work!");
  }
}

// Run on page load
window.onload = handleTaskEntry;
