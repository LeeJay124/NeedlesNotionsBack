const router = require("express").Router({mergeParams: true});
const controller = require("./yarn.controller");

const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

//Use CORS
router.use(cors());
router.route("/").get(controller.list).all(methodNotAllowed);
router.route("/:yarnId").get(controller.read).all(methodNotAllowed);


module.exports = router;