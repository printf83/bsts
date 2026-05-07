import fs from "node:fs/promises";

async function removeDirectory(directory) {
	try {
		await fs.rm(directory, { recursive: true, force: true });
		console.log(`Deleting directory "${directory}"...`);
	} catch (error) {
		if (error.code !== "ENOENT") {
			throw error;
		}
	}
}

async function main() {
	console.log("Cleaning working tree...");
	await removeDirectory("./build");
	await removeDirectory("./dist");
	console.log("Successfully cleaned working tree!");
}

try {
	await main();
} catch (error) {
	console.error(error);
	process.exit(1);
}
