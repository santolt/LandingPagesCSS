import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuntosColombiaComponent } from './components/puntos-colombia/puntos-colombia.component';
import { UberComponent } from './components/uber/uber.component';



@NgModule({
  declarations: [
    PuntosColombiaComponent,
    UberComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PuntosColombiaComponent,
    UberComponent
  ]
})
export class LayoutsModule { }
