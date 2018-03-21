import { Component, OnInit } from '@angular/core';
import { MoviesService } 		 from '../../services/movies.component';

@Component({
	selector:'app-search',
	templateUrl:'./search.component.html'
})

export class SearchComponent implements OnInit{
	
	private buscar:string;
	constructor(private _moviesService:MoviesService){
	
	}

	ngOnInit(){

	}

	searchMovie(){
		if(this.buscar.length === 0){
			return console.log("Debes escribir algo para buscar");
		}
		this._moviesService.searchMovie(this.buscar)
			.subscribe()
	}
}
