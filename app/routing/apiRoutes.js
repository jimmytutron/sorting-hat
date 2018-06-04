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
		hogwartsStudents.push(newStudent);
	});
}

const sortingHat = (student, house) => {
	let totalDifference = 0;
	for (let i=0; i < hogwartHouses.length; i++){
		totalDifference += Math.abs(student[i] - house[i]);
	}
	return totalDifference;
};

const roommate = (studentA, studentB) => {
	let totalDifference = 0;
	for (let i=0; i < hogwartsStudents.length; i++){
		totalDifference += Math.abs(studentA[i] - studentB[i]);
	}
	return totalDifference;
};

