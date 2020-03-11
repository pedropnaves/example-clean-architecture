import { Injectable } from '@angular/core';
import { MovieDataMapper } from './movie-data.mapper';
import { Observable } from 'rxjs';
import { MovieModel } from '../../core/domain/movie.model';
import { flatMap, map } from 'rxjs/operators';
import { MovieRepository } from '../../core/repositories/movie.repository';
import { MovieDataRepository } from './movie-data.repository';

@Injectable({
  providedIn: 'root'
})
export class MovieDataSandbox extends MovieRepository {

  mapper = new MovieDataMapper();

  constructor(private movieDataRepository: MovieDataRepository) {
    super();
  }

  getMovieById(id: number): Observable<MovieModel> {
    return this.movieDataRepository.getMovieById(id)
      .pipe(map(this.mapper.mapFrom));
  }

  getAllMovies(): Observable<MovieModel> {
    return this.movieDataRepository.getAllMovies()
      .pipe(flatMap((item) => item))
      .pipe(map(this.mapper.mapFrom));
  }
}
