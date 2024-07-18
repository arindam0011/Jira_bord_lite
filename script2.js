const taskButton = document.getElementById('hedbtn');

const Todo = document.getElementById('Todo');


let count=0;

taskButton.addEventListener("click", () => {
    let taskContainer=document.createElement('div');
            taskContainer.setAttribute("class", 'cardContainer');
    let task = document.createElement('div');
        task.className ='card';
        task.id=`task-${++count}`
        task.innerText = "Give task name!";
        task.contentEditable = true;
     taskContainer.append(task);
    Todo.append(taskContainer);
   
    task.addEventListener("click", () => {
        if (task.innerText.trim() == "Give task name!") {
            task.innerText = "";
        }
    })
    task.addEventListener("blur", () => {
        if (task.innerText.trim() == "") {
            taskContainer.remove();
            updateCounts();
        }
    })
    let columnOption = document.createElement('select');

    columnOption.innerHTML = `
                            <option value="Todo">Todo</option>
                            <option value="Progress">Progress</option>
                            <option value="Done">Done</option>`
    columnOption.style.display = 'block';
    columnOption.style.marginInline = 'auto';
    columnOption.style.backgroundColor='gray';
    columnOption.style.borderColor='rgb(21, 20, 20)';
    taskContainer.append(columnOption);

    columnOption.addEventListener("change", () => {
        let changeColumn = document.getElementById(columnOption.value);
        changeColumn.append(taskContainer);
        updateCounts();
    })
    updateCounts();
})

function updateCounts() {
    let todoListCount = Todo.children.length-1;
    let progressListCount = Progress.children.length-1;
    let doneListCount = Done.children.length-1;

    document.querySelector('.td').innerText = todoListCount;
    document.querySelector('.pro').innerText = progressListCount;
    document.querySelector('.dn').innerText = doneListCount;
}