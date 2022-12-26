export const camel2Dash = (value:string):string => {
	return value.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
}