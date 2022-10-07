/*
    Todo List One
    Extend the JavaScript code below to interact with the displayed HTML elements.
    Enter a new todo in the input field. Once you click the button, the new todo item should appear at the bottom of the list.
    Confirm your code by creating a new todo!
*/

const button = document.getElementById('button');
const input = document.getElementById('input');
const list = document.getElementById('list');

button.addEventListener('click' , () => {
    
    if(input.value.trim()){
        const newTask = document.createElement("li");
        newTask.appendChild(document.createTextNode(input.value));
        list.appendChild(newTask);
    }

});

/* 
    .trim() was used to remove whitespace from the begin and end of input value. In this case when user try to save a taks
    which has only whitespaces .trim() remove them. So input.value becomes empty and the function does not create this task.
*/
