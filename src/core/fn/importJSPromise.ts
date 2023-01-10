export function importJSPromise(p: Promise<any>, callback: (obj: any) => {}) {
	p.then((obj) => {
		if (obj?.hasOwnProperty("default")) {
			callback(obj.default);
		} else {
			callback(obj);
		}
	});
}
