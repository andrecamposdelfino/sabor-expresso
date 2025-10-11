const conexao = require('../db/conexao')

module.exports = {
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