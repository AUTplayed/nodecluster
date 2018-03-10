var cluster = require("cluster");
var forksize = require("os").cpus().length;

if (cluster.isMaster) {
	cluster.setupMaster({ exec: "worker.js" });
	console.log("started master - forking slaves");
	for (let i = 0; i < forksize; i++) {
		spawn(i);
	}
}

function spawn(id) {
	var worker = cluster.fork({ workerid: id, port: 8080 });
	console.log(`worker ${id} started`);
	worker.on("exit", (code) => {
		console.log(`worker ${id} died with code ${code}`);
		spawn(id);
	});
}