import { Component } from '@angular/core';

@Component({
  selector: 'app-tda',
  standalone: true,
  imports: [],
  templateUrl: './tda.component.html',
  styleUrl: './tda.component.css'
})
export class TdaComponent {
  title = 'GrowtonAngularFormsApp';

  evtClick(locuserDetails : any){

    console.log(locuserDetails); // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvIMP

    // console.log(locuserDetails.controls);
    // console.log(locuserDetails.controls['userName'].value);
    // console.log(locuserDetails.controls['userEmail'].value);
    // console.log(locuserDetails.controls['userComments'].value);

    

  }

}
