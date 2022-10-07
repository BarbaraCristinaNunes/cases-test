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

    if(input){
    const newTask = document.createElement("li");
    newTask.innerHTML = input.value;
    list.appendChild(newTask);
  }

});