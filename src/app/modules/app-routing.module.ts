import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MoviesComponent } from '../pages/movies/movies.component';
import { CharactersComponent } from '../pages/characters/characters.component';
import { DroidsComponent } from '../pages/droids/droids.component';
import { LocationsComponent } from '../pages/locations/locations.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'droids',
    component: DroidsComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
