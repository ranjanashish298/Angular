import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() avatar!: string;
  @Input() name!: string;


  selectedUser = DUMMY_USERS[randomIndex];

  //Here I make a 'getter' path for the image.
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    console.log("Clicked!!")
  }
}
 