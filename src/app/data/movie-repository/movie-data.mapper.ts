import { Mapper } from '../../core/base/mapper';
import { MovieDataModel } from './movie-data.model';
import { MovieModel } from '../../core/domain/movie.model';

export class MovieDataMapper extends Mapper <MovieDataModel, MovieModel> {
  mapFrom(param: MovieDataModel): MovieModel {
    return {
      id: param.id,
      name: param.name,
      releaseDate: new Date(param.releaseDate)
    };
  }

  mapTo(param: MovieModel): MovieDataModel {
    return {
      id: param.id,
      name: param.name,
      releaseDate: param.releaseDate.getTime()
    };
  }
}
