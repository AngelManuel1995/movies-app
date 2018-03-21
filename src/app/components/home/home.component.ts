import { Component, OnInit } from '@angular/core';
import { MoviesService } 	 from '../../services/movies.component';

@Component({
	selector:'app-home',
	templateUrl:'./home.component.html'
})

export class HomeComponent implements OnInit {
	
	private inTheatre:any;
	private pupularMovies:any;
	private pupularKidsMovies:any;

	constructor( private _moviesService:MoviesService ){

		this._moviesService.getMoviesInTheatre()
		.subscribe( data => this.inTheatre = data.results )

		this._moviesService.getMoviesByPopularity()
		.subscribe( data => this.pupularMovies = data.results )

		this._moviesService.getKidsMoviesByPopularity()
		.subscribe( data => this.pupularKidsMovies = data.results )
	}

	ngOnInit(){

	}
}