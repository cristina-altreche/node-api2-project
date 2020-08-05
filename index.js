const express = require('express')
const cors = require('cors')
const postsRouter = require('./posts/posts-router')
const server = express()
server.use(express.json())
server.use(cors())
server.use('/api/posts', postsRouter)


// server.get('/', (req, res) => res.send('API up and running'))

server.listen(8000, () => console.log('API running on port 8000'))