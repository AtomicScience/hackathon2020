const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views");
// создаем парсер для данных в формате json
const urlencodedParser = bodyParser.urlencoded({extended: false})
   
app.get("/", function(request, response){
      
    response.sendFile(__dirname + "/static/index.html");
});

app.get("/CourierReg", function(request, response){
      
   response.sendFile(__dirname + "/static/CourierReg.html");
});

app.post("/CourierReg/send", urlencodedParser, function (request, response) {
   console.log(request.body);
   if(!request.body) return response.sendStatus(400);
    
   response.render("CourierID", {
      ID: "1"
   });
});
  
app.listen(80);