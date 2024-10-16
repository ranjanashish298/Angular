import { Component, EventEmitter, Input, Output } from "@angular/core";
import { UserComponent } from "../user/user.component";


@Component({
    selector: 'app-task',
    standalone: true,
    imports: [UserComponent],
    templateUrl: './task.component.html',
    styleUrl: './task.component.css'
  })



  export class TaskComponent {

    @Input({required:true}) name!:string;

  }