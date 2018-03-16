import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class MoviesService{

    private apikey:string = '5111e2a3e908b54a23aad500a15153d0';
    private urlMoviedb:string = 'https://api.themoviedb.org/3';
    constructor(private _jsonp:Jsonp){

    }

    getMoviesByPopularity(){
        let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
        return this._jsonp.get( url ).map( res => {
            console.log(res.json())
            return res.json();
        })
    }

}