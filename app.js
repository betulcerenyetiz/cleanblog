import  express  from "express";
import ejs from "ejs"
const app= express()

app.set("view engine","ejs")
app.use(express.static("public"))


app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/add_post", (req,res)=>{
    res.render("add_post")
})

app.listen(3000,()=>{
    console.log(`Server connect with port 3000`)
})