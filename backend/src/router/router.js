const express = require("express")
const router = express.Router()
const produtosController = require("../controllers/produtosController")

router.get("/produtos", produtosController.listarPordutos)
router.get("/produtos/:id", produtosController.listarProduto)
router.post("/produtos", produtosController.criar)

module.exports = router