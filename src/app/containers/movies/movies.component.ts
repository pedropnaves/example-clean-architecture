import { Component } from '@angular/core';
import {MovieModel} from '../../core/domain/movie.model';
import {GetMovieByIdUsecase} from '../../core/usecases/get-movie-by-id.usecase';
import {GetAllMoviesUsecase} from '../../core/usecases/get-all-movies.usecase';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  public movies: Array<MovieModel>;

  constructor(
    private getMovieByIdUsecase: GetMovieByIdUsecase,
    private getAllMoviesUsecase: GetAllMoviesUsecase
  ) {
    this.movies = [];
  }

  getMovieById(id: number): void {
    this.getMovieByIdUsecase.execute(id)
      .subscribe((movie) => this.onSuccessGetMovie(movie))
  }

  getAllMovies(): void {
    this.getAllMoviesUsecase.execute()
      .subscribe((movie) => this.onSuccessGetMovie(movie))
  }

  onSuccessGetMovie(movie: MovieModel) {
    this.movies.push(movie);
  }

}
