import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { EnvioFormComponent } from './envio-form/envio-form.component';
import {NavegacaoModule} from './navegacao/navegacao.module';
import {LogService} from './log.service';
import {FuncionarioModule} from './funcionario/funcionario.module';

// const criarFuncionarioService = () => {
//   return new FuncionarioAbreviadoService(4);
// };

@NgModule({
  declarations: [
    AppComponent,
    CampoColoridoDirective,
    EnvioFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NavegacaoModule,
    FuncionarioModule
  ],
  providers: [
    // {provide: FuncionarioService, useFactory: criarFuncionarioService},
    LogService,
    { provide: 'LogPrefixo', useValue: 'LOG' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
