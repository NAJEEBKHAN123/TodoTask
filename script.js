var inputTast = document.getElementById("inputTask");
var inputBtn = document.getElementById("taskBtn");
var taskContainer = document.getElementById("taskContainer");

inputBtn.addEventListener("click", function(){
    var inputVal = inputTast.value.trim();
    if(inputVal === ""){
        alert("Enter any text")
        return;
    }
   

    var li = document.createElement('li');
    li.className = "liElement";
    li.innerHTML =`<span class="task-text">${inputVal}</span> <button class="delete-btn">delete</button>`;
    taskContainer.appendChild(li);
    inputTast.value = "";
});
taskContainer.addEventListener("click", function(x){
    const target = x.target;
    const taskItem = target.closest('li');
    if(target.classList.contains('delete-btn')){
        taskItem.remove();
    }
});

function clearAll(){
    document.getElementById("taskContainer").innerHTML = "";
    // taskContainer.remove();
}




