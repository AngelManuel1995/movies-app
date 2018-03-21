import { Component } from '@angular/core';
import { Router } 	 from '@angular/router';

@Component({
	selector:'app-navbar',
	templateUrl:'./navbar.component.html'
})

export class NavbarComponent{

	constructor(private _router:Router){

	}

	searchMovie(movie:string){
		if(!movie){
			return console.log('Ingrese algo para buscar')
		}
		console.log(movie)
		this._router.navigate(['search', movie])
	}
}