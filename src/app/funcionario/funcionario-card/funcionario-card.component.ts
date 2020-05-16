import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent {

  @Input() funcionario: any;

  getEstilosCartao(){
    return {
      'border-width.px': this.funcionario.id,
      backgroundColor: this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    };
  }

  // getListaClassesCss() {
  //   return ['badge', 'badge-default'];
  // }
  isAdmin() {
    return this.funcionario.nome.startsWith('T');
  }
}
