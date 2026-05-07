import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const mimeTypes = {
	".html": "text/html",
	".js": "application/javascript",
	".mjs": "application/javascript",
	".cjs": "application/javascript",
	".css": "text/css",
	".json": "application/json",
	".svg": "image/svg+xml",
	".ico": "image/x-icon",
};

const server = http.createServer(async (req, res) => {
	const urlPath = req.url === "/" ? "/demo/index.html" : req.url.split("?")[0];
	let decodedPath;

	try {
		decodedPath = decodeURIComponent(urlPath);
	} catch {
		res.writeHead(400, { "Content-Type": "text/plain" });
		return res.end("Bad request");
	}

	const resolvedPath = path.resolve(root, `.${decodedPath}`);
	const relativePath = path.relative(root, resolvedPath);
	if (
		relativePath.startsWith("..") ||
		path.isAbsolute(relativePath) ||
		decodedPath.includes("\0")
	) {
		res.writeHead(403, { "Content-Type": "text/plain" });
		return res.end("Forbidden");
	}

	try {
		const data = await fs.readFile(resolvedPath);
		const ext = path.extname(resolvedPath).toLowerCase();
		res.writeHead(200, { "Content-Type": mimeTypes[ext] || "text/plain" });
		res.end(data);
	} catch {
		res.writeHead(404, { "Content-Type": "text/plain" });
		res.end("Not found");
	}
});

server.listen(8000, () => {
	console.log("Serving demo at http://localhost:8000");
});
