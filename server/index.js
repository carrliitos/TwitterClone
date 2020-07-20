// Dynamic server
const express = require("express");
const cors = require("cors");
const monk = require("monk");
const Filter = require("bad-words");
const rateLimit = require("express-rate-limit");

const app = express();

const db = monk("localhost/tweeder");
const tweeds = db.get("tweeds"); // Collection of tweeds
const filter = new Filter();

app.use(cors());
app.use(express.json()); // JSON body parser

app.get("/", (req, res) => {
	res.json({
		message: "TWEEDER!!!!!"
	});
});

app.get("/tweeds", (req, res) => {
	tweeds
		.find()
		.then(tweeds => {
			res.json(tweeds);
		});
});

function isValidTweed(tweed) {
	return tweed.name && tweed.name.toString().trim() !== "" &&
		tweed.content && tweed.content.toString().trim() !== "";
}

app.use(rateLimit({
	windowMs: 30 * 1000, // 30 seconds
	max: 1 // 1 request
}));

app.post("/tweeds", (req, res) => {
	// Tweed validation -- making sure the tweeds are not empty
	if(isValidTweed(req.body)) {
		const tweed = {
			name: filter.clean(req.body.name.toString()),
			content: filter.clean(req.body.content.toString()),
			created: new Date()
		};

		tweeds
			.insert(tweed)
			.then(createdTweed => {
				res.json(createdTweed);
			});
	}else {
		res.status(422);
		res.json({
			message: "Hey! Name and content are required!"
		});
	}
});

app.listen(5000,() => {
	console.log("Listening on port http://localhost:5000");
});