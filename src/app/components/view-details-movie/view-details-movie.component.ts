import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMovie } from 'src/app/models/movies';

@Component({
  selector: 'sw-view-details-movie',
  templateUrl: './view-details-movie.component.html'
})
export class ViewDetailsMovieComponent {

  constructor(
    public dialogRef: MatDialogRef<ViewDetailsMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IMovie
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }
}
