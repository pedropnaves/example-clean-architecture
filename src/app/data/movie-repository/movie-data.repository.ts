import { Injectable } from '@angular/core';
import { MovieRepository } from '../../core/repositories/movie.repository';
import { HttpClient } from '@angular/common/http';
import { MovieDataMapper } from './movie-data.mapper';
import { Observable } from 'rxjs';
import { MovieModel } from '../../core/domain/movie.model';
import { flatMap, map } from 'rxjs/operators';
import { MovieDataModel } from './movie-data.model';

@Injectable()
export class MovieDataRepository extends MovieRepository {

  mapper = new MovieDataMapper();

  constructor(private http: HttpClient) {
    super();
  }

  getMovieById(id: number): Observable<MovieModel> {
    return this.http
      .get<MovieDataModel>('http://www.mocky.io/v2/5e682bdf3000005900327a0f')
      .pipe(map(this.mapper.mapFrom));
  }

  getAllMovies(): Observable<MovieModel> {
    return this.http
      .get<MovieDataModel[]>('http://www.mocky.io/v2/5e682c023000005e00327a11')
      .pipe(flatMap((item) => item))
      .pipe(map(this.mapper.mapFrom));
  }
}
