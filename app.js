var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var campgrounds = [
    { name: "Salmon Creek", image: "https://thumbs.dreamstime.com/b/turquoise-rectangular-lake-forest-landscape-front-large-camping-site-remains-sand-mining-126548077.jpg" },
    { name: "Granite Hill", image: "https://images.unsplash.com/photo-1488790881751-9068aa742b9b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGdyb3VuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
]
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});
app.get("/campgrounds", function(req, res) {

    res.render("campgrounds", { campgrounds: campgrounds })
});
app.post("/campgrounds", function(req, res) {
    //get all information from form
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = { name: name, image: image }
    campgrounds.push(newCampground);
    //redirect to campgrounds page
    res.redirect("/campgrounds");
});
app.get("/campgrounds/new", function(req, res) {
    res.render("new")
});
app.listen(3000, function() {
    console.log("YelpCamp Server has started")
});