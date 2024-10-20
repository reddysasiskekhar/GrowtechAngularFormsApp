import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  // form-group
  //form-control

registrationForm = new FormGroup({
UserName : new FormControl(null,[Validators.required]),
UserComments : new FormControl(null,[Validators.required,Validators.minLength(3)]),
UserEmail : new FormControl(null,[Validators.required,Validators.email]),
UserVehicle : new FormControl(null,[Validators.required])
})

evtClick() {

// iwill wright code 
console.log(this.registrationForm);//vvvvvvvvvvvvvvvvvvvvvvvvvvvimp

}

}
