document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
  
    const addTask = () => {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;
  
      const taskItem = document.createElement("li");
      taskItem.className = "task-item";
  
      const taskSpan = document.createElement("span");
      taskSpan.className = "task-text";
      taskSpan.textContent = taskText;
      taskSpan.addEventListener("click", () => {
        taskSpan.classList.toggle("completed");
      });
  
      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
      });
  
      taskItem.appendChild(taskSpan);
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
  
      taskInput.value = "";
    };
  
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") addTask();
    });
  });
  