const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.join(process.cwd(), "demo");
const mimeTypes = {
	".html": "text/html",
	".js": "application/javascript",
	".css": "text/css",
	".json": "application/json",
	".svg": "image/svg+xml",
	".ico": "image/x-icon",
};

const server = http.createServer((req, res) => {
	const urlPath = req.url === "/" ? "/demo.html" : req.url.split("?")[0];
	const filePath = path.join(root, decodeURIComponent(urlPath));

	fs.readFile(filePath, (err, data) => {
		if (err) {
			res.writeHead(404, { "Content-Type": "text/plain" });
			return res.end("Not found");
		}

		const ext = path.extname(filePath).toLowerCase();
		res.writeHead(200, { "Content-Type": mimeTypes[ext] || "text/plain" });
		res.end(data);
	});
});

server.listen(8000, () => {
	console.log("Serving demo at http://localhost:8000");
});
