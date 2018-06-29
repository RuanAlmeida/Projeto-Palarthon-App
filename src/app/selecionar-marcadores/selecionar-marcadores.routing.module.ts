
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { SelecionarMarcadoresComponent } from './selecionar-marcadores.component';
import { SelecionarMarcadoresDetalheComponent } from './selecionar-marcadores-detalhe/selecionar-marcadores-detalhe.component';



const SelecionarMRoutes = [
    { path: '', component: SelecionarMarcadoresComponent },
    { path: ':id/detalhe', component: SelecionarMarcadoresDetalheComponent }

];

@NgModule({
    imports: [RouterModule.forChild(SelecionarMRoutes)],
    exports: [RouterModule]
})
export class SelecionarmarcadosRoutingModule { }
