const express=require("./cexpress")
const app=express()

app.get("/",(req,res)=>{
    res.end(JSON.stringify([{"name":"zs"}]))
})

app.listen(4000,()=>{
    console.log("4000端口已开启")
})