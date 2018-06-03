const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = porcess.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, () => {
	console.log("Server listening on http://localhost:" + PORT);
});