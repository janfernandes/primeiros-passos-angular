export class FuncionarioService {

  ultimoId = 1;
  funcionarios = [{id: 1, nome: 'João'}];

  aoAdicionar(nome: string) {
    const funcionario = {
      id: ++this.ultimoId,
      nome
    };
    this.funcionarios.push(funcionario);
    console.log(JSON.stringify(this.funcionarios));
  }

  consultar() {
    return this.funcionarios;
  }
}

export class FuncionarioAbreviadoService extends FuncionarioService {
  constructor(private numeroCaracteres: number) {
    super();
  }

  aoAdicionar(nome: string) {
    super.aoAdicionar(nome.substring(0, this.numeroCaracteres) + '...');
  }
}
