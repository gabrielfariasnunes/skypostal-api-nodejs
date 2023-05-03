const router = require("express").Router();
const { homePageController, trackPackageController } = require("#controllers");

const ROUTER_TRACK_PACKAGE = "/rastrear/:cte";
const ROUTER_HOME_PAGE = "/";

router.get(ROUTER_TRACK_PACKAGE, trackPackageController);
router.use(ROUTER_HOME_PAGE, homePageController);

module.exports = router;
