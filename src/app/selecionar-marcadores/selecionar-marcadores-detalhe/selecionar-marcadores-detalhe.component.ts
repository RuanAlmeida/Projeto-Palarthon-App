import { AppSenadoService } from '../../selecionar-marcadores/app.senado.service';
import { AppCamaraService } from '../../selecionar-marcadores/app.camara.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selecionar-marcadores-detalhe',
  templateUrl: './selecionar-marcadores-detalhe.component.html',
  styleUrls: ['./selecionar-marcadores-detalhe.component.scss']
})
export class SelecionarMarcadoresDetalheComponent implements OnInit {

  params: any;
  dadosPl: any;
  autorCamara: any;
  nulo: string = 'Não possui';

  constructor(
    private route: ActivatedRoute,
    private appCamaraService: AppCamaraService,
    private appSenadoService: AppSenadoService
  ) {
    this.route.params.subscribe( params => this.params = params);
}

getAutorCamara(link) {
  this.appCamaraService.getAutor(link)
  .subscribe(res => this.getDeputadoCamara(res.dados[0].uri));
}

getDeputadoCamara(link) {
  this.appCamaraService.getDeputado(link)
  .subscribe(res => this.autorCamara = res.dados.ultimoStatus);
}

  ngOnInit() {
    if (this.params.casa === 'camara') {
      this.appCamaraService.getProposicaoDetalhe(this.params.cod)
      .subscribe(res => {
        this.getAutorCamara(res.dados.uriAutores);
        this.dadosPl = res.dados; 
        console.log(this.dadosPl);
      });
    }else if (this.params.casa === 'senado') {
      this.appSenadoService.getMateriaDetalhe(this.params.cod)
      .subscribe(res => {this.dadosPl = res.DetalheMateria; console.log(this.dadosPl)});
    }else {

    }
  }

  

}
