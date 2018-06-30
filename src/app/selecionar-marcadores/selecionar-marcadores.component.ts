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
  camaraSituacao: any;
  senadoSituacao: any;

  constructor(
    private selecionarMarcadoresService: SelecionarMarcadoresService
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
    this.getSenadoSituacao();
    this.getCamaraSituacao();
  }

  // Requisição HTTP dos dados do senado passando
  getSenado(siglaTipo, ano, autor, tramitacao, codSituacao, ordenar) {
    this.selecionarMarcadoresService
      .getSenado(siglaTipo, ano, autor, tramitacao, codSituacao, ordenar)
      .subscribe(res => this.senadoDados = res);
  }

  // Requisição HTTP dos dados da camara passando siglaTipo, ano, autor, tramitacao, codSituacao e ordenar
  getCamara(siglaTipo, ano, autor, tramitacao, codSituacao, ordenar) {
    this.selecionarMarcadoresService
      .getCamara(siglaTipo, ano, autor, tramitacao, codSituacao, ordenar)
      .subscribe(res => this.camaraDados = res);
  }

  // Requisição HTTP dos dados da camara passando
  getCamaraSituacao(codSituacao) {
    this.selecionarMarcadoresService
      .getCamaraSituacao(codSituacao)
      .subscribe(res => this.camaraSituacao = res);
  }

  // Requisição HTTP dos dados da camara passando
  getSenadoSituacao(codSituacao) {
    this.selecionarMarcadoresService
      .getSenadoSituacao(codSituacao)
      .subscribe(res => this.senadoSituacao = res);
  }

}

