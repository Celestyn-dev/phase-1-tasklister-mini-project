document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  if (!taskForm || !taskList) {
    console.error("Form or task list not found!");
    return;
  }

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    if (!taskInput) {
      console.error("Task input field not found!");
      return;
    }

    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Add Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", () => taskItem.remove());

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = "";
  });
});
