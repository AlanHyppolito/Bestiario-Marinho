var express = require("express");
var router = express.Router();

var aquarioController = require("../controllers/aquarioController");

router.get("/:id", function (req, res) {
  aquarioController.buscarAquariosPorEmpresa(req, res);
});


module.exports = router;