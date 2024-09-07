
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send('hiteshdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>This is Backend</h1>')
})

app.listen(Process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})