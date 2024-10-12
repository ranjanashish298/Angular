import { Component, EventEmitter, Input, Output, computed, input } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
   @Input({required:true}) id!: string;
   @Input({required:true}) avatar!: string;
   @Input({required:true}) name!: string;

  //We want to now create a custom event that would be used by the parent component.
   @Output() select = new EventEmitter(); //This will allow us to emit info through 'select' property to any parent component that is interested!

  // avatar = input.required<string>();    /* or simply: avatar = input();      */
  // name = input.required<string>();

  // imagePath = computed( () => 'assets/users/' + this.avatar());   // avatar() is a signal input, hence with ()

  get imagePath() {
     return '/assets/users/' + this.avatar;
  }

  onSelectUser() {

    //  this.select.emit(this.id);
    this.select.emit(this.name);


  }
}
