const express = require("express")
const router = express.Router()
const produtosController = require("../controllers/produtosController")

router.get("/produtos", produtosController.listarPordutos)
router.get("/produtos/:id", produtosController.listarProduto)

module.exports = router