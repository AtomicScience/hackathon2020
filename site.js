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

app.get("/OrderReg", function(request, response){
      
   response.sendFile(__dirname + "/static/OrderReg.html");
});

app.get("/CourierLK", function(request, response){
      
   response.sendFile(__dirname + "/static/CourierLK.html");
});

app.get("/stile.css", function(request, response){
      
   response.sendFile(__dirname + "/static/stile.css");
});

app.post("/CourierReg/send", urlencodedParser, function (request, response) {
   console.log(request.body);
   if(!request.body) return response.sendStatus(400);
    
   response.render("CourierID", {
      ID: "1"
   });
});

app.post("/OrderReg/send", urlencodedParser, function (request, response) {
   console.log(request.body);
   if(!request.body) return response.sendStatus(400);
});
app.listen(80);