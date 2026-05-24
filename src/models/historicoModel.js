var database = require("../database/config");

function BuscarHistoricoPorUsuario(idUsuario, periodo) {
    console.log("ACESSEI O HISTORICO MODEL \n \t\t \t\t \n function BuscarHistoricoPorUsuario():", idUsuario, periodo);

    var instrucaoSql = `SELECT DATE_FORMAT(h.dia, '%d/%m/%Y') data, h.hora hora, b.nome nome
FROM historico h
JOIN bestas b ON h.fk_besta = b.id_besta
JOIN users u ON h.fk_usuario = u.id
WHERE u.id = ${idUsuario} and h.dia >= curdate() - interval ${periodo}
ORDER BY h.dia DESC, h.hora DESC;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    BuscarHistoricoPorUsuario
}