const produtosModel = require("../models/produtosModel")

module.exports = {
    listarPordutos: async (req, res) => {
        const produtos = await produtosModel.listarProdutos()
        return res.json(produtos)
    },

    listarProduto: async (req, res) => {
        const { id } = req.params
        const produto = await produtosModel.listarProduto(id)
        return res.json(produto)
    }
}