const hexToRGB = (hex: string) => {
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function (_m, r, g, b) {
		return r + r + g + g + b + b;
	});

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: null;
};

const RGBToHex = (r: number, g: number, b: number) => {
	return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
};

export const setCSSVar = (variableName: string, value: string) => {
	let root = document.querySelector(":root") as HTMLStyleElement;
	if (root) {
		if (variableName.endsWith("-rgb") && value.startsWith("#")) {
			let v = hexToRGB(value);
			if (v) {
				root.style.setProperty(variableName, `${v.r},${v.g},${v.b}`);
			}
		} else {
			root.style.setProperty(variableName, value);
		}
	}
};

export const getCSSVar = (variableName: string) => {
	let root = document.querySelector(":root") as HTMLStyleElement;
	if (root) {
		let value = getComputedStyle(root).getPropertyValue(variableName);
		if (value.startsWith("#")) {
			return value;
		} else {
			let v = value.replace(/^rgba?\(|\s+|\)$/g, "").split(",");
			let result = RGBToHex(parseInt(v[0]), parseInt(v[1]), parseInt(v[2]));
			return result;
		}
	} else {
		return "#ffffff";
	}
};
