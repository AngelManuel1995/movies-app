//Modules
import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { JsonpModule }      from '@angular/http';



//Components
import { AppComponent }     from './app.component';
//My components
import { NavbarComponent }  from './components/shared/navbar/navbar.component';
import { HomeComponent }    from './components/home/home.component';
import { DemoComponent }    from './components/demo/demo.component';
import { SearchComponent }  from './components/search/search.component';
import { MovieComponent }   from './components/movie/movie.component';
import { GaleryComponent }  from './components/galery/galery.component';
//Services
import { MoviesService }    from './services/movies.component';

//Routes
import { APP_ROUTING }      from './app.routes';

//Pipes 
import { ImageMoviePipe } from  './pipes/img-movie.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DemoComponent,
    SearchComponent,
    MovieComponent,
    GaleryComponent,
    ImageMoviePipe
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    APP_ROUTING
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
