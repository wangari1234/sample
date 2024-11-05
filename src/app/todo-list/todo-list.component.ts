import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
tasks: string[] = [];
newTask: string = '';

addTask(){
  if(this.newTask.trim()){
    this.tasks.push(this.newTask.trim());
    this.newTask = ''
  }
}

editTask(index: number){
  const updatedTask =  prompt('Edit Task', this.tasks[index]);
  if(updatedTask !== null){
    this.tasks[index] = updatedTask.trim();
  }
}
deleteTask(index: number){
  this.tasks.splice(index,1);
}
}
