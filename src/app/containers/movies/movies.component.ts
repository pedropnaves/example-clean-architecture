import { Component } from '@angular/core';
import {MovieModel} from '../../core/domain/movie.model';
import {MovieDataSandbox} from '../../data/movie-repository/movie-data.sandbox';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  public movies: Array<MovieModel>;

  constructor(
    private movieDataSandbox: MovieDataSandbox,
  ) {
    this.movies = [];
  }

  getMovieById(id: number): void {
    this.movieDataSandbox.getMovieById(id)
      .subscribe((movie) => this.onSuccessGetMovie(movie));
  }

  getAllMovies(): void {
    this.movieDataSandbox.getAllMovies()
      .subscribe((movie) => this.onSuccessGetMovie(movie));
  }

  onSuccessGetMovie(movie: MovieModel) {
    this.movies.push(movie);
  }
}
