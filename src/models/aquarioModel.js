var database = require("../database/config");

function buscarAquariosPorEmpresa(id) {

  var instrucaoSql = `SELECT * FROM historico h WHERE fk_usuario = ${id}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarAquariosPorEmpresa
}
