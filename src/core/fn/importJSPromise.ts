export function importJSPromise<T>(p: Promise<T>, callback: (obj: T) => {}) {
	p.then((obj) => {
		// if (obj?.hasOwnProperty("default")) {
		// 	callback(obj["default"]);
		// } else {
		callback(obj);
		// }
	});
}
