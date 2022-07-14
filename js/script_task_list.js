

 //todolist

 let taskList = document.querySelector('.task-box__list');
 let newTask = document.querySelector('#new-task');
 let addBtn = document.querySelector('.btn');
 let btnClosePopUp =  document.querySelectorAll('.task-box__pop-up-close');


 newTask.addEventListener('change', (e)=>{
  let newTask = e.target.value; 


 })

 addBtn.addEventListener('click', addTask);
 function addTask(e) {
  if(newTask.value.trim()){
    taskList.innerHTML+=`<li>${newTask.value}</li>`;
    newTask.value = "";
  } else {
    document.querySelector('.task-box__pop-up.warning-empty').classList.add('active')
  }
 }

 taskList.onclick = e =>{
 if(document.querySelectorAll(".task-box__list li").length > 1) e.target.remove();
 //кастомизировать окно
 else {
  document.querySelector('.task-box__pop-up.warning-remove').classList.add('active')
 }
 }


for(let i=0; i< btnClosePopUp.length; i++){
  btnClosePopUp[i].onclick = e => {
    e.target.parentElement.classList.remove('active');
  }
}
