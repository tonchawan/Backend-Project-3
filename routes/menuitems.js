const express = require("express");
const router = express.Router(); //creates a router object
const ctrl = require("../controllers");

router.get("/", ctrl.menuitem.getAllMenuItem);
router.get("/category/:catid", ctrl.menuitem.allMenuItemByCategory);
router.get("/search", ctrl.menuitem.searchMenuItem);
module.exports = router;
