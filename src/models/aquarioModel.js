var database = require("../database/config");

function buscarAquariosPorEmpresa(req, res) {

  var instrucaoSql = `select b.nome nome, count(fk_besta) Quantidade from historico h
join bestas b on h.fk_besta = b.id_besta
group by h.fk_besta
order by count(fk_besta) desc
limit 10;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarAquariosPorEmpresa
}