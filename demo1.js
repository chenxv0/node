//打印输出
// console.log("hello")

const fs=require("fs")
//同步
// const data=fs.readFileSync("./file/file")
// console.log(data.toString())
//异步
const data=fs.readFile("./file/file",(err,data)=>{
    console.log(data.toString())
})