import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meu-projeto';
  nome = 'Janayna';
  idade = 10;
  adicionado = false;
  funcionarios = [];
  ultimoId = 0;

  getIdade(){
    return this.idade;
  }

  adicionar(){
    console.log(`Adicionando ${this.nome}`);
    this.adicionado = true;
    this.funcionarios.push({
      id: ++this.ultimoId,
      nome: this.nome
    });
  }

  alterarNome(event: any){
    this.nome = event.target.value;
  }

  // adicionarOutrojeito(nome: string){
  //   this.nome = nome;
  // }
}
