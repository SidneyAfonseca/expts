const express =require("express")
const dotenv =require("dotenv")

dotenv.config()
const app = express()
const PORT = process.env.PORT ?? 7777

app.get("/",(req,res)=>{
    res.send("Hello world!")
})

app.get("/about",(req,res)=>{
    res.send("sobre a aplicação")
})

app.listen(PORT,()=>{
    console.log(`servidor ouvindo na porta ${PORT}`)
})