var express = require("express");
var router = express.Router();

var historicoController = require("../controllers/historicoController");

router.get("/buscar/:idUsuario/:periodo", function (req, res) {
    historicoController.BuscarHistoricoPorUsuario(req, res);
});


module.exports = router;