const router = require("express").Router();

// Services router
const servicesRouter = require("./services");

router.use("/services", servicesRouter);

module.exports = router;
