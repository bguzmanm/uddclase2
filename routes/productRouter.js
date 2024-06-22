const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/all", productController.findAll);
router.get("/:id", productController.findOne);
router.post("/", productController.create);
router.patch("/:id", productController.update);
router.delete("/:id", productController.delete);


module.exports = router;