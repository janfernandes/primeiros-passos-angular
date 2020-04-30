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

  getIdade(){
    return this.idade;
  }

  adicionar(){
    console.log(`Adicionando ${this.nome}`);

    const numero = Math.round(Math.random() * 100);
    this.nome = 'Janix' + numero;
  }

  alterarNome(event: any){
    this.nome = event.target.value;
  }

  adicionarOutrojeito(nome: string){
    this.nome = nome;
  }
}
