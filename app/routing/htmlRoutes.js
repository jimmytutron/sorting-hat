const path = require("path");

module.exports = (app) => {

    app.get("/sorting", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/sorting.html"));
    });

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

}