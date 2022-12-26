export const dash2Camel = (value:string):string=> {
	return value.replace(/-([a-z])/gi, function (_$0, $1) {
		return $1.toUpperCase();
	});
}