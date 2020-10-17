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
   const courier = new Courier({
      name: request.body.name,
      id: uuidv4() ,
      phone:request.body.phone,
      type: request.body.vehicle,
      weight: request.body.weight

    })
    console.log(courier)
    courier.save()
});

 mongoose.connect(
   'mongodb+srv://ilau020203:ilau020203@cluster0.dn8qc.mongodb.net/test?retryWrites=true&w=majority',
   {
     useNewUrlParser: true,
     useFindAndModify: false
   }
 )

app.post("/OrderReg/send", urlencodedParser, function (request, response) {
   console.log(request.body);
   if(!request.body) return response.sendStatus(400);
   const order = new Order({
      name: request.body.name,
      id: uuidv4() ,
      phone:request.body.phone,
      type: request.body.type,
      weight: request.body.weight,
      from_city:request.body.from_city,
      from_street:request.body.from_street,
      from_building:request.body.from_building,
      from_flat:request.body.from_flat,
      to_city:request.body.to_city,
      to_street:request.body.to_street,
      to_building:request.body.to_building,
      to_flat:request.body.to_flat,
      date: request.body.date
    })
    console.log(order)
    order.save()
});

app.listen(80);
