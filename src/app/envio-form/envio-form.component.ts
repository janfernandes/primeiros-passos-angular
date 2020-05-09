import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

class Cliente {
  nome: string;
  email: string;
  profissao: string;
}

@Component({
  selector: 'app-envio-form',
  templateUrl: './envio-form.component.html',
  styleUrls: ['./envio-form.component.css']
})
export class EnvioFormComponent{
  cliente = new Cliente();
  prof = 'Outra';
  profissoes = ['Programador', 'Empresário', 'Outra'];

  salvar(form: NgForm) {
    // this.cliente.nome = form.value.nome;
    // this.cliente.email = form.value.email;
    // this.cliente.profissao = form.value.profissao;
    console.log(form);
    form.reset({profissao: ''});
  }

}
