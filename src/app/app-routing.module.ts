import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinepolisCompraComponent } from './practicas/cinepolis-compra/cinepolis-compra.component';
import { DistanciaPuntosComponent } from './practicas/distancia-puntos/distancia-puntos.component';
import { ResistenciaCalculoComponent } from './practicas/resistencia-calculo/resistencia-calculo.component';
import { PizzasComponentComponent } from './practicas/pizzas-component/pizzas-component.component';

const routes: Routes = [
  { path: 'Cinepolis', component: CinepolisCompraComponent },
  { path: 'Distancia', component: DistanciaPuntosComponent },
  { path: 'Resistencia', component: ResistenciaCalculoComponent },
  { path: 'Pizzas', component: PizzasComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
