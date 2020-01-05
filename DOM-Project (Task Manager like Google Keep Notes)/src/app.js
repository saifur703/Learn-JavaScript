import './app.css';
import './icons';

window.onload = function() {
  const taskField = document.querySelector('#taskField');
  const allTasks = document.querySelector('#allTasks');

  taskField.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
      createNewTask(allTasks, event.target.value);
      this.value = '';
    }
  });

  // create new task
  function createNewTask(parent, task) {
    const col = create({
      class: 'col-sm-4'
    });
    const singleTask = create({
      class: 'single-task d-flex'
    });
    const singleTaskP = create('p');
    singleTaskP.innerHTML = task;
    singleTask.appendChild(singleTaskP);

    const span = create({
      class: 'delete-icon ml-auto'
    });
    span.innerHTML = '<i class="fas fa-window-close"></i>';
    singleTask.appendChild(span);
    span.addEventListener('click', () => {
      parent.removeChild(col);
    });

    const taskController = createTaskController(singleTask);
    taskController.style.visibility = 'hidden';
    singleTask.appendChild(taskController);

    singleTask.addEventListener('mouseenter', function() {
      taskController.style.visibility = 'visible';
    });
    singleTask.addEventListener('mouseleave', function() {
      taskController.style.visibility = 'hidden';
    });

    col.appendChild(singleTask);
    parent.appendChild(col);
  }
};

function createTaskController(parent) {
  const controlPanel = create({
    class: 'task-control-panel d-flex'
  });

  const colorPallate = createColorPalate(parent);
  controlPanel.appendChild(colorPallate);

  const editBtn = createEditBtn(parent);
  controlPanel.appendChild(editBtn);

  return controlPanel;
}
function createEditBtn(parent) {
  const span = create('span', { class: 'edit-btn ml-auto mr-2' });
  span.innerHTML = 'Edit';

  span.addEventListener('click', function() {
    let p = parent.querySelector('p');
    let textArea = create('textarea', { class: 'inner-textarea' });
    textArea.style.width = parent.offsetWidth + 'px';
    textArea.style.height = parent.offsetHeight + 'px';
    textArea.innerHTML = p.innerHTML;

    textArea.addEventListener('keypress', function(event) {
      if (event.keyCode === 13) {
        event.stopPropagation();

        if (this.value) {
          p.innerHTML = this.value;
          parent.removeChild(this);
        } else {
          alert('Please Put Some Data');
        }
      }
    });

    parent.appendChild(textArea);
  });
  return span;
}

function createColorPalate(parent) {
  const colors = ['green', 'blue', 'black', 'yellow', '#DDD'];

  const colorDiv = create({ class: 'd-flex' });

  colors.forEach(color => {
    const div = create({ class: 'color-circle' });
    div.style.background = color;

    div.addEventListener('click', function() {
      parent.style.backgroundColor = color;
    });

    colorDiv.appendChild(div);
  });

  return colorDiv;
}

window.create = function() {
  if (arguments.length === 0) {
    return document.createElement('div');
  }

  if (arguments.length === 1 && typeof arguments[0] != 'object') {
    return document.createElement(arguments[0]);
  }

  var tag = arguments[0];
  var attr = arguments[1] || arguments[0];

  if (arguments.length === 1 && typeof arguments[0] === 'object') {
    tag = 'div';
  }

  var element = document.createElement(tag);

  for (var i in attr) {
    element.setAttribute(i, attr[i]);
  }

  return element;
};
