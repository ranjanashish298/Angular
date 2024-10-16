import { Component, EventEmitter, Input, Output } from "@angular/core";
import { UserComponent } from "../user/user.component";
import { TaaskComponent } from "../taask/taask.component"


@Component({
    selector: 'app-task',
    standalone: true,
    imports: [UserComponent, TaaskComponent],
    templateUrl: './task.component.html',
    styleUrl: './task.component.css'
  })



  export class TaskComponent {

    @Input({required:true}) name!:string;

  }