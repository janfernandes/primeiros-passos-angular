import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Janayna';
  idade = 10;
  funcionarios = [];


  dataAniversario = new Date(1990, 3, 19);
  preco = 12855.32;
  troco = 0.57392;

  aoAdicionar(funcionario) {
    this.funcionarios.push(funcionario);
  }

  getIdade(){
    return this.idade;
  }

  alterarNome(event: any){
    this.nome = event.target.value;
  }

  // adicionarOutrojeito(nome: string){
  //   this.nome = nome;
  // }
}
