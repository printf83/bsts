export const isHTML = (str:string):boolean => {
	return /<\/?[a-z][\s\S]*>/i.test(str) || /\&\#\x\S{4}\;/i.test(str) || /\&\S+\;/i.test(str);
}