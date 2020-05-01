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
