async function addTask() {

    const task =
        document.getElementById('taskInput').value;

    await fetch('/tasks', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            task
        })
    });

    loadTasks();
}

async function loadTasks() {

    const response =
        await fetch('/tasks');

    const tasks =
        await response.json();

    const list =
        document.getElementById('taskList');

    list.innerHTML = '';

    tasks.forEach(task => {

        list.innerHTML += `
            <li>${task}</li>
        `;
    });
}

loadTasks();