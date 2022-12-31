const express = require("express");
const router = express.Router(); //creates a router object
const ctrl = require("../controllers");

router.get("/", ctrl.order.testOrder);
router.post("/", ctrl.order.createOrder);
router.get("/detail", ctrl.order.showOrderDetail);
router.get("/table/:index", ctrl.order.orderByTable)
router.get("/:index", ctrl.order.showOrder);

module.exports = router;
