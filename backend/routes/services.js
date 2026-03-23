const router = require("express").Router();

const serviceController = require("../controllers/serviceController");

// Funcoes

router.route("/").post((req, res) => serviceController.create(req, res));

module.exports = router;
