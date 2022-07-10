// ========================
// Requirements for our server
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const PORT = 8000;
require('dotenv').config()

let db,
    dbConnectionStr=process.env.DB_STRING,
    dbName = 'INVENTORY-DATABASE'

// ========================



// ========================
// Connection to database
MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to the ${dbName}`)
        db = client.db(dbName)
    
// ========================

 
    // ========================
    // Middlewares
    // ========================
    app.set('view engine', 'ejs')
    app.use(express.static('public'))
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())

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
