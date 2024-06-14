const express   = require('express')
const app       = express()
const port      = 3000

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1><hr>')
}) 

app.get('/profil',(req,res)=>{
    res.send('<h1>Profil Saya</h1>')
})

app.get('/alamat',(req,res)=>{
    res.send('<h1>Alamat</h1>')
}) 

app.listen(port, ()=>{
    console.log(`App sudah siap, silahkan buka http://localhost:${port}`)
})
