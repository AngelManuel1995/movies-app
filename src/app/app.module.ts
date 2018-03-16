import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { JsonpModule }      from '@angular/http';


import { AppComponent }     from './app.component';
//My components
import { NavbarComponent }  from './components/shared/navbar/navbar.component';
import { HomeComponent }    from './components/home/home.component';

//Services
import { MoviesService }    from './services/movies.component';

//Routes
import { APP_ROUTING }      from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
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
