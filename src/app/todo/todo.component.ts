import { Component } from '@angular/core';
import { TodoService } from '../service/todoservice';
@Component({
    selector: 'todo-input',
    template: `
        <h3>{{story.name}}</h3>
        <h3 [innerText]="color">{{story.name}}</h3>
        {{ story | json}}
    `
})

export class TodoInput{
    story = {id: 100, name: 'The Force Awakens'};
    color = 'blue';
}
// @Component({
//     selector: 'todo-input',
//     template: `<div>
//         <form (submit)="onSubmit()">
//             <input type="text" [(ngModel)]="todoModel">
//         </form>
//         </div>`
// })

// export class TodoInput{
//     todoModel;
//     constructor(public todoService:TodoService){
        
//     }
//     onSubmit(){
//         this.todoService.todos.push(this.todoModel);
//         console.log(this.todoService.todos);
//     }
// }