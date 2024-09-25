
function AddTodo() {
    // Get task name and date values
    const taskName = document.getElementById("task-name").value;
    const taskDate = document.getElementById("task-date").value;
  
    // Check if both fields are filled
    if (taskName === "" || taskDate === "") {
      alert("Please enter both task and date");
      return;
    }
  
    // Create a new list item for the task
    const taskListItem = document.createElement("li");
  
    // Add task name and date inside the list item
    taskListItem.innerHTML = `<strong>Task:</strong> ${taskName} <strong>Date:</strong> ${taskDate}`;
  
    // Create a container for the icons
    const iconsContainer = document.createElement("div");
    iconsContainer.className = "task-icons"; // Set the class for styling
  
    // Create an icon element for removing the task
    const removeIcon = document.createElement("i");
    removeIcon.className = "fa-solid fa-trash"; // Set the icon class
  
    // Add event listener to remove the specific task when the icon is clicked
    removeIcon.addEventListener("click", function () {
      taskListItem.remove();
    });
  
    // Create an icon element for editing the task
    const editIcon = document.createElement("i");
    editIcon.className = "fa-solid fa-pen-to-square";
  
    // Add event listener to edit the specific task when the icon is clicked
    editIcon.addEventListener("click", function () {
      // Populate the input fields with the current task's details
      document.getElementById("task-name").value = taskName;
      document.getElementById("task-date").value = taskDate;
  
      // Remove the task from the list after putting it into edit mode
      taskListItem.remove();
    });
  
    // Create a mark as done icon for the task
    const markDoneIcon = document.createElement("i");
    markDoneIcon.className = "fa-solid fa-circle-check";
  
    // Add event listener to mark the task as completed
    markDoneIcon.addEventListener("click", function () {
      // If the task is not marked as done yet, add the right tick
      if (!taskListItem.innerHTML.includes("(Completed)")) {
        taskListItem.innerHTML += " <strong>(Completed)</strong>"; // Add the completed status to the task
        markDoneIcon.style.pointerEvents = "none"; // Disable the button after marking as done
        markDoneIcon.style.opacity = "0.5"; // Optional: visually indicate the icon is disabled
      }
    });
  
    // Append the icons to the icons container
    iconsContainer.appendChild(editIcon);
    iconsContainer.appendChild(removeIcon);
    iconsContainer.appendChild(markDoneIcon);
  
    // Append the icons container below the task details
    taskListItem.appendChild(iconsContainer);
  
    // Append the task to the existing task list
    const taskList = document.getElementById("task-list");
    taskList.appendChild(taskListItem);
  
    // Clear input fields after adding the task
    document.getElementById("task-name").value = "";
    document.getElementById("task-date").value = "";
  }
  