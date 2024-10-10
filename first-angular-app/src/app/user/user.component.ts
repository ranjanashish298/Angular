import { Component, computed, signal } from '@angular/core';
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
  //We made selectedUser now a signal that we invoke as a function at other places.  
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  //Now we use 'computed' that uses signal inside whenever any signal gets a change.
  imagePath = computed( () => 'assets/users/' + this.selectedUser().avatar );
  
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }

  onSelectUser() {
    
    // 1.  When user clicks on the button, it should change the user 
    // I change the current user to some other random user 
    // Then I display this new random user. 
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = signal(DUMMY_USERS[randomIndex]); // Update the selected user
    }
}
