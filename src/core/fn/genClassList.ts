export const genClassList = (value: string | string[]): string[] => {
	let result: string[] = [];
	let i: string[] = [];

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
			let j = i[x];
			let h: string[] = [];

			if (j.indexOf(" ") > -1) {
				h = j.split(" ");
				h = h.filter(Boolean);

				if (h && h.length > 0) {
					for (let y = 0; y < h.length; y++) {
						result.push(h[y]);
					}
				}
			} else {
				result.push(j);
			}
		}
	}

	return result && result.length > 0 ? result : [];
};
