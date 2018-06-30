import { AppSenadoService } from './../app.senado.service';
import { AppCamaraService } from './../app.camara.service';
import { Component, OnInit } from '@angular/core';
import { SelecionarMarcadoresService } from '../selecionar-marcadores/selecionar-marcadores.service';

@Component({
  selector: 'app-selecionar-marcadores',
  templateUrl: './selecionar-marcadores.component.html',
  styleUrls: ['./selecionar-marcadores.component.scss']
})
export class SelecionarMarcadoresComponent implements OnInit {
  camaraDados: any;
  senadoDados: any;
  camaraSituacoes: any;
  senadoSituacoes: any;

  constructor(
    private selecionarMarcadoresService: SelecionarMarcadoresService,
    private appCamaraService: AppCamaraService,
    private appSenadoService: AppSenadoService 
  ) { }

  ngOnInit() {
    // Chamada das funções responsáveis pelas requisições HTTP
    // this.getSenado(senadoDados.siglaTipo,
    //    senadoDados.ano,
    //     senadoDados.autor,
    //      senadoDados.tramitacao,
    //       senadoDados.codSituacao,
    //        senadoDados.ordenar);
    // this.getCamara();
    // this.getSenadoSituacao();
    // this.getCamaraSituacao();
    this.getSenadoSituacoes();
  }

  // Requisição HTTP dos dados do senado passando
  getSenado(siglaTipo, ano, autor, tramitacao, codSituacao, ordenar) {
    this.appSenadoService.getPlsSenado(siglaTipo, ano, autor, tramitacao, codSituacao, ordenar)
      .subscribe(res => this.senadoDados = res);
  }

  //Requisição HTTP dos dados da camara passando
  getSenadoSituacoes() {
    this.appSenadoService.getSituacoes()
      .subscribe(res => this.senadoSituacoes = res.ListaSituacoes.Situacoes.Situacao);
  }

  // Requisição HTTP dos dados da camara passando siglaTipo, ano, autor, tramitacao, codSituacao e ordenar
  getCamara(siglaTipo, ano, autor, tramitacao, codSituacao, ordenar) {
    this.appCamaraService.getPlsCamara(siglaTipo, ano, autor, tramitacao, codSituacao, ordenar)
      .subscribe(res => this.camaraDados = res);
  }

  // Requisição HTTP dos dados da camara passando
  getCamaraSituacoes() {
    this.appCamaraService.getSituacoes()
    .subscribe(res => this.camaraSituacoes = res.dados);
  }


}

