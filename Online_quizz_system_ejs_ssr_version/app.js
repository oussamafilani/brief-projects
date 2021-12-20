// const port = 3007,
//   http = require("http"),
//   httpStatus = require("http-status-codes"),
//   router = require("./routes/router"),
//   contentTypes = require("./contentTypes/contentTypes"),
//   utils = require("./utils/utils");


const port = 3007,
config = require("./config/conn");
getEtu = require("./config/conn");
// getEtuP = require("./config/connection");
http = require("http"),
httpStatus = require("http-status-codes"),
fs = require("fs");
ejs = require('ejs');
 
// var data = [
//     { id: 1, name: "bob" },
//     { id: 2, name: "john" },
//     { id: 3, name: "jake" },
// ];

var data =    getEtu()
// var data =  JSON.parse( getEtu())

// const data = async () => {
 
//     var results =  await config.getEtu;
//     return results

// }



const sendErrorResponse = res => {
    res.writeHead(httpStatus.StatusCodes.NOT_FOUND, {
      "Content-Type": "text/html"
    });
    res.write("<h1>File Not Found!</h1>");
    res.end();
  };
  
  const server = http
    .createServer( async (req, res) => {
      const myData = {
        data: await data
      }
      let url = req.url;
    
      if (url.indexOf(".html") !== -1) {
          res.writeHead(httpStatus.StatusCodes.OK, {
              "Content-Type": "text/html"
            });
            customReadFile(`./views${url}`, res);
            console.log(data)
      } 
      else if (url.indexOf(".ejs") !== -1) {
          res.writeHead(httpStatus.StatusCodes.OK, {
              "Content-Type": "text/html"
            });

            ejs.renderFile(`./views${url}`, myData, (err, str) => {
                // str => Rendered HTML string
                if (err) {
                 console.log(err)
                } else {
                 console.log(str)
                }
                res.end(str);
               })
      } 
      else if (url.indexOf(".js") !== -1) {
        res.writeHead(httpStatus.StatusCodes.OK, {
          "Content-Type": "text/javascript"
        });
        customReadFile(`./public/js${url}`, res);
      } else if (url.indexOf(".css") !== -1) {
        res.writeHead(httpStatus.StatusCodes.OK, {
          "Content-Type": "text/css"
        });
        customReadFile(`./public/style${url}`, res);
      } 
      else if (url.indexOf(".png") !== -1) {
        res.writeHead(httpStatus.StatusCodes.OK, {
          "Content-Type": "image/png"
        });
        customReadFile(`./public/img${url}`, res);
      }
      else if (url.indexOf(".jpg") !== -1) {
        res.writeHead(httpStatus.StatusCodes.OK, {
          "Content-Type": "image/jpg"
        });
        customReadFile(`./public/img${url}`, res);
      } 
      
      else {
        sendErrorResponse(res);
      }

     
    });

    server.listen(3007,'localhost',()=>{

      console.log(`The server is listening on port number: http://localhost:${port}`);
    }
      
      );
  

  
  const customReadFile = (file_path, res) => {
    if (fs.existsSync(file_path)) {
      fs.readFile(file_path, (error, data) => {
        if (error) {
          console.log(error);
          sendErrorResponse(res);
          return;
        }
        res.write(data);
        res.end();
      });
    } else {
      sendErrorResponse(res);
    }
  };


  
  


