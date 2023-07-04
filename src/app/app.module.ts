import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinepolisModule } from './practicas/cinepolis/cinepolis.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DistanciaModule } from './practicas/distancia/distancia.module';
import { RecistenciaModule } from './practicas/resistencia/resistencia.module';
import { MenuComponent } from './practicas/menu/menu.component';
import { PizzasComponentComponent } from './practicas/pizzas-component/pizzas-component.component';
import { PizzasModule } from './practicas/pizzas-module/pizzas-module.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CinepolisModule,
    DistanciaModule,
    RecistenciaModule,
    PizzasModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
