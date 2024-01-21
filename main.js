// Variables

const addTask = document.getElementById('add-task');
const undoBtn = document.getElementById('undo-btn');
const taskContainer = document.querySelector('.task-container');
const inputTask = document.getElementById('input-task');


//Event Listener for Add Button
 const addNewTask = ()=>{

    //create a task div
    let task = document.createElement('div');
    task.classList.add('task');   //give task a class to style 

    let li = document.createElement('li');
    li.textContent = inputTask.value;
    task.appendChild(li);

    let checkBtn = document.createElement("button"); // create button
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`; // add icon inside of button
    checkBtn.classList.add('checkTask'); //add class to  button
    task.appendChild(checkBtn); // add button to task

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteBtn.classList.add('deleteTask'); 
    task.appendChild(deleteBtn);

    //validate input 
    if(inputTask.value.trim() === ""){
        alert('Please Enter a task');
    } else {
        taskContainer.appendChild(task)
    }
    //reset task value
    inputTask.value = "";


    checkBtn.addEventListener('click', function(){

        checkBtn.parentElement.style.textDecoration = 'line-through';

    });

    deleteBtn.addEventListener('click', function(e){

        let target = e.target;
        //make sure to remove li and to remove task div 
        target.parentElement.parentElement.remove();
    });


};

const handleKeyPress = (event) => {
    if(event.key === 'Enter' || event.key === 'Return'){
        addNewTask();
    }
}

const undoCompletedTasks = () =>{
    const completedTasks = document.querySelectorAll('.task');
    completedTasks.forEach(task => {
        task.style.textDecoration = '';
    });
}

//Event Listener for Add Button and Enter Key
addTask.addEventListener('click', addNewTask);
document.addEventListener('keydown', handleKeyPress);
undoBtn.addEventListener('click', undoCompletedTasks);

