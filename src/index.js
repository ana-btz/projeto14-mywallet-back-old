import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.send("alguma coisa")
})

const PORT = 5000

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
