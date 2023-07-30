import { bstsConsole as console } from "./console.js";

export const hexToRGB = (hex?: string, alpha?: number) => {
	if (hex) {
		var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
		hex = hex.replace(shorthandRegex, function (_m, r, g, b) {
			return r + r + g + g + b + b;
		});

		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result
			? {
					r: parseInt(result[1] ?? "0", 16),
					g: parseInt(result[2] ?? "0", 16),
					b: parseInt(result[3] ?? "0", 16),
					a: alpha,
			  }
			: {
					r: 0,
					g: 0,
					b: 0,
					a: alpha,
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
			r = parseInt(v[0] ?? "0");
		} else if (v.length === 2) {
			r = parseInt(v[0] ?? "0");
			g = parseInt(v[1] ?? "0");
		} else if (v.length >= 3) {
			r = parseInt(v[0] ?? "0");
			g = parseInt(v[1] ?? "0");
			b = parseInt(v[2] ?? "0");
		}

		return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
	} else {
		return undefined;
	}
};

export const setCSSVar = (variableName: string, value: string, selector?: string) => {
	let root = document.querySelector(selector ? selector : ":root") as HTMLStyleElement;
	if (root) {
		root.style.setProperty(variableName, value);
	} else {
		console.warn(`Cannot find ${selector} to save CSS variable. Use :root instead to set ${variableName}`);
		root = document.querySelector(":root") as HTMLStyleElement;
	}
};

export const getCSSVar = (variableName: string, selector?: string) => {
	let root = document.querySelector(selector ? selector : ":root") as HTMLStyleElement;
	if (root) {
		return getComputedStyle(root).getPropertyValue(variableName);
	} else {
		console.warn(`Cannot find ${selector} to get CSS variable. Use :root instead to get ${variableName}`);
		root = document.querySelector(selector ? selector : ":root") as HTMLStyleElement;

		if (root) {
			return getComputedStyle(root).getPropertyValue(variableName);
		} else {
			return undefined;
		}
	}
};

export const getCSSVarHexColor = (variableName: string, selector?: string) => {
	const value = getCSSVar(variableName, selector);
	if (value) {
		return varToHexColor(value);
	} else {
		return undefined;
	}
};

export const getCSSVarRgbColor = (variableName: string, alpha?: number, selector?: string) => {
	const value = getCSSVar(variableName, selector);
	if (value) {
		return varToRgbColor(value, alpha);
	} else {
		return undefined;
	}
};

export const getCSSVarRgb = (variableName: string, alpha?: number, selector?: string) => {
	const value = getCSSVar(variableName, selector);
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
			return hexToRGB(value, alpha);
		} else {
			let splitedValue = value.replace(/^rgba?\(|\s+|\)$/g, "").split(",");
			return {
				r: parseInt(splitedValue[0] ?? "0"),
				g: parseInt(splitedValue[1] ?? "0"),
				b: parseInt(splitedValue[2] ?? "0"),
				a: alpha ? alpha : splitedValue.length >= 4 ? parseInt(splitedValue[3] ?? "1") : undefined,
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
