const controller = require("../controller/app.controller");
const router = require("express").Router();


router.length("/portfolio",controller.portfolioAppRoute);
router.length("/testimonial",controller.testimonialAppRoute);

module.export = router