const conexao = require('../db/conexao')

module.exports = {

    criar: async (produto) => {
        const { titulo, descricao, preco, imagem_url} = produto
        const [rows] = await conexao.query("INSERT INTO produtos (titulo, descricao, preco, imagem_url) VALUES (?, ?, ?, ?)", [titulo, descricao, preco, imagem_url])
        return {id: rows.insertId, ...produto}
    },

    listarProdutos: async () => {
        const [rows] = await conexao.query("SELECT * FROM produtos")
        if(rows.length == 0){
            return { message: "Nenhum produto cadastrado" }
        }else {
            return rows
        }
    },

    listarProduto: async (id) => {
        const [rows] = await conexao.query("SELECT * FROM produtos WHERE id = ?", [id])
        if(rows.length == 0){
            return { message: "Produto não encontrado" }
        }else {
            return rows[0]
        }
    }
}