import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDataRepository } from './movie-data.repository';
import { MovieDataSandbox } from './movie-data.sandbox';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    MovieDataRepository,
    MovieDataSandbox,
  ]
})
export class MovieDataModule { }
