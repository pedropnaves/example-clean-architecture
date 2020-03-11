import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MovieDataSandbox } from './data/movie-repository/movie-data.sandbox';
import { MovieDataRepository } from './data/movie-repository/movie-data.repository';
import { MoviesComponent } from './containers/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDataModule } from './data/movie-repository/movie-data.module';

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
    MovieDataModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
