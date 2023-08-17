/******************* Fundamental of Express ************************/

const express = require('express')

const app = express()

const PORT = 4012

const HOSTNAME = 'localhost'

app.get('/', (req, res) => {
    res.send('Hello Priyanka !')
})
app.get('/about', (req, res) => {
    res.send('About Page !')
})
app.get('/home', (req, res) => {
    res.send('Home Page !')
})
app.get('/Product', (req, res) => {
    res.send('Product Page !')
})

app.listen(PORT, () => {
    console.log(`server running at ${HOSTNAME}:${PORT}`)
})