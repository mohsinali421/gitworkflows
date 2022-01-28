const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json('successfully reached base')
})

app.get('/hello',(req,res)=>{
    res.status(200).json('Hi from there')
})

app.listen(3000,()=>{
    console.log('server running...')
})
