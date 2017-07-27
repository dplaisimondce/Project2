var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var passport   = require('passport')
var session    = require('express-session')
var env = require('dotenv').load();
var exphbs = require('express-handlebars')


var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/postcontrollers")(app);

app.listen(port);

db.sequelize.sync({ force: true}).then(function){
	app.listen(PORT, function(){
		console.log("App listening on PORT: " + PORT);
	});
};







//testing passport
app.get('/', function(req, res) {
 
    res.send('passport is working');
 
});
 
 
app.listen(3000, function(err) {
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});
//syncing/ importing models
var models = require("./models");
 
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('database working')
 
}).catch(function(err) {
 
    console.log(err, "problem with database")
 
});

// passport/express session middleware
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());


app.use(passport.session()); 
//passport views
app.set('views', './passport/views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));

//Routes
var authRoute = require('./passport/routes/authroutes.js')(app,passport);

//load passport strategies
require('./config/passport.js')(passport, models.user);