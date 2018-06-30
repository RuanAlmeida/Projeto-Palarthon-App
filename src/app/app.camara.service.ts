import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { API_ROTA } from './api';

@Injectable()
export class AppCamaraService {

  constructor(
    private http: HttpClient
  ) { }

  getSituacaoes() {
    return this.http.get(`${API_ROTA.CAMARA}referencias/situacoesProposicao`)
    .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }
  
    getPlsCamara(numero, siglaTipo, ano, autor, tramitacao, codSituacao) {
      return this.http.get(`${API_ROTA.CAMARA}proposicoes?numero=${numero}&siglaTipo=${siglaTipo}&ano=${ano}&autor=${autor}&tramitacaoSenado=${tramitacao}&idSituacao=${codSituacao}&ordem=ASC&ordenarPor=id`)
      .catch((e: any) => Observable.throw(this.errorHandler(e)));
      };

  getProposicaoDetalhe(codProposicao) {
    return this.http.get(`${API_ROTA.CAMARA}proposicoes/${codProposicao}`)
    .catch((e: any) => Observable.throw(this.errorHandler(e)));
    };
  
  getProposicaoTramitacao(codProposicao) {
    return this.http.get(`${API_ROTA.CAMARA}proposicoes${codProposicao}/tramitacoes`)
    .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }

    errorHandler(error: any) : void {
      console.log(error);
    }

}
