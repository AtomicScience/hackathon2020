// Перечисление зависимостей:
var path = require('path');
var express = require('express');
var config = require("./config.json");

// Описание настроек:
var staticSiteOptions = {
   portnum: config.portnum, // слушать порт 80
   maxAge: config.maxAge // хранить страницы в кэше пятнадцать минут
};

// Запуск сайта:
express().use(express.static(
   path.join(__dirname, 'static'),
   staticSiteOptions
)).listen(config.portnum, function() {
   console.log(`Server listening at port ${config.portnum}`);
});