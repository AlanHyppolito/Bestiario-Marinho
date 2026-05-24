var historicoModel = require("../models/historicoModel");


function BuscarHistoricoPorUsuario(req, res) {
    // var idUsuario = req.params.idUsuario;
    var idUsuario = req.params.idUsuario;
    var periodo = req.params.periodo;

    historicoModel.BuscarHistoricoPorUsuario(idUsuario, periodo).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o histórico: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    BuscarHistoricoPorUsuario
}