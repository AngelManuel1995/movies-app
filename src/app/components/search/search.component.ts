import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }	 from '@angular/router';
import { MoviesService } 	 from '../../services/movies.component';

@Component({
	selector:'app-search',
	templateUrl:'./search.component.html'
})

export class SearchComponent implements OnInit{
	
	buscar:string = "";
	constructor(private _moviesService:MoviesService, 
				private _activatedRoute:ActivatedRoute){
		// console.log("Search component")
		this._activatedRoute.params.subscribe( parametros => {
			if(parametros['text']){
				this.buscar = parametros['text'];
				this.searchMovie();
			}
		})
	}

	ngOnInit(){

	}

	searchMovie(){
		console.log(this.buscar)
		if(this.buscar.length === 0){
			return console.log("Debes escribir algo para buscar");
		}
		this._moviesService.searchMovie(this.buscar)
			.subscribe()
	}
}
