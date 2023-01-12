export function importJS(path: string, callback: (obj: any) => {}) {
	import(path).then((obj) => {
		// if (obj?.hasOwnProperty("default")) {
		if (obj && "default" in obj) {
			callback(obj.default);
		} else {
			callback(obj);
		}
	});
}
