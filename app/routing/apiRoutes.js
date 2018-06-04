const hogwartsHouses = require("../data/houses");
const hogwartsStudents = require("../data/students");

module.exports = (app) => {
	app.get("/api/houses", (req, res) => {
		res.json(hogwartsHouses);
	});
	app.get("/api/students", (req, res) => {
		res.json(hogwartsStudents);
	});
	app.post("/api/students", (req, res) => {

		let newStudent = req.body;
		let newStudentSort = newStudent.scores;

		let sortScore = 99;
		let matchedHouse = {};

		for (let i=0; i < hogwartHouses.length; i++){

		let totalDifference = 0;
		for (let j=0; j < hogwartHouses[j].score.length; j++){
		totalDifference += Math.abs(newStudentSort[j] - hogwartHouses.scores[j]);
		}

		sortingHat(newStudentSort, hogwartHouses.scores)

		if(totalDifference < sortScore){
			matchedHouse = hogwartHouses[i];
			sortScore = totalDifference;
		}
	}

		hogwartsStudents.push(newStudent);
		res.json(matchedHouse);
	});
}


const sortingHat = (userScoreData, serverScoreData) => {
	
		for (let i = 0; i < serverData.length; i++){
			totalDifference += Math.abs(userScoreData[i] - serverScoreData[i]);
		}
		return totalDifference;
}


