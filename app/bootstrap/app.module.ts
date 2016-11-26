import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroService } from '../hero-service/hero.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { AppRoutingModule } from '../routing/app-routing.module'; 

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
    ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],  
  providers: [ HeroService ], //singleton shared service between components.
  bootstrap: [ AppComponent ]
})
export class AppModule { }
