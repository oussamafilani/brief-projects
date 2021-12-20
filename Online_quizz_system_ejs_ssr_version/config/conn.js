var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_apprenants"
});

// const data = ()=>{


// const  data = con.connect(function(err) {
//     if (err) throw err;
//     //Select all customers and return the result object:
//     con.query("SELECT nom_etu FROM etudiant", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//       return data;
//     });
//   });

//  module.exports.data =  data

// }

const getEtu = (req,res)=>{
  return new Promise((resolve, reject) => {
      con.query("SELECT nom_etu FROM etudiant", (err, result) => {
        if (err) throw err;
        resolve(result);
      });
  });
}

// module.exports = {getEtu}
module.exports = getEtu
// exports.getEtu = getEtu;

// module.exports = getEtu


// async function get_info(data){
//   var sql = "SELECT nom_etu FROM etudiant"
//   const results = await con.promise().query(sql)
//   return results
// }

// const data = async () => {
//   var sql = "SELECT nom_etu FROM etudiant"
//   const results = await con.promise().query(sql)
//   return results
// }


// connection.connect(function(err) {
//   if (err) {
//     return console.error('error: ' + err.message);
//   }

//   console.log('Connected to the MySQL server.');
// });


