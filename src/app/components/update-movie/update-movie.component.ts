import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMovie } from 'src/app/models/movies';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styles: []
})
export class UpdateMovieComponent  {
  codeData: string = '';
  isCodeShown:boolean = false;

  constructor(
    public dialogRef: MatDialogRef<UpdateMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IMovie
  ) {
    this.codeData = JSON.stringify(data);
   }

  onClose(): void {
    this.dialogRef.close();
  }

}
