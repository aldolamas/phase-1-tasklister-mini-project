document.addEventListener("DOMContentLoaded", () => {
  let taskForm = document.getElementById('create-task-form');
  taskForm.addEventListener('submit', submitFunc);
});

function submitFunc(e) {
  e.preventDefault();

  let taskList = document.getElementById('tasks');
  let task = document.createElement('li');
  task.textContent = e.target['new-task-description'].value;
  let taskText = e.target['new-task-description'].value
  task.textContent = `${taskText} `
  taskList.append(task);

  let btn = document.createElement('button');
  btn.textContent = 'x';
  btn.addEventListener('click', handleDelete);
  task.append(btn);

  e.target.reset();
}

function handleDelete(e) {
  e.target.parentNode.remove()
}