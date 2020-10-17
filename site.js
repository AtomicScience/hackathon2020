// Перечисление зависимостей:
var path = require('path');
var express = require('express');//install by npm
const mongoose = require('mongoose')//install by npm
const exphbs = require('express-handlebars')//install by npm
const todoRoutes = require('./routes/admin')
// Описание настроек:
/*
var staticSiteOptions = {
   portnum: 80, // слушать порт 80
   maxAge: 1000 * 60 * 15 // хранить страницы в кэше пятнадцать минут
};*/

// Запуск сайта:
const PORT = process.env.PORT || 3000
const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRoutes)

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://ilau020203:ilau020203@cluster0.dn8qc.mongodb.net/<dbname>?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: false
      }
    )
    app.listen(PORT, () => {
      console.log('number port:',PORT)
      
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}

start()