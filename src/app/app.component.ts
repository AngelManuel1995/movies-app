import { Component } from '@angular/core';
import { MoviesService } from './services/movies.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private _moviesService :MoviesService){
    // this._moviesService.getMoviesByPopularity()
    //   .subscribe( data => {
    //     console.log(data)
    //   })

    // this._moviesService.searchMovie("Coco").subscribe( data => {
    //   console.log(data)
    // })

      // this._moviesService.getMoviesInTheatre().subscribe( res => {
      //   console.log(res)
      // })
  }
 
}
