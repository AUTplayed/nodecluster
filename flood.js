var http = require("http");

setInterval(() => {
	request()
}, 10);

function request(callback) {
	http.get("http://localhost:8080", (res) => {
		var body = "";
		res.on("data", (chunk) => {
			body += chunk;
		});
		res.on("end", () => {
			body = JSON.parse(body);
			console.log(body.id);
			if (callback) callback();
		});
	});
}