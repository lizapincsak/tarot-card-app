require('dotenv').config()

const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'client/build')))

//for Heroku machine
if (process.env.NODE_ENV === 'development'){
    const cors = require('cors')
    server.use(cors())
}

//API comes earlier in pipeline
server.get('/api/tarot', (req, res) => {
    res.json({message: 'Cyber Mystic Fun'})
})

//catch-all
server.get('*', (req,res) => {
    res.sendFile(path.json(__dirname, 'client/build', 'index.html'))
})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
    console.log(`listen on ${PORT}`)
})