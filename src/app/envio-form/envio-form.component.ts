import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-envio-form',
  templateUrl: './envio-form.component.html',
  styleUrls: ['./envio-form.component.css']
})
export class EnvioFormComponent{
  profissao = 'Outra';
  profissoes = ['Programador', 'Empresário', 'Outra'];

  salvar(form: NgForm) {
    console.log(form);
  }

}
