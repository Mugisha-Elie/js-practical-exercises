const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");
const changeThemeButton = document.getElementById("change-theme-button");
const bodyEl = document.body;

let tasks = [];
const themes = ["theme-light", "theme-dark", "theme-blue", "theme-green"];
let currentThemeIndex = 0;

function saveTasksToLocalStorage(){
    localStorage.setItem("todoTasks", JSON.stringify(tasks))
}

function loadTasksFromLocalStorage(){
    const storedTasks = localStorage.getItem("todoTasks")
    if(storedTasks){
        try{
            tasks = JSON.parse(storedTasks);
        }catch(e){
            console.error("error parsing tasks from localStorage: ", e);
            tasks = [];
        }
    }else{
        tasks = [];
    }
}

function renderTasks(){
    taskList.innerHTML = "";
    
    tasks.forEach(
        (task) => {
            const li = document.createElement("li");
            li.textContent = task.text;
            li.dataset.id = task.id;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";
            deleteButton.dataset.id = task.id;

            deleteButton.addEventListener("click", (event) =>{
                const taskIdToDelete = parseInt(event.target.dataset.id);
                tasks = tasks.filter(task => task.id !== taskIdToDelete);

                saveTasksToLocalStorage();
                renderTasks();
            });

            li.appendChild(deleteButton);
            taskList.appendChild(li);
        }
    );
}

loadTasksFromLocalStorage();
renderTasks();


const savedTheme = localStorage.getItem('savedTheme');

if(savedTheme){
    currentThemeIndex = themes.indexOf(savedTheme);
    if(currentThemeIndex === -1){
        currentThemeIndex = 0;
    }
        bodyEl.classList.add(themes[currentThemeIndex]);
        localStorage.setItem('savedTheme', themes[currentThemeIndex]);
    }else{
        bodyEl.classList.add(themes[currentThemeIndex]);
        localStorage.setItem('savedTheme', themes[currentThemeIndex]);
    }


addTaskButton.addEventListener("click", ()=>{
    const taskText = taskInput.value.trim();

    if(taskText !== ''){
        const newTask = {
            id:Date.now(),
            text: taskText,
            completed: false,
        };
        tasks.push(newTask);
        saveTasksToLocalStorage();
        renderTasks();
        taskInput.value = '';
    }else{
        alert('Please enter a task!');
    }
});

taskInput.addEventListener('keypress', (event)=>{
    if(event.key === "Enter"){
        addTaskButton.click();
    }
});

changeThemeButton.addEventListener('click', () => {
    bodyEl.classList.remove(themes[currentThemeIndex]);
    currentThemeIndex++;

    if(currentThemeIndex >= themes.length){
        currentThemeIndex = 0;
    }

    bodyEl.classList.add(themes[currentThemeIndex]);

    localStorage.setItem("savedTheme", themes[currentThemeIndex]);
});

