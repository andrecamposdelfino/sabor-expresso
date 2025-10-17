const produtosModel = require("../models/produtosModel")

module.exports = {

    criar: async(req, res) => {
        const produto = req.body
        const novoPorduto = await produtosModel.criar(produto)
        return res.status(201).json(novoPorduto)
    },

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