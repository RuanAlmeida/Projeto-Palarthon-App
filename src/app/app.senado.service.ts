import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API_ROTA } from './api';

@Injectable()
export class AppSenadoService {

  constructor(
    private http: HttpClient 
  ) { }

  getMateriaDetalhe(codMateria) {
    this.http.get(`${API_ROTA.SENADO}materia/${codMateria}.json`)
    .map(res => res);
  }

  getPlsSenado(numero, siglaTipo, ano, autor, tramitacao, codSituacao) {
    this.http.get(`${API_ROTA.SENADO}materia/pesquisa/lista.json?numero=${numero}&sigla=${siglaTipo}&ano=${ano}&nomeAutor=${autor}&tramitando=${tramitacao}&codigoSituacao=${codSituacao}`)
    .map(res => res);
    };

}
