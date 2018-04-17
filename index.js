const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper("getCurrentYear", () => new Date())
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

//Express middleware
//Must use next to continue running app
//app.use registers a middleware
app.use((req, res, next) => {
  //req will contain all information from the users request
  next();
})

app.get("/",(req, res) => {
  res.send({
    name: "hui",
    age: 28,
    location: ["New York", "Queens", "Woodside"]
  });
});

app.get("/help",(req, res) => {
  res.render('help.hbs',{
    pageTitle: "Help Page",
    list: ["hello", "world", "test"]
  })
});

app.listen(3000);
