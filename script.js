const input=document.getElementById("taskInput");
const addButton=document.getElementById("addBtn");
const taskList=document.getElementById("taskList");
const warning=document.getElementById("warning");
const total=document.getElementById("total");
const done=document.getElementById("done");
const left=document.getElementById("left");
const doneCount=document.getElementById("doneCount");
const totalCount=document.getElementById("totalCount");
const progressBar=document.getElementById("progressBar");

addButton.addEventListener("click",addTask);

input.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        addTask();
    }
});

function addTask(){
    let taskText=input.value.trim();

    if(taskText===""){
        warning.innerText="Please write your task first 🌷";
        return;
    }

    warning.innerText="";

    const li=document.createElement("li");
    const span=document.createElement("span");
    const deleteButton=document.createElement("button");

    span.innerText=taskText;

    deleteButton.innerText="×";
    deleteButton.classList.add("delete");

    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    li.addEventListener("click",function(){
        li.classList.toggle("completed");
        updateStats();
    });

    deleteButton.addEventListener("click",function(event){
        event.stopPropagation();
        li.remove();
        updateStats();
    });

    input.value="";

    updateStats();
}

function updateStats(){
    const allTasks=document.querySelectorAll("#taskList li");
    const completedTasks=document.querySelectorAll(".completed");

    let totalTask=allTasks.length;
    let doneTask=completedTasks.length;
    let leftTask=totalTask-doneTask;

    total.innerText=totalTask;
    done.innerText=doneTask;
    left.innerText=leftTask;

    totalCount.innerText=totalTask;
    doneCount.innerText=doneTask;

    let percentage=0;

    if(totalTask>0){
        percentage=(doneTask/totalTask)*100;
    }

    progressBar.style.width=percentage+"%";
}