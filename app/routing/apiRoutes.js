const hogwartsHouses = require("../data/sortinghat");

module.exports = (app) => {
	app.get("/api/students", (req, res) => {
		res.json(HogwartsHouses);
	});
	app.post("/api/studnets", (req, res) => {
		sortedStudents.push(req.body);
		res.json(true);
	})
}