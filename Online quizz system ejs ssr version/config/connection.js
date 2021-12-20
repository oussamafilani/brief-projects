require('dotenv').config();
const { Pool, Client } = require('pg')



const connectionString = `postgresql://${process.env.PGUSER }:${process.env.PGPASSWORD }@${process.env.PGHOST }:${process.env.PGPORT }/${process.env.PGDATABASE }`

const client = new Client({
  connectionString,
})

client.connect()

client.query('SELECT nom FROM employee', (err, res) => {
  console.log(err, res)
  client.end()
})


const getEtuP = (req,res)=>{
    return new Promise((resolve, reject) => {
        client.query('SELECT nom FROM employee', (err, result) => {
            console.log(err, result)
            resolve(result)
          })
    });
  }
  

  module.exports = getEtuP
