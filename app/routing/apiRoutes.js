const hogwartsHouses = require("../data/houses.js");
const hogwartsStudents = require("../data/students.js");

module.exports = (app) => {
	app.get("/api/houses", (req, res) => {
		res.json(hogwartsHouses);
	});
	app.get("/api/students", (req, res) => {
		res.json(hogwartsStudents);
	});
	app.post("/api/students", (req, res) => {

		let newStudent = req.body;
		console.log(newStudent);

		let houseCompatibility = 99;
		let matchedHouse = {};
		let totalDifference = 0;

		hogwartsStudents.push(newStudent);
		res.json(sortingHat(newStudent, hogwartsHouses));
		// console.log(matchedHouse);
	});
}





sortingHat = (student, house) => {
		for (let i=0; i<house.length; i++){
			totalDifference = 0;
			for (let j=0; j<house[i].scores.length; j++){
				totalDifference += Math.abs(student.scores[j] - house[i].scores[j]);
			}
			if (i===0){
				matchedHouse = house[i];
				houseCompatibility = totalDifference;
			} else if (totalDifference < houseCompatibility){
				matchedHouse = house[i];
				houseCompatibility = totalDifference;
			}
		}
		return(matchedHouse);
}


