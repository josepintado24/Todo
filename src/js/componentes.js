import { Todo } from '../clases';
import { todoList } from '../index'

//Referencias HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo')
const btnBorrar = document.querySelector('.clear-completed');

export const crearTodo = (todo) => {
    const htmlTodo = `
    <li class="${(todo.complete) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.complete) ? 'checked' : ''}>
            <label>${todo.task}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`
    const div = document.createElement('div')
    div.innerHTML = htmlTodo;
    divTodoList.append(div.firstElementChild);
    txtInput.value = '';
    return div.firstElementChild;
}

// eventos
txtInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && txtInput.value.length) {
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodo(nuevoTodo);
        // console.log(todoList);
    }
});

divTodoList.addEventListener('click', (event) => {
    const nombreElement = event.target.localName; //input label button
    const todoElement = event.target.parentElement.parentElement;
    // console.log(todoElement);
    const todoId = todoElement.getAttribute('data-id')
    if (nombreElement.includes('input')) {
        todoList.marcarCompletado(todoId);
        todoElement.classList.toggle('completed');
    }
    if (nombreElement.includes('button')) {
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElement);

    }
});

btnBorrar.addEventListener('click',() => {
    todoList.eliminarTodoComplete();
    console.log( divTodoList.children.length);
    // for (let i = 0; i < divTodoList.children.length; i++) {
    for (let i=divTodoList.children.length-1; i>=0;i--) {

        const elemento=divTodoList.children[i];
        console.log(i)
        console.log(elemento)

        if (elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
            console.log(elemento)
            console.log(i)
        }
    }
})


