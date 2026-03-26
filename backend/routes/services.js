const router = require("express").Router();

const serviceController = require("../controllers/serviceController");

// Funções

router
  .route("/")
  .post((req, res) => serviceController.create(req, res))
  .get((req, res) => serviceController.getAll(req, res));

router
  .route("/:id")
  .get((req, res) => serviceController.get(req, res))
  .delete((req, res) => serviceController.delete(req, res))
  .put((req, res) => serviceController.update(req, res));

module.exports = router;
