import { bstsConsole as console } from "./console.js";

export const hexToHSL = (hex?: string, alpha?: number) => {
	const val = hexToRGB(hex, alpha);
	if (val) {
		val.r /= 255;
		val.g /= 255;
		val.b /= 255;
		const max = Math.max(val.r, val.g, val.b);
		const min = Math.min(val.r, val.g, val.b);
		let h = 0,
			s = 0,
			l = (max + min) / 2;
		if (max === min) {
			h = s = 0; // achromatic
		} else {
			const d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
				case val.r:
					h = (val.g - val.b) / d + (val.g < val.b ? 6 : 0);
					break;
				case val.g:
					h = (val.b - val.r) / d + 2;
					break;
				case val.b:
					h = (val.r - val.g) / d + 4;
					break;
			}
			h /= 6;
		}
		const HSL: { h: number; s: number; l: number } = { h: h * 360, s: s * 100, l: l * 100 };
		return HSL;
	} else {
		return undefined;
	}
};

export const hslToRGB = (hsl: { h: number; s: number; l: number }, alpha?: number) => {
	hsl.s /= 100;
	hsl.l /= 100;
	const k = (n: number) => (n + hsl.h / 30) % 12;
	const a = hsl.s * Math.min(hsl.l, 1 - hsl.l);
	const f = (n: number) => hsl.l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
	return {
		r: 255 * f(0),
		g: 255 * f(8),
		b: 255 * f(4),
		a: alpha,
	};
};

export const hslToHex = (hsl: { h: number; s: number; l: number }, alpha?: number) => {
	const rgb = hslToRGB(hsl, alpha);

	if (alpha) {
		return RGBToHex(`rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`);
	} else {
		return RGBToHex(`rgb(${rgb.r},${rgb.g},${rgb.b})`);
	}
};

export const hexIsDark = (hex?: string, luma?: number) => {
	luma ??= 135; //155

	let rgb = hexToRGB(hex);
	if (rgb) {
		const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
		return brightness <= luma;
	} else {
		return false;
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
		return "#000000";
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
