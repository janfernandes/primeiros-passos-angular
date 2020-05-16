import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { EnvioFormComponent } from './envio-form/envio-form.component';
import {NavegacaoModule} from './navegacao/navegacao.module';
import {FuncionarioAbreviadoService, FuncionarioService} from './funcionario.service';

const criarFuncionarioService = () => {
  return new FuncionarioAbreviadoService(4);
};

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    CampoColoridoDirective,
    EnvioFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NavegacaoModule
  ],
  providers: [
    {provide: FuncionarioService, useFactory: criarFuncionarioService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
