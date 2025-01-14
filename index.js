let arr=JSON.parse(localStorage.getItem('toDoList')) || [];
function toDo(){
   let inputElement=document.querySelector('.input');
   let dateElement=document.querySelector('.toDodate');
   let item=inputElement.value;
   let dueDate=dateElement.value;
   
   arr.push(
    {toDoitem:item,
    dateitem:dueDate});
    localStorage.setItem('toDoList', JSON.stringify(arr));
   inputElement.value='';
   dateElement.value='';
   display();
}

function display(){
    let displayElement=document.querySelector('.display');
    
    let newhtml='';
    for(let i=0;i<arr.length;i++){
        let items=arr[i].toDoitem;
        let dates=arr[i].dateitem;
        newhtml+=`
        <span>${items}</span>
        <span>${dates}</span>
        <button class="delButton" onClick="arr.splice(${i},1); 
        display()";>Delete</button>
        `;

        
    }
   
    displayElement.innerHTML=newhtml;
   
}