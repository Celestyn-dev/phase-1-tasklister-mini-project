document.addEventListener("DOMContentLoaded", () => {
  // Select the form and task list container
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Listen for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get the task description input value
    const taskInput = document.getElementById("new-task-description").value.trim();
    if (taskInput === "") return; // Do not add empty tasks

    // Get priority value
    const priority = document.getElementById("task-priority").value;

    // Create a new list item (task)
    const taskItem = document.createElement("li");
    
    // Add task text with priority label
    taskItem.innerHTML = `${taskInput} <span style="color:${priority === "high" ? "red" : priority === "medium" ? "orange" : "green"};">(${priority} priority)</span>`;

    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", function () {
      taskItem.remove();
    });

    // Append delete button to task item
    taskItem.appendChild(deleteBtn);
    
    // Append task item to task list
    taskList.appendChild(taskItem);

    // Clear input field after adding the task
    form.reset();
  });

  // Create priority dropdown
  const priorityDropdown = document.createElement("select");
  priorityDropdown.id = "task-priority";
  priorityDropdown.innerHTML = `
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
  `;

  // Insert dropdown before submit button
  form.insertBefore(priorityDropdown, form.lastElementChild);
});
