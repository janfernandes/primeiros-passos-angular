import { Component, OnInit } from '@angular/core';
import {CidadeService} from '../cidade.service';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit{

  cidades = [];

  constructor(private cidadeService: CidadeService) {
  }

  ngOnInit() {
    this.cidadeService.consultar().then(dados => {this.cidades = dados; });
  }

  adicionar(nome: string) {
    alert(nome);
  }

  excluir(id: number) {
    alert(id);
  }

  atualizar(cidade: any) {
    alert(JSON.stringify(cidade));
  }

}
