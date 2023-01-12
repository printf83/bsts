export function importJSPromise(p: Promise<any>, callback: (obj: any) => {}) {
	p.then((obj) => {
		// if (obj?.hasOwnProperty("default")) {
		if (obj && "default" in obj) {
			callback(obj.default);
		} else {
			callback(obj);
		}
	});
}
