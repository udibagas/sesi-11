const { customers } = require("../controllers/customers.controller");
const router = require("express").Router();

router.get("/", customers);

module.exports = router;
