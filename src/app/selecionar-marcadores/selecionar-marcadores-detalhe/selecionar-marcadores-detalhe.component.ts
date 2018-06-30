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
  tramitacaoCamara: any;
  tramitacaoSenado: any;
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

getTramitacaoCamara(codProposicao) {
  this.appCamaraService.getProposicaoTramitacao(codProposicao)
  .subscribe(res => {this.tramitacaoCamara = res.dados; console.log(res.dados); });
}

getTramitacaoSenado(codProposicao) {
  this.appSenadoService.getTramitacao(codProposicao)
  .subscribe(res => {this.tramitacaoSenado = res.MovimentacaoMateria.Materia.Tramitacoes.Tramitacao; console.log(this.tramitacaoSenado); });
}

  ngOnInit() {
    if (this.params.casa === 'camara') {
      this.appCamaraService.getProposicaoDetalhe(this.params.cod) 
      .subscribe(res => {
        this.getAutorCamara(res.dados.uriAutores);
        this.getTramitacaoCamara(res.dados.id);
        this.dadosPl = res.dados; 
        console.log(this.dadosPl);
      });
    }else if (this.params.casa === 'senado') {
      this.appSenadoService.getMateriaDetalhe(this.params.cod)
      .subscribe(res => {
        this.getTramitacaoSenado(res.DetalheMateria.Materia.IdentificacaoMateria.CodigoMateria);
        this.dadosPl = res.DetalheMateria;
      });
    }else {

    }
  }

  

}
