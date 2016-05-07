// This script uses the express library
var express = require('express');
var app = express();

// Tell node where to find the view pages
app.set('views', __dirname + '/views');

// Tell node to use the ejs library to handle the view
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.engine('html', require('ejs').renderFile);

// Set a default page (Optional, but goood to have)
app.get('/', function (req, res) {
    res.render('index.html')
});

// Start the web server
var server = app.listen(3000, function () {
    console.log("Express is running on port 3000");
});
