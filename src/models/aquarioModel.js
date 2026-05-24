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

function BuscarHistoricoPorUsuario(Id_user, intervaloTempo) {
  var instrucaoSql = `select h.dia data, h.hora hora, b.nome nome
from historico h
join bestas b on h.fk_besta = b.id_besta
join users u on h.fk_usuario = u.id
where u.id = ${Id_user} and h.dia >= curdate() - interval ${intervaloTempo} -- depende do intervalo de tempo day/month
order by h.dia desc, h.hora desc;`
}

module.exports = {
  buscarAquariosPorEmpresa,
  BuscarHistoricoPorUsuario
}