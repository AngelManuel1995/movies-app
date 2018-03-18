import { Component, OnInit } from '@angular/core';
import { MoviesService } 	 from '../../services/movies.component';

@Component({
	selector:'app-home',
	templateUrl:'./home.component.html'
})

export class HomeComponent implements OnInit {
	
	inTheatre:any;
	constructor( private _moviesService:MoviesService ){
		this._moviesService.getMoviesInTheatre().subscribe( data => {
			console.log(data)
			this.inTheatre = data.results;
			console.log(this.inTheatre)
		})
	}

	ngOnInit(){

	}
}