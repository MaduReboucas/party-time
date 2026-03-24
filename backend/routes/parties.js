const router = require("express").Router();

const partyController = require("../controllers/partyControllers");

router.route("/parties").post((req, res) => partyController.create(req, res));

router.route("/parties").get((req, res) => partyController.getAll(req, res));

router.route("/partis/:id").get((req, res) => partyControllers.get(req, res));

module.exports = router;
