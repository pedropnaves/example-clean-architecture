import { AppComponent } from './app.component';
import {HttpClientModule, HttpXsrfTokenExtractor} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MovieDataRepository } from './data/movie-repository/movie-data.repository';
import { GetMovieByIdUsecase } from './core/usecases/get-movie-by-id.usecase';
import { GetAllMoviesUsecase } from './core/usecases/get-all-movies.usecase';
import { MoviesComponent } from './containers/movies/movies.component';
import { MovieRepository } from './core/repositories/movie.repository';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    GetMovieByIdUsecase,
    GetAllMoviesUsecase,
    { provide: MovieRepository, useClass: MovieDataRepository }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
