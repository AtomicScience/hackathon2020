const express = require("express");
const hbs = require("hbs");
var path = require('path');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const Courier = require('./models/courier');
const Order = require('./models/order');
const { v4: uuidv4 } = require('uuid');


//models\courier.js
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views");
// создаем парсер для данных в формате json
const urlencodedParser = bodyParser.urlencoded({extended: false})
   
app.get("/", function(request, response){
      
    response.sendFile(__dirname + "/static/index.html");
    console.log("conect")
    
    
});

app.get("/CourierReg", function(request, response){
      
   response.sendFile(__dirname + "/static/CourierReg.html");
   
});

app.post("/CourierReg/send", urlencodedParser, function (request, response) {
   console.log(request.body);
   if(!request.body) return response.sendStatus(400);
   const courier = new Courier({
      name: request.body.name,
      id: "dfg" ,
      phone:request.body.phone,
      kind_of_transport: request.body.vehicle,
      weight: request.body.weight

    })
    console.log(courier)
    courier.save()
   response.render("CourierID", {
      ID: "1"
   });
});
 

 
 mongoose.connect(
   'mongodb+srv://ilau020203:ilau020203@cluster0.dn8qc.mongodb.net/<dbname>?retryWrites=true&w=majority',
   {
     useNewUrlParser: true,
     useFindAndModify: false
   }
 )
app.listen(80);