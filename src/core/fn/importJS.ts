export function importJS(path:string, callback:(obj:any)=>{}) {
    import(path).then((obj) => {
        if (obj?.hasOwnProperty("default")) {
            callback(obj.default);
        }
        else {
            callback(obj);
        }
	});
}