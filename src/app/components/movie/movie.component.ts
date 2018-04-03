import { Component, OnInit} from '@angular/core';
import { ActivatedRoute }	from '@angular/router';
import { MoviesService }	from '../../services/movies.component';

@Component({
	selector:'app-movie',
	templateUrl:'./movie.component.html'
})

export class MovieComponent implements OnInit{
	
	 movie:any;
	 regresarA:string = "";
	 busqueda:string = "";
	constructor( private _moviesService:MoviesService,
				 private _activatedRoute:ActivatedRoute ){
		
		this._activatedRoute.params.subscribe(parametros => {
			console.log(parametros)
			this.regresarA = parametros['pag'];
			console.log("PÁGINA DE BUSQUEDA", this.regresarA)
			if(parametros['busqueda']){
				this.busqueda = parametros['busqueda']
			}
			this._moviesService.getDetailMovie(parametros['id']).subscribe( movie => {
				this.movie = movie
			})
		})
	}

	ngOnInit(){
		
	}

}