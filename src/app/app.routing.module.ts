
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';




const appRoutes: Routes = [
  {
    path: 'home', component: HomePageComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'SeleMarc',
    loadChildren: 'app/selecionar-marcadores/selecionar-marcadores.module#SelecionarMarcadoresModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
