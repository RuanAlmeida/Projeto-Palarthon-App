import { AppSenadoService } from './../../app.senado.service';
import { AppCamaraService } from './../../app.camara.service';
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

  constructor(
    private route: ActivatedRoute,
    private appCamaraService: AppCamaraService,
    private appSenadoService: AppSenadoService
  ) {
    this.route.params.subscribe( params => this.params = params);
}

  ngOnInit() {
    if (this.params.casa === 'camara') {
      this.appCamaraService.getProposicaoDetalhe(this.params.cod)
      .subscribe(res => {this.dadosPl = res.dados; console.log(this.dadosPl)});
    }else if (this.params.casa === 'senado') {
      this.appSenadoService.getMateriaDetalhe(this.params.cod)
      .subscribe(res => {this.dadosPl = res.DetalheMateria; console.log(this.dadosPl)});
    }else {

    }
  }

  

}
