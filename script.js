function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const task = document.createElement("div");
    task.className = "task";

    task.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button onclick="completeTask(this)">Done</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(task);

    input.value = "";
}

function completeTask(button) {
    const task = button.parentElement.parentElement;
    task.classList.toggle("completed");
}

function deleteTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
}