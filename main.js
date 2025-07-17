function getTask(taskNumber) {
  const task = {};

  task.title = prompt(`Enter title for Task ${taskNumber}:`);
  task.description = prompt(`Enter description for Task ${taskNumber}:`);

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

function handleTaskEntry() {
  const task1 = getTask(1);
  const task2 = getTask(2);
  const tasks = [task1, task2];

  console.log("Task Entries:");
  tasks.forEach((task, index) => {
    console.log(`Task ${index + 1} → Title: ${task.title}, Description: ${task.description}, Status: ${task.status}`);
  });

  const completedTasks = tasks.filter(task => task.status === "done");

  if (completedTasks.length > 0) {
    console.log("Completed Tasks:");
    completedTasks.forEach(task => {
      console.log(`Title: ${task.title}, status: ${task.status}`);
    });
  } else {
    console.log("No tasks completed, let's get to work!");
  }
}

window.onload = handleTaskEntry;
