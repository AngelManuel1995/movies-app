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

    searchMovie( text:string ){
        let url = `${this.urlMoviedb}/discover/movie?query=${text}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
        return this._jsonp.get(url).map( res => {
            console.log(res.json());
            return res.json();
        })
    }

    getMoviesInTheatre(){
        let desde = new Date();
        let hasta = new Date();
        hasta.setDate( desde.getDate() + 7);

        let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`;
        let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()}`; 

        let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
        
        return this._jsonp.get(url).map(res=>{
            console.log(res.json());
            return res.json();
        })
    }

}