import { AppSenadoService } from './app.senado.service';
import { AppCamaraService } from './app.camara.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { SelecionarMarcadoresModule } from './selecionar-marcadores/selecionar-marcadores.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    AppCamaraService,
    AppSenadoService
  ],
  bootstrap: [AppComponent],
  entryComponents : []
})
export class AppModule { }
