'use strict'

const MongoClient = require('mongodb').MongoClient
const {
    DB_USER,
    DB_PASSWD,
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env

// MONGO DB ATLAS !!!!!!
const uri = `mongodb+srv://temporal:temporal@cluster0-i638o.mongodb.net/test?retryWrites=true&w=majority`

let connection

async function connectDB() {
    console.log("connectDB");

    if (connection){
        console.log("conexion exitosa con la db en mongodb Atlas");
        return connection
    }
    let client
    

    try {
        client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        connection = client.db("curso_graphql")
        console.log("conexion exitosa con la db en mongodb Atlas");

        // const values = await connection.collection("curso_graphql").find().toArray()
        // console.log(values);
    } catch (error) {
        console.log('No se pudo conectar a la base de datos de mongo', uri, error)
        process.exit(1)        
    }
    return connection
}


module.exports = connectDB