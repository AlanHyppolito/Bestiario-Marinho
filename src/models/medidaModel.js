var database = require("../database/config");

function buscarHistoricoPesquisa(Id_user) {

    var instrucaoSql = `SELECT 
                        h.data_hora,
                        b.nome_popular
                        FROM historico h
                        inner join bestas b on h.fk_besta = b.Id_besta
                        inner join users s on h.fk_usario = s.Id_user
                        WHERE h.fk_usario = ${Id_user}
                        ORDER BY h.data_hora DESC
                        LIMIT 30`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas(idAquario, limite_linhas) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    FROM medida
                    WHERE fk_aquario = ${idAquario}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarHistoricoPesquisa
}
