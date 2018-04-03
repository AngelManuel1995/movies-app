import { Component, OnInit} from '@angular/core';
import { ActivatedRoute }	from '@angular/router';
import { MoviesService }	from '../../services/movies.component';

@Component({
	selector:'app-movie',
	templateUrl:'./movie.component.html'
})

export class MovieComponent implements OnInit{
	
	private movie:any;
	private regresarA:string;
	private busqueda:any;
	constructor( private _moviesService:MoviesService,
				 private _activatedRoute:ActivatedRoute ){
		
		this._activatedRoute.params.subscribe(parametros => {
			this._moviesService.getDetailMovie(parametros['id']).subscribe( movie => {
				this.regresarA = parametros['pag'];
				if(parametros['busqueda']){
					this.busqueda = parametros['busqueda']
				}
				this.movie = movie
			})
		})
	}

	ngOnInit(){
		
	}

}