var path = require("path"); //used so you don't have to specify files by name straight from the root of your computer

module.exports = function(app){

    app.get("/home", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    app.get("/api/friends", function(req, res){
        console.log(res)
    })

    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

}