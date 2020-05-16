import {Component, OnInit} from '@angular/core';
import {FuncionarioService} from './funcionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  nome = 'Janayna';
  idade = 10;
  funcionarios = [];


  dataAniversario = new Date(1990, 3, 19);
  preco = 12855.32;
  troco = 0.57392;

  constructor(private funcionarioService: FuncionarioService) {
  }

  aoAdicionar(funcionario) {
    this.funcionarioService.aoAdicionar(funcionario.nome);
    this.funcionarios = this.funcionarioService.consultar();
  }

  getIdade(){
    return this.idade;
  }

  alterarNome(event: any){
    this.nome = event.target.value;
  }

  ngOnInit(){
    this.funcionarios = this.funcionarioService.consultar();
  }

  // adicionarOutrojeito(nome: string){
  //   this.nome = nome;
  // }
}
