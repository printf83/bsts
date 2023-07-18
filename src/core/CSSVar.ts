export const hexToRGB = (hex?: string) => {
	if (hex) {
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
					a: undefined,
			  }
			: {
					r: 0,
					g: 0,
					b: 0,
					a: undefined,
			  };
	} else {
		return undefined;
	}
};

export const RGBToHex = (rgb?: string) => {
	if (rgb) {
		let v = rgb.replace(/^rgba?\(|\s+|\)$/g, "").split(",");
		let r: number = 0;
		let g: number = 0;
		let b: number = 0;

		if (v.length === 1) {
			r = parseInt(v[0]);
		} else if (v.length === 2) {
			r = parseInt(v[0]);
			g = parseInt(v[1]);
		} else if (v.length >= 3) {
			r = parseInt(v[0]);
			g = parseInt(v[1]);
			b = parseInt(v[2]);
		}

		return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
	} else {
		return undefined;
	}
};

export const setCSSVar = (variableName: string, value: string) => {
	let root = document.querySelector(":root") as HTMLStyleElement;
	if (root) {
		root.style.setProperty(variableName, value);
	}
};

export const getCSSVar = (variableName: string) => {
	let root = document.querySelector(":root") as HTMLStyleElement;
	if (root) {
		return getComputedStyle(root).getPropertyValue(variableName);
	} else {
		return undefined;
	}
};

export const getCSSVarHexColor = (variableName: string) => {
	const value = getCSSVar(variableName);
	if (value) {
		return varToHexColor(value);
	} else {
		return undefined;
	}
};

export const getCSSVarRgbColor = (variableName: string, alpha?: number) => {
	const value = getCSSVar(variableName);
	if (value) {
		return varToRgbColor(value, alpha);
	} else {
		return undefined;
	}
};

export const getCSSVarRgb = (variableName: string, alpha?: number) => {
	const value = getCSSVar(variableName);
	if (value) {
		return varToRgb(value, alpha);
	} else {
		return undefined;
	}
};

export const varToHexColor = (value?: string) => {
	if (value) {
		if (value.startsWith("#")) {
			return value;
		} else {
			return RGBToHex(value);
		}
	} else {
		return undefined;
	}
};

export const varToRgb = (value?: string, alpha?: number) => {
	if (value) {
		if (value.startsWith("#")) {
			return hexToRGB(value);
		} else {
			let v = value.replace(/^rgba?\(|\s+|\)$/g, "").split(",");
			return {
				r: parseInt(v[0]),
				g: parseInt(v[1]),
				b: parseInt(v[2]),
				a: alpha ? alpha : v.length >= 4 ? parseInt(v[3]) : undefined,
			};
		}
	} else {
		return undefined;
	}
};

export const varToRgbColor = (value: string, alpha?: number) => {
	return rgbToColor(varToRgb(value, alpha));
};

export const rgbToColor = (rgba?: { r: number; g: number; b: number; a?: number }) => {
	if (rgba) {
		if (rgba.a) {
			return `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`;
		} else {
			return `rgb(${rgba.r},${rgba.g},${rgba.b})`;
		}
	} else {
		return undefined;
	}
};
