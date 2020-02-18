import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../models/movies';
import { MatDialog } from '@angular/material/dialog';
import { ViewDetailsMovieComponent } from '../../components/view-details-movie/view-details-movie.component';
import { UpdateMovieComponent} from "../../components/update-movie/update-movie.component"
import { ApiService } from '../../services/api.service';
import { AlertComponent } from '../../components/alert/alert.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'sw-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {
  movies: IMovie[] = [];
  filteredMovies: IMovie[];
  directors: any = [];
  allMoviesOption: string = 'All movies';
  searchName: string = '';

  constructor(public dialog: MatDialog,
              private alert: MatSnackBar,
              private apiService: ApiService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.apiService.getMoviesList().subscribe((items: IMovie[]) => {
      

      items.forEach((item: IMovie) => {
        this.apiService.callMoviesStorage(item);
      });

      this.movies = this.apiService.getMoviesFromStorage();
      
      this.filteredMovies = this.movies;
      this.collectDirectors();
    },
    error => {
      this.alert.openFromComponent(AlertComponent, {
        duration: 5000,
        data: error.message.status
      });
    });
  }

  collectDirectors(): void {
    this.directors.push(this.allMoviesOption);

    this.movies.forEach((item: IMovie) => {
      let directorExist = this.directors.find((x: string) => x === item.director);
      
      if (!directorExist) {
        this.directors.push(item.director);
      }
    });
  }

  filterByDirector(search: string): void {
    this.filteredMovies = [];

    this.movies.forEach((item: IMovie) => {
      if (item.director === search) {
        this.filteredMovies.push(item);
      } else if (search === this.allMoviesOption) {
        this.filteredMovies = this.movies;
      }
    });
  }

  viewDetails(movie: IMovie): void {
    const dialogRef = this.dialog.open(ViewDetailsMovieComponent, {
      width: '500px',
      data: movie
    });
  }

  updateMovie(item?: IMovie):void {
    const dialogRef = this.dialog.open(UpdateMovieComponent, {
      width: '500px',
      data: item ||{}
    });

    dialogRef.afterClosed().subscribe((data: IMovie)=> {
      if(!data) {
        return;
      }
      if(!data.id) {
        data.id = this.movies.length + 1;
      }

      this.apiService.callMoviesStorage(data);
      this.getMovies();
    });
  }

}
