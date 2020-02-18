import { Component, Inject } from '@angular/core';
import { MatSnackBarRef,MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar'

@Component({
  selector: 'sw-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {
  message :string = '';

  constructor(
    public snackBarRef:MatSnackBarRef<AlertComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data:number
  ) { 
    switch (this.data) {
      case 0:
        this.message ='Server is not aviable'
        break;
      case 404:
        this.message ='Data is not aviable';
        break;
      default:
        this.message ='Something going wrong :(';
        break;    
    }
  }

  close() {
    this.snackBarRef.dismiss();
  }

}
