import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { MoviesComponent } from './pages/movies/movies.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { DroidsComponent } from './pages/droids/droids.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { ViewDetailsMovieComponent } from './components/view-details-movie/view-details-movie.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AlertComponent } from './components/alert/alert.component';
import { UpdateMovieComponent } from './components/update-movie/update-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CharactersComponent,
    DroidsComponent,
    LocationsComponent,
    ViewDetailsMovieComponent,
    FilterPipe,
    AlertComponent,
    UpdateMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    ViewDetailsMovieComponent,
    AlertComponent,
    UpdateMovieComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
