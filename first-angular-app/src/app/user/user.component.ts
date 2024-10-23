import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

interface User {
  id: string,
  avatar : string,
  name: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
}) 
export class UserComponent {

  @Input({required:true})  user!: User;
  @Input({required:true}) selected!: boolean;

  @Output() select  = new EventEmitter();

  selectedUser = DUMMY_USERS[randomIndex];

  //Here I make a 'getter' path for the image.
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
 