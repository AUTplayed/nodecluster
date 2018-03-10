var express = require("express");
var app = express();
var calcprime = require("./calcprime.js");

app.use((req, res, next) => {
	req.start = Date.now();
	next();
});

app.get("/", (req, res) => {
	res.json({
		id: process.env.workerid,
		primes: calcprime(100000),
		duration: Date.now() - req.start
	});
});

app.listen(process.env.port);