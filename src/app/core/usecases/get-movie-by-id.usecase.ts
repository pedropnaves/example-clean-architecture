import { Injectable } from '@angular/core';
import { MovieRepository } from '../repositories/movie.repository';
import { UseCase } from '../base/use-case';
import { MovieModel } from '../domain/movie.model';
import { Observable } from 'rxjs';

@Injectable()
export class GetMovieByIdUsecase implements UseCase<number, MovieModel> {

  constructor(private movieRepository: MovieRepository) { }

  execute(params: number): Observable<MovieModel> {
    return this.movieRepository.getMovieById(params);
  }
}
