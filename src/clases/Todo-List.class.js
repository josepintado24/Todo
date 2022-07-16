export class TodoList {
    constructor() {
     this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todo.push(todo);
        this.guardarLocalStorage();
    }
   
    marcarCompletado(id){
        
        this.todo.forEach(element => {
            (element.id == id?element.complete=!element.complete : element.complete );
        });
        this.guardarLocalStorage()
    }
    eliminarTodo(id) {
        this.todo=this.todo.filter(array => array.id !=id);
        this.guardarLocalStorage();
    }
    eliminarTodoComplete() {
        this.todo=this.todo.filter(array => !array.complete);
        this.guardarLocalStorage();
        // console.log(this.todo)
    }
    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todo));
    }
    cargarLocalStorage() {
        this.todo=(localStorage.getItem('todo'))?JSON.parse(localStorage.getItem('todo')):this.todo=[];
        console.log('cargarLocal', this.todo)
    }
}