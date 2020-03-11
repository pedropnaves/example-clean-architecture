import { Observable } from 'rxjs';
import { MovieModel } from '../domain/movie.model';

export abstract class MovieRepository {
  abstract getMovieById(id: number): Observable<MovieModel>;
  abstract getAllMovies(): Observable<MovieModel>;
}
