import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CalcularComponent } from './calcular/calcular.component';
import { CalcularModule } from './calcular/calcular.module';
import { MostrarModule } from './mostrar/mostrar.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    CalcularModule,
    MostrarModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
