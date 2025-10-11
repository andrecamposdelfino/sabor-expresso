const express = require("express")
const router = require("./router/router")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())
app.use("/", router)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
    console.log("http://localhost:3000");  
})