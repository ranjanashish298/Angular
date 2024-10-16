import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./task/task.component";
import { TaaskComponent } from './taask/taask.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent, TaaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  title = 'first-angular-app';

  selectedUserName: string = "Click left to open the tasks" ;

  onSelectUser(name:string) {
    //console.log("User ID is: " + id);
    this.selectedUserName = name;
  }
 

}
