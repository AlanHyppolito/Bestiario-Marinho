var aquarioModel = require("../models/aquarioModel");

function buscarAquariosPorEmpresa(req, res) {
  // var idUsuario = req.params.idUsuario;

  aquarioModel.buscarAquariosPorEmpresa().then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function inserirInformacao(req, res) {
  // var idUsuario = req.params.idUsuario;
  var bestaI1 = req.body.bestaIServer;
  var user1 = req.body.userServer;

  aquarioModel.inserirInformacao(bestaI1, user1)
    .then((resultado) => {
        res.status(201).json(resultado);
      }
    ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      }
    );
}


module.exports = {
  buscarAquariosPorEmpresa,
  inserirInformacao
}