import { AppSenadoService } from './../selecionar-marcadores/app.senado.service';
import { AppCamaraService } from './../selecionar-marcadores/app.camara.service';
import { Component, OnInit } from '@angular/core';
import { AppSenadoService } from './../app.senado.service';
import { AppCamaraService } from '../app.camara.service';


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
  casaSel: any;

  anos: [
    { name: 1990 },
    { name: 1991 },
    { name: 1992 },
    { name: 1993 },
    { name: 1994 },
    { name: 1995 },
    { name: 1997 },
    { name: 1998 },
    { name: 1999 },
    { name: 2000 },
    { name: 2001 },
    { name: 2002 },
    { name: 2003 },
    { name: 2004 },
    { name: 2005 },
    { name: 2006 },
    { name: 2007 },
    { name: 2008 },
    { name: 2009 },
    { name: 2010 },
    { name: 2011 },
    { name: 2012 },
    { name: 2013 },
    { name: 2014 },
    { name: 2015 },
    { name: 2016 },
    { name: 2017 },
    { name: 2018 }
  ];

  situacaoAtuais: any[];

  casas: [
    { name: 'Senado'; id: '1' },
    { name: 'Câmara'; id: '2' },
    { name: 'Senado e Câmara'; id: '3' }
  ];

  constructor(
    private senadoService: AppSenadoService,
    private camaraService: AppCamaraService
  ) {}

  ngOnInit() {}

  // Requisição HTTP dos dados do senado passando
  getSenado(numero, siglaTipo, ano, autor, tramitacao, codSituacao) {
    // this.senadoService
    //   .getPlsSenado(numero, siglaTipo, ano, autor, tramitacao, codSituacao)
    //   .subscribe(res => this.senadoDados = res);
  }

  // Requisição HTTP dos dados da camara passando

  getSenadoSituacoes() {
    this.senadoService
      .getSituacoes()
      .subscribe(
        res => (this.situacaoAtuais = res.ListaSituacoes.Situacoes.Situacao)
      );
  }

  // Requisição HTTP dos dados da camara passando siglaTipo, ano, autor, tramitacao, codSituacao e ordenar
  getCamara(numero, siglaTipo, ano, autor, tramitacao, codSituacao, ordenar) {
    // this.camaraService
    //   .getPlsCamara(numero, siglaTipo, ano, autor, tramitacao, codSituacao, ordenar)
    //   .subscribe(res => this.camaraDados = res);
  }

  // Requisição HTTP dos dados da camara passando
  getCamaraSituacao(codSituacao) {
    // this.camaraService
    //   .getProposicaoDetalhe(codSituacao)
    //   .subscribe(res => this.situacaoAtuais = res);
  }

  // Requisição HTTP dos dados da camara passando
  getSenadoSituacao(codSituacao) {
    // this.senadoService
    //   .getMateriaDetalhe(codSituacao)
    //   .subscribe(res => this.situacaoAtuais = res);
  }

  getAllSitacoesSenado() {
    this.senadoService
      .getSituacoes()
      .subscribe(res => (this.situacaoAtuais = res));
  }
  getAllSitacoesCamara() {
    this.senadoService
      .getSituacoes()
      .subscribe(res => (this.situacaoAtuais = res));
  }

  casa(casa) {
    if (casa.id === '1') {
      this.getAllSitacoesSenado();
    } else if (casa.id === '2') {
      this.getAllSitacoesCamara();
    } else {
    }
  }

}

