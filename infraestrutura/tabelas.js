class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    console.log("Tabelas chamadas");

    this.criarAtendimentos();
  }

  criarAtendimentos() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, Cliente varchar(50) NOT NULL, Pet varchar(20), Servico varchar(20) NOT NULL, Data datetime NOT NULL, DataCriacao datetime NOT NULL, Status varchar(20) NOT NULL, Observacoes text, PRIMARY KEY(id))";

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela Atendimentos criada com sucesso");
      }
    });
  }
}

module.exports = new Tabelas();
