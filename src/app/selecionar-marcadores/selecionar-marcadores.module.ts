import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import '../util/rxjs-extensions';

import { SelecionarMarcadoresDetalheComponent } from './selecionar-marcadores-detalhe/selecionar-marcadores-detalhe.component';
import { SelecionarMarcadoresService } from './selecionar-marcadores.service';
import { SelecionarMarcadoresComponent } from './selecionar-marcadores.component';
import { SelecionarmarcadosRoutingModule } from './selecionar-marcadores.routing.module';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      SelecionarmarcadosRoutingModule
  ],
  declarations: [
    SelecionarMarcadoresDetalheComponent,
    SelecionarMarcadoresComponent
  ],
  exports: [
  ],
  providers: [
    SelecionarMarcadoresService
  ],
entryComponents : [
]
})
export class SelecionarMarcadoresModule { }



