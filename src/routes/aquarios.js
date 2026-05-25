var express = require("express");
var router = express.Router();

var aquarioController = require("../controllers/aquarioController");

router.get("/aquarios", function (req, res) {
  aquarioController.buscarAquariosPorEmpresa(req, res);
});

router.post("/aquariosInserir", function (req, res) {
  aquarioController.inserirInformacao(req, res);
});

module.exports = router;