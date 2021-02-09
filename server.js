const http=require("http")
const fs=require("fs")

// (async ()=>{
//     const fs=require("fs")
//     const {promisify}=require("util")
//     const readFile=promisify(fs.readFile)
//     const data=await readFile("./file/xx.json")
//     console.log(data.toString());
   
// })()


const server=http.createServer(
    (req,response)=>{
        const {url,method,headers}=req
        if (url === '/' && method === 'GET'){
            // 静态页面服务
            fs.readFile('./file/index.html',(err,data) => {
                response.statusCode = 200
                response.setHeader('Content-Type','text/html')
                response.end(data)
            })
        }else if(url === '/users' && method === 'GET'){
            // Ajax服务
            response.writeHead(200,{
                'Content-Type': 'application/json'
            })
            response.end(JSON.stringify({
                name : 'laowang'
            }))
        }else if(method === 'GET' && headers.accept.indexOf('image/*') !== -1){
            // 图片文件服务
            console.log(url)
            fs.createReadStream('./file'+url).pipe(response)
        }
        
    }
)
server.listen(3000)
