import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { API_ROTA } from './../api';

@Injectable()
export class AppSenadoService {

  constructor(
    private http: HttpClient 
  ) { }

  getSituacoes() {
    return this.http.get(`${API_ROTA.SENADO}materia/situacoes.json`)
    .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }

  getMateriaDetalhe(codMateria) {
    return this.http.get(`${API_ROTA.SENADO}materia/${codMateria}.json`)
    .catch((e: any) => Observable.throw(this.errorHandler(e)));
  }

  getPlsSenado(numero, siglaTipo, ano, autor, tramitacao, codSituacao) {
    return this.http.get(`${API_ROTA.SENADO}materia/pesquisa/lista.json?numero=${numero}&sigla=${siglaTipo}&ano=${ano}&nomeAutor=${autor}&tramitando=${tramitacao}&codigoSituacao=${codSituacao}`)
    .catch((e: any) => Observable.throw(this.errorHandler(e)));
    };

    errorHandler(error: any) : void {
      console.log(error);
    }

}
