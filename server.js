var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var passport   = require('passport')
var session    = require('express-session')
var env = require('dotenv').load();
var exphbs = require('express-handlebars')
var db = require('./models')



var port = process.env.PORT || 8181;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

//app.engine("handlebars", exphbs({ defaultLayout: "main" }));


// Import routes and give the server access to them.
var routes = require("./controllers/postcontrollers")(app);




//testing passport
app.get('/', function(req, res) {
 
    res.send('passport is working');
 
});
 
 


// passport/express session middleware
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());


app.use(passport.session()); 
//passport views
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: "main",
    layoutsDir: __dirname+"/views/layouts"
}));
app.set("view engine", ".hbs");
app.set('views',__dirname+"/passport/views")

//Routes
var authRoute = require('./passport/routes/authroutes.js')(app,passport);

//load passport strategies
require('./config/passport.js')(passport, db.user);


 db.sequelize.sync({}).then(function(){
	app.listen(port, function(){
		console.log("App listening on PORT: " + port);
	});
	 });