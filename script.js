document.getElementById('add-button').addEventListener('click', function() {
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');
    
    if (taskInput.value !== '') {
      var taskItem = document.createElement('li');
      taskItem.textContent = taskInput.value;
      
      var cancelButton = document.createElement('button');
      cancelButton.textContent = 'Cancel';
      cancelButton.className = 'cancel-button';
      cancelButton.addEventListener('click', function() {
        taskItem.remove();
      });
      
      var doneButton = document.createElement('button');
      doneButton.textContent = 'Done';
      doneButton.className = 'done-button';
      doneButton.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
      });
      
      taskItem.appendChild(cancelButton);
      taskItem.appendChild(doneButton);
      taskList.appendChild(taskItem);
      
      taskInput.value = '';
    }
  });
  