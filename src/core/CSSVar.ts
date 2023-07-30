import { bstsConsole as console } from "./console.js";

export const hexToHSL = (hex?: string, alpha?: number) => {
	const rgb = hexToRGB(hex, alpha);
	if (rgb) {
		(rgb.r /= 255), (rgb.g /= 255), (rgb.b /= 255);
		var max = Math.max(rgb.r, rgb.g, rgb.b),
			min = Math.min(rgb.r, rgb.g, rgb.b);
		var h,
			s,
			l = (max + min) / 2;
		if (max == min) {
			h = s = 0; // achromatic
		} else {
			var d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
				case rgb.r:
					h = (rgb.g - rgb.b) / d + (rgb.g < rgb.b ? 6 : 0);
					break;
				case rgb.g:
					h = (rgb.b - rgb.r) / d + 2;
					break;
				case rgb.b:
					h = (rgb.r - rgb.g) / d + 4;
					break;
			}
			h! /= 6;
		}
	} else {
		return undefined;
	}
};

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

// const hue2rgb = (p: number, q: number, t: number) => {
// 	if (t < 0) t += 1;
// 	if (t > 1) t -= 1;
// 	if (t < 1 / 6) return p + (q - p) * 6 * t;
// 	if (t < 1 / 2) return q;
// 	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
// 	return p;
// };

// const toHex = (x: number) => {
// 	const hex = Math.round(x * 255).toString(16);
// 	return hex.length === 1 ? "0" + hex : hex;
// };

// export const HSLToHex = (hsl?: string) => {
// 	if (hsl) {
// 		let v = hsl.replace(/^hsla?\(|\s+|\)$/g, "").split(",");
// 		let h: number = 0;
// 		let s: number = 0;
// 		let l: number = 0;

// 		h /= 360;
// 		s /= 100;
// 		l /= 100;
// 		let r, g, b;
// 		if (s === 0) {
// 			r = g = b = l; // achromatic
// 		} else {
// 			const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
// 			const p = 2 * l - q;
// 			r = hue2rgb(p, q, h + 1 / 3);
// 			g = hue2rgb(p, q, h);
// 			b = hue2rgb(p, q, h - 1 / 3);
// 		}

// 		return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
// 	} else {
// 		return undefined;
// 	}
// };

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
