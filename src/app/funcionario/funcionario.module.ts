import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FuncionarioCardComponent} from './funcionario-card/funcionario-card.component';
import {FuncionarioFormComponent} from './funcionario-form/funcionario-form.component';
import {FuncionarioService} from './funcionario.service';



@NgModule({
  declarations: [FuncionarioCardComponent, FuncionarioFormComponent],
  exports: [FuncionarioCardComponent, FuncionarioFormComponent],
  imports: [
    CommonModule
  ],
  providers: [FuncionarioService]
})
export class FuncionarioModule { }
