import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import '../util/rxjs-extensions';

import { SelecionarMarcadoresDetalheComponent } from './selecionar-marcadores-detalhe/selecionar-marcadores-detalhe.component';
import { SelecionarMarcadoresComponent } from './selecionar-marcadores.component';
import { SelecionarmarcadosRoutingModule } from './selecionar-marcadores.routing.module';
import { AppSenadoService } from './app.senado.service';
import { AppCamaraService } from './app.camara.service';
import { CollapseModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      SelecionarmarcadosRoutingModule,
      CollapseModule.forRoot()
  ],
  declarations: [
    SelecionarMarcadoresDetalheComponent,
    SelecionarMarcadoresComponent
  ],
  exports: [
  ],
  providers: [
    AppCamaraService,
    AppSenadoService
  ],
entryComponents : [
]
})
export class SelecionarMarcadoresModule { }



