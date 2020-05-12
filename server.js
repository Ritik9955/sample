const express = require('express')
const server = express()
const port=process.env.PORT || 4321

server.use(express.static('public'));
// app.use('/',express.static(__dirname+'/public')) 
server.get('/',(req,res)=>{
    res.send('HELLO')
})

server.get('/hi',(req,res)=>{
    res.send('Hi!')
})

server.get('/bye',(req,res)=>{
    res.send('good bye ritik')
})
server.get('/bye',(req,res)=>{
    res.send("ruruyjv")
})


server.listen(port,()=>{
    console.log('http://localhost:',port) 
}) 