document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task').value;
    const deadlineInput = document.getElementById('deadline').value;
    const priorityInput = document.getElementById('priority').value;
    const labelInput = document.getElementById('label').value;

    if (taskInput === '' || deadlineInput === '' || labelInput === '') {
        alert('Please fill in all fields');
        return;
    }

    const taskTable = document.getElementById('taskTable').getElementsByTagName('tbody')[0];

    const newRow = taskTable.insertRow();
    const taskCell = newRow.insertCell(0);
    const deadlineCell = newRow.insertCell(1);
    const priorityCell = newRow.insertCell(2);
    const labelCell = newRow.insertCell(3);
    const statusCell = newRow.insertCell(4);
    const actionsCell = newRow.insertCell(5);

    taskCell.textContent = taskInput;
    deadlineCell.textContent = deadlineInput;
    priorityCell.textContent = priorityInput;
    labelCell.textContent = labelInput;
    statusCell.textContent = 'Not Started';
    statusCell.classList.add('status-not-started');

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => updateStatus(newRow, 'Completed'));
    actionsCell.appendChild(completeButton);

    const inProgressButton = document.createElement('button');
    inProgressButton.textContent = 'In Progress';
    inProgressButton.addEventListener('click', () => updateStatus(newRow, 'In Progress'));
    actionsCell.appendChild(inProgressButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(newRow));
    actionsCell.appendChild(deleteButton);

    clearInputs();
}

function updateStatus(row, status) {
    const statusCell = row.cells[4];
    statusCell.textContent = status;
    statusCell.className = '';
    if (status === 'Completed') {
        statusCell.classList.add('status-completed');
    } else if (status === 'In Progress') {
        statusCell.classList.add('status-in-progress');
    } else {
        statusCell.classList.add('status-not-started');
    }
}

function deleteTask(row) {
    row.remove();
}

function clearInputs() {
    document.getElementById('task').value = '';
    document.getElementById('deadline').value = '';
    document.getElementById('priority').value = 'High';
    document.getElementById('label').value = '';
}
