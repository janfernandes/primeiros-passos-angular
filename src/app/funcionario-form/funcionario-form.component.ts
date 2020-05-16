import {Component, EventEmitter, Output} from '@angular/core';
import {FuncionarioService} from '../funcionario.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  nome = 'João';
  adicionado = false;
  // ultimoId = 0;
  // @Output() funcionarioAdicionado = new EventEmitter();
  //
  // adicionar(){
  //   this.adicionado = true;
  //   const funcionario = {
  //     id: ++this.ultimoId,
  //     nome: this.nome
  //   };
  //
  //   this.funcionarioAdicionado.emit(funcionario);
  // }
  constructor(private funcionarioService: FuncionarioService) { }

  adicionar(nome: string) {
    this.funcionarioService.aoAdicionar(nome);
  }
}
