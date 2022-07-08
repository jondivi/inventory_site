console.log("Let's get inventorying things!")

// ========================
// Requirements for our server
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const PORT = 8000;
// ========================


MongoClient.connect('mongodb-connection-string', (err, client) => {
    
 
    // ========================
    // Middlewares
    // ========================
    app.use(express.urlencoded({ extended: true }))

    // ========================



    // ========================
    // Routes (CRUD)
    // ========================
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html')
    })

    app.post('/assets', (req, res) => {
        console.log(req.body)
    })
    // ========================



    // ========================
    // Listener for server
    // ========================

    app.listen(PORT, function(){
        console.log(`The inventory server is now running on port ${PORT}`)
    })
    // ========================
})
