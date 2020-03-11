import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDataModel } from './movie-data.model';

@Injectable({
  providedIn: 'root'
})
export class MovieDataRepository {

  constructor(private http: HttpClient) {}

  getMovieById(id: number): Observable<MovieDataModel> {
    return this.http.get<MovieDataModel>('http://www.mocky.io/v2/5e682bdf3000005900327a0f');
  }

  getAllMovies(): Observable<MovieDataModel[]> {
    return this.http.get<MovieDataModel[]>('http://www.mocky.io/v2/5e682c023000005e00327a11');
  }
}
