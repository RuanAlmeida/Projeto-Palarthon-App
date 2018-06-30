import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API_ROTA } from './api';

@Injectable()
export class AppCamaraService {

  constructor(
    private http: HttpClient
  ) { }

  getProposicaoDetalhe(codProposicao) {
    this.http.get(`${API_ROTA.CAMARA}proposicoes/${codProposicao}`)
    .map(res => res);
    };

  getPlsCamara(numero, siglaTipo, ano, autor, tramitacao, codSituacao, ordenar) {
    this.http.get(`${API_ROTA.CAMARA}proposicoes?numero=${numero}&siglaTipo=${siglaTipo}&ano=${ano}&autor=${autor}&tramitacaoSenado=${tramitacao}&idSituacao=${codSituacao}&ordem=ASC&ordenarPor=${ordenar}`)
    .map(res => res);
    };

}
