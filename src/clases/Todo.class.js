export class Todo{
    constructor(tarea){
        this.task = tarea;
        this.id=new Date().getTime();
        this.complete=false;
        this.create=new Date();
    }
}