import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuntosColombiaComponent } from './layouts/components/puntos-colombia/puntos-colombia.component';
import { UberComponent } from './layouts/components/uber/uber.component';

const routes: Routes = [
  {
    path: 'puntos-colombia',
    component: PuntosColombiaComponent,
    pathMatch: 'full'
  },
  {
    path:'uber',
    component: UberComponent
  },
  {
    path:'**',
    redirectTo: 'puntos-colombia'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
