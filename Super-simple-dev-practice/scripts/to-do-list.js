//const todolist=[];

const todolist=[{

    name:'make dinner',duedate:'2024-10-4',
    name:'wash plates',duedate:'2024-10-5'}];

rendertodolist();

function rendertodolist(){
    let todolistHTML='';
    for(let i=0;i<todolist.length;i++){
        const todo=todolist[i];
        //const name=todo.name;
        //const duedate=todo.duedate;
        const {name,duedate} = todo;
        const html= `
    
        <div>${name}</div> 
        <div>${duedate} </div>
        <button onclick="
        todolist.splice(${i},1);
        rendertodolist();
        " class="del del-to-do">Delete</button>
        `;
        todolistHTML+=html;
    }
    console.log(todolistHTML);
    document.querySelector('.js-todo-list')
    .innerHTML=todolistHTML;
    document.querySelectorAll('.del-to-do')
    .forEach((del,index)=>{
        del.addEventListener('click',()=>{
            
            todolist.splice(i,1);
        rendertodolist();
        });
    });
}


// Using AddEventlistner
/* document.querySelector('.js-add').addEventListener('click',()=>{
    addTodo();
}) */


function addTodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateinputElement=document.querySelector('.js-due-date');
    const duedate= dateinputElement.value;
    //console.log(name);
    todolist.push({
        name,
        duedate});
    console.log(todolist);
    inputElement.value='';
    rendertodolist();
}