export const genClassList = (value: string | string[]):string[]|null => {
    let result:string[] = [];
	let i = null;
	if (Array.isArray(value)) {
		i = value;
	} else {
		i = [value];
	}

	//remove null
	i = i.filter(Boolean);

	//make sure every class not have whitespace
	if (i && i.length > 0) {
		for (let x = 0; x < i.length; x++) {
			if (i[x].indexOf(" ") > -1) {
				i[x] = i[x].split(" ");
				i[x] = i[x].filter(Boolean);

				if (i[x] && i[x].length > 0) {
					for (let y = 0; y < i[x].length; y++) {
						result.push(i[x][y]);
					}
				}
			} else {
				result.push(i[x]);
			}
		}
	}

	return result && result.length > 0 ? result : null;
}