const mysql = require('mysql2/promise')

const conexao = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "@#Andre321",
    database: "db"
})

if(conexao){
    console.log("Conexão com o banco de dados realizada com sucesso!");
}else{
    console.log("Erro ao conectar com o banco de dados!");
}

module.exports = conexao