import { style } from "../html/style.js";
import { hexIsDark, hexToHSL, hexToRGB, hslToHex } from "./CSSVar.js";
import { appendChild, replaceWith } from "./builder.js";

const getHSLDistance = (fromHex: string, toHex: string) => {
	const fromHSL = hexToHSL(fromHex);
	const toHSL = hexToHSL(toHex);

	if (fromHSL && toHSL) {
		return {
			h: fromHSL.h - toHSL.h,
			s: fromHSL.s - toHSL.s,
			l: fromHSL.l - toHSL.l,
		};
	} else {
		return {
			h: 0,
			s: 0,
			l: 0,
		};
	}
};

const addDistanceHex = (hex: string, distanceHSL: { h: number; s: number; l: number }) => {
	const HSL = hexToHSL(hex);

	if (HSL) {
		const calcLoop = (val: number, max: number) => {
			if (val > max) {
				val = val - max;
			}

			if (val < 0) {
				val = max + val;
			}

			return val;
		};

		const calcBounce = (val: number, max: number) => {
			if (val > max) {
				val = max - (val - max);
			}

			if (val < 0) {
				val = -val;
			}

			return val;
		};

		return {
			h: calcLoop(HSL.h - distanceHSL.h, 360),
			s: calcBounce(HSL.s - distanceHSL.s, 100),
			l: calcBounce(HSL.l - distanceHSL.l, 100),
		};
	} else {
		return {
			h: 0,
			s: 0,
			l: 0,
		};
	}
};

export const calcHex = (mainHex: string, refHex: string, hex: string) => {
	return hslToHex(addDistanceHex(hex, getHSLDistance(mainHex, refHex)));
};

const calcFontHex = (hex: string, light: string = "#fff", dark: string = "#000") => {
	return hexIsDark(hex) ? light : dark;
};

const getRGBString = (hex: string) => {
	const rgb = hexToRGB(hex);
	return `${rgb?.r},${rgb?.g},${rgb?.b}`;
};

export const dark = (hex: string, light: string = "#fff", dark: string = "#000") => {
	//:root, [data-bs-theme=light]
	const baseColor = "#212529"; //--bs-dark
	const rgb = getRGBString(hex); //--bs-dark-rgb

	//.btn-dark
	const btnColor = calcFontHex(hex, light, dark); //--bs-btn-color
	const btnBorder = calcHex(baseColor, "#212529", hex); //--bs-btn-border-color
	const btnHoverBg = calcHex(baseColor, "#424649", hex); //--bs-btn-hover-bg
	const btnHoverColor = calcFontHex(btnHoverBg, light, dark); //--bs-btn-hover-color
	const btnHoverBorder = calcHex(baseColor, "#373b3e", hex); //--bs-btn-hover-border-color
	const btnActiveBg = calcHex(baseColor, "#4d5154", hex); //--bs-btn-active-bg
	const btnActiveColor = calcFontHex(btnActiveBg, light, dark); //--bs-btn-active-color
	const btnActiveBorder = calcHex(baseColor, "#373b3e", hex); //--bs-btn-active-border-color
	const btnDisabledBg = calcHex(baseColor, "#212529", hex); //--bs-btn-disabled-bg
	const btnDisabledColor = calcFontHex(btnDisabledBg, light, dark); //--bs-btn-disabled-color
	const btnDisabledBorder = calcHex(baseColor, "#212529", hex); //--bs-btn-disabled-border-color

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = calcHex(baseColor, "#495057", hex); //--bs-dark-text-emphasis
	const bsBgSubtle = calcHex(baseColor, "#ced4da", hex); //--bs-dark-bg-subtle
	const bsBorderSubtle = calcHex(baseColor, "#adb5bd", hex); //--bs-dark-border-subtle

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = calcHex(baseColor, "#f8f9fa", hex); //--bs-dark-text-emphasis
	const bsDarkBgSubtle = calcHex(baseColor, "#1a1d20", hex); //--bs-dark-bg-subtle
	const bsDarkBorderSubtle = calcHex(baseColor, "#343a40", hex); //--bs-dark-border-subtle

	//.table-dark
	const bsTableBg = calcHex(baseColor, "#212529", hex); //--bs-table-bg
	const bsTableColor = calcFontHex(bsTableBg, light, dark); //--bs-table-color
	const bsTableBorderColor = calcHex(baseColor, "#373b3e", hex); //--bs-table-border-color
	const bsTableStripedBg = calcHex(baseColor, "#2c3034", hex); //--bs-table-striped-bg
	const bsTableStripedColor = calcFontHex(bsTableStripedBg, light, dark); //--bs-table-striped-color
	const bsTableActiveBg = calcHex(baseColor, "#373b3e", hex); //--bs-table-active-bg
	const bsTableActiveColor = calcFontHex(bsTableActiveBg, light, dark); //--bs-table-active-color
	const bsTableHoverBg = calcHex(baseColor, "#323539", hex); //--bs-table-hover-bg
	const bsTableHoverColor = calcFontHex(bsTableHoverBg, light, dark); //--bs-table-hover-color

	return `
		:root, [data-bs-theme='light'] {
			--bs-dark: ${hex};
			--bs-dark-rgb: ${rgb};

			--bs-dark-text-emphasis: ${bsTextEmphasis};
			--bs-dark-bg-subtle: ${bsBgSubtle};
			--bs-dark-border-subtle: ${bsBorderSubtle};
		}

		[data-bs-theme='dark'] {
			--bs-dark-text-emphasis: ${bsDarkTextEmphasis};
			--bs-dark-bg-subtle: ${bsDarkBgSubtle};
			--bs-dark-border-subtle: ${bsDarkBorderSubtle};
		}

		.table-dark {
			--bs-table-bg: ${bsTableBg};
			--bs-table-color: ${bsTableColor};
			--bs-table-border-color: ${bsTableBorderColor};
			--bs-table-striped-bg: ${bsTableStripedBg};
			--bs-table-striped-color: ${bsTableStripedColor};
			--bs-table-active-bg: ${bsTableActiveBg};
			--bs-table-active-color: ${bsTableActiveColor};
			--bs-table-hover-bg: ${bsTableHoverBg};
			--bs-table-hover-color: ${bsTableHoverColor};
		}
		
		.text-bg-dark {
			color: ${btnColor} !important;
			background-color: rgba(${rgb},var(--bs-bg-opacity,1)) !important;
		}

		.btn-dark {
			--bs-btn-color: ${btnColor};
			--bs-btn-bg: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${btnDisabledColor};
			--bs-btn-disabled-bg: ${btnDisabledBg};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

		.btn-outline-dark {
			--bs-btn-color: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${hex};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

	`;
};

export const light = (hex: string, light: string = "#fff", dark: string = "#000") => {
	//:root, [data-bs-theme=light]
	const baseColor = "#f8f9fa"; //--bs-light
	const rgb = getRGBString(hex); //--bs-light-rgb

	//.btn-light
	const btnColor = calcFontHex(hex, light, dark); //--bs-btn-color
	const btnBorder = calcHex(baseColor, "#f8f9fa", hex); //--bs-btn-border-color
	const btnHoverBg = calcHex(baseColor, "#d3d4d5", hex); //--bs-btn-hover-bg
	const btnHoverColor = calcFontHex(btnHoverBg, light, dark); //--bs-btn-hover-color
	const btnHoverBorder = calcHex(baseColor, "#c6c7c8", hex); //--bs-btn-hover-border-color
	const btnActiveBg = calcHex(baseColor, "#c6c7c8", hex); //--bs-btn-active-bg
	const btnActiveColor = calcFontHex(btnActiveBg, light, dark); //--bs-btn-active-color
	const btnActiveBorder = calcHex(baseColor, "#babbbc", hex); //--bs-btn-active-border-color
	const btnDisabledBg = calcHex(baseColor, "#f8f9fa", hex); //--bs-btn-disabled-bg
	const btnDisabledColor = calcFontHex(btnDisabledBg, light, dark); //--bs-btn-disabled-color
	const btnDisabledBorder = calcHex(baseColor, "#f8f9fa", hex); //--bs-btn-disabled-border-color

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = calcHex(baseColor, "#495057", hex); //--bs-light-text-emphasis
	const bsBgSubtle = calcHex(baseColor, "#fcfcfd", hex); //--bs-light-bg-subtle
	const bsBorderSubtle = calcHex(baseColor, "#e9ecef", hex); //--bs-light-border-subtle

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = calcHex(baseColor, "#f8f9fa", hex); //--bs-light-text-emphasis
	const bsDarkBgSubtle = calcHex(baseColor, "#343a40", hex); //--bs-light-bg-subtle
	const bsDarkBorderSubtle = calcHex(baseColor, "#495057", hex); //--bs-light-border-subtle

	//.table-light
	const bsTableBg = calcHex(baseColor, "#f8f9fa", hex); //--bs-table-bg
	const bsTableColor = calcFontHex(bsTableBg, light, dark); //--bs-table-color
	const bsTableBorderColor = calcHex(baseColor, "#dfe0e1", hex); //--bs-table-border-color
	const bsTableStripedBg = calcHex(baseColor, "#ecedee", hex); //--bs-table-striped-bg
	const bsTableStripedColor = calcFontHex(bsTableStripedBg, light, dark); //--bs-table-striped-color
	const bsTableActiveBg = calcHex(baseColor, "#dfe0e1", hex); //--bs-table-active-bg
	const bsTableActiveColor = calcFontHex(bsTableActiveBg, light, dark); //--bs-table-active-color
	const bsTableHoverBg = calcHex(baseColor, "#e5e6e7", hex); //--bs-table-hover-bg
	const bsTableHoverColor = calcFontHex(bsTableHoverBg, light, dark); //--bs-table-hover-color

	return `	
		:root, [data-bs-theme='light'] {
			--bs-light: ${hex};
			--bs-light-rgb: ${rgb};

			--bs-light-text-emphasis: ${bsTextEmphasis};
			--bs-light-bg-subtle: ${bsBgSubtle};
			--bs-light-border-subtle: ${bsBorderSubtle};
		}

		[data-bs-theme='dark'] {
			--bs-light-text-emphasis: ${bsDarkTextEmphasis};
			--bs-light-bg-subtle: ${bsDarkBgSubtle};
			--bs-light-border-subtle: ${bsDarkBorderSubtle};
		}

		.table-light {
			--bs-table-bg: ${bsTableBg};
			--bs-table-color: ${bsTableColor};
			--bs-table-border-color: ${bsTableBorderColor};
			--bs-table-striped-bg: ${bsTableStripedBg};
			--bs-table-striped-color: ${bsTableStripedColor};
			--bs-table-active-bg: ${bsTableActiveBg};
			--bs-table-active-color: ${bsTableActiveColor};
			--bs-table-hover-bg: ${bsTableHoverBg};
			--bs-table-hover-color: ${bsTableHoverColor};
		}
		
		.text-bg-light {
			color: ${btnColor} !important;
			background-color: rgba(${rgb},var(--bs-bg-opacity,1)) !important;
		}

		.btn-light {
			--bs-btn-color: ${btnColor};
			--bs-btn-bg: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${btnDisabledColor};
			--bs-btn-disabled-bg: ${btnDisabledBg};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

		.btn-outline-light {
			--bs-btn-color: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${hex};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

	`;
};

export const secondary = (hex: string, light: string = "#fff", dark: string = "#000") => {
	//:root, [data-bs-theme=light]
	const baseColor = "#6c757d"; //--bs-secondary
	const rgb = getRGBString(hex); //--bs-secondary-rgb

	//.btn-secondary
	const btnColor = calcFontHex(hex, light, dark); //--bs-btn-color
	const btnBorder = calcHex(baseColor, "#6c757d", hex); //--bs-btn-border-color
	const btnHoverBg = calcHex(baseColor, "#5c636a", hex); //--bs-btn-hover-bg
	const btnHoverColor = calcFontHex(btnHoverBg, light, dark); //--bs-btn-hover-color
	const btnHoverBorder = calcHex(baseColor, "#565e64", hex); //--bs-btn-hover-border-color
	const btnActiveBg = calcHex(baseColor, "#565e64", hex); //--bs-btn-active-bg
	const btnActiveColor = calcFontHex(btnActiveBg, light, dark); //--bs-btn-active-color
	const btnActiveBorder = calcHex(baseColor, "#51585e", hex); //--bs-btn-active-border-color
	const btnDisabledBg = calcHex(baseColor, "#6c757d", hex); //--bs-btn-disabled-bg
	const btnDisabledColor = calcFontHex(btnDisabledBg, light, dark); //--bs-btn-disabled-color
	const btnDisabledBorder = calcHex(baseColor, "#6c757d", hex); //--bs-btn-disabled-border-color

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = calcHex(baseColor, "#2b2f32", hex); //--bs-secondary-text-emphasis
	const bsBgSubtle = calcHex(baseColor, "#e2e3e5", hex); //--bs-secondary-bg-subtle
	const bsBorderSubtle = calcHex(baseColor, "#c4c8cb", hex); //--bs-secondary-border-subtle

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = calcHex(baseColor, "#a7acb1", hex); //--bs-secondary-text-emphasis
	const bsDarkBgSubtle = calcHex(baseColor, "#161719", hex); //--bs-secondary-bg-subtle
	const bsDarkBorderSubtle = calcHex(baseColor, "#41464b", hex); //--bs-secondary-border-subtle

	//.table-secondary
	const bsTableBg = calcHex(baseColor, "#e2e3e5", hex); //--bs-table-bg
	const bsTableColor = calcFontHex(bsTableBg, light, dark); //--bs-table-color
	const bsTableBorderColor = calcHex(baseColor, "#cbccce", hex); //--bs-table-border-color
	const bsTableStripedBg = calcHex(baseColor, "#d7d8da", hex); //--bs-table-striped-bg
	const bsTableStripedColor = calcFontHex(bsTableStripedBg, light, dark); //--bs-table-striped-color
	const bsTableActiveBg = calcHex(baseColor, "#cbccce", hex); //--bs-table-active-bg
	const bsTableActiveColor = calcFontHex(bsTableActiveBg, light, dark); //--bs-table-active-color
	const bsTableHoverBg = calcHex(baseColor, "#d1d2d4", hex); //--bs-table-hover-bg
	const bsTableHoverColor = calcFontHex(bsTableHoverBg, light, dark); //--bs-table-hover-color

	return `
		

		:root, [data-bs-theme='light'] {
			--bs-secondary: ${hex};
			--bs-secondary-rgb: ${rgb};

			--bs-secondary-text-emphasis: ${bsTextEmphasis};
			--bs-secondary-bg-subtle: ${bsBgSubtle};
			--bs-secondary-border-subtle: ${bsBorderSubtle};
		}

		[data-bs-theme='dark'] {
			--bs-secondary-text-emphasis: ${bsDarkTextEmphasis};
			--bs-secondary-bg-subtle: ${bsDarkBgSubtle};
			--bs-secondary-border-subtle: ${bsDarkBorderSubtle};
		}

		.table-secondary {
			--bs-table-bg: ${bsTableBg};
			--bs-table-color: ${bsTableColor};
			--bs-table-border-color: ${bsTableBorderColor};
			--bs-table-striped-bg: ${bsTableStripedBg};
			--bs-table-striped-color: ${bsTableStripedColor};
			--bs-table-active-bg: ${bsTableActiveBg};
			--bs-table-active-color: ${bsTableActiveColor};
			--bs-table-hover-bg: ${bsTableHoverBg};
			--bs-table-hover-color: ${bsTableHoverColor};
		}
		
		.text-bg-secondary {
			color: ${btnColor} !important;
			background-color: rgba(${rgb},var(--bs-bg-opacity,1)) !important;
		}

		.btn-secondary {
			--bs-btn-color: ${btnColor};
			--bs-btn-bg: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${btnDisabledColor};
			--bs-btn-disabled-bg: ${btnDisabledBg};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

		.btn-outline-secondary {
			--bs-btn-color: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${hex};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}
	`;
};

export const warning = (hex: string, light: string = "#fff", dark: string = "#000") => {
	//:root, [data-bs-theme=light]
	const baseColor = "#ffc107"; //--bs-warning
	const rgb = getRGBString(hex); //--bs-warning-rgb

	//.btn-warning
	const btnColor = calcFontHex(hex, light, dark); //--bs-btn-color
	const btnBorder = calcHex(baseColor, "#ffc107", hex); //--bs-btn-border-color
	const btnHoverBg = calcHex(baseColor, "#ffca2c", hex); //--bs-btn-hover-bg
	const btnHoverColor = calcFontHex(btnHoverBg, light, dark); //--bs-btn-hover-color
	const btnHoverBorder = calcHex(baseColor, "#ffc720", hex); //--bs-btn-hover-border-color
	const btnActiveBg = calcHex(baseColor, "#ffcd39", hex); //--bs-btn-active-bg
	const btnActiveColor = calcFontHex(btnActiveBg, light, dark); //--bs-btn-active-color
	const btnActiveBorder = calcHex(baseColor, "#ffc720", hex); //--bs-btn-active-border-color
	const btnDisabledBg = calcHex(baseColor, "#ffc107", hex); //--bs-btn-disabled-bg
	const btnDisabledColor = calcFontHex(btnDisabledBg, light, dark); //--bs-btn-disabled-color
	const btnDisabledBorder = calcHex(baseColor, "#ffc107", hex); //--bs-btn-disabled-border-color

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = calcHex(baseColor, "#664d03", hex); //--bs-warning-text-emphasis
	const bsBgSubtle = calcHex(baseColor, "#fff3cd", hex); //--bs-warning-bg-subtle
	const bsBorderSubtle = calcHex(baseColor, "#ffe69c", hex); //--bs-warning-border-subtle
	const bsHighlightBg = calcHex(baseColor, "#fff3cd", hex); //--bs-highlight-bg

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = calcHex(baseColor, "#ffda6a", hex); //--bs-warning-text-emphasis
	const bsDarkBgSubtle = calcHex(baseColor, "#332701", hex); //--bs-warning-bg-subtle
	const bsDarkBorderSubtle = calcHex(baseColor, "#997404", hex); //--bs-warning-border-subtle
	const bsDarkHighlightBg = calcHex(baseColor, "#ffe69c", hex); //--bs-highlight-bg

	//.table-warning
	const bsTableBg = calcHex(baseColor, "#fff3cd", hex); //--bs-table-bg
	const bsTableColor = calcFontHex(bsTableBg, light, dark); //--bs-table-color
	const bsTableBorderColor = calcHex(baseColor, "#e6dbb9", hex); //--bs-table-border-color
	const bsTableStripedBg = calcHex(baseColor, "#f2e7c3", hex); //--bs-table-striped-bg
	const bsTableStripedColor = calcFontHex(bsTableStripedBg, light, dark); //--bs-table-striped-color
	const bsTableActiveBg = calcHex(baseColor, "#e6dbb9", hex); //--bs-table-active-bg
	const bsTableActiveColor = calcFontHex(bsTableActiveBg, light, dark); //--bs-table-active-color
	const bsTableHoverBg = calcHex(baseColor, "#ece1be", hex); //--bs-table-hover-bg
	const bsTableHoverColor = calcFontHex(bsTableHoverBg, light, dark); //--bs-table-hover-color

	return `
		

		:root, [data-bs-theme='light'] {
			--bs-warning: ${hex};
			--bs-warning-rgb: ${rgb};

			--bs-warning-text-emphasis: ${bsTextEmphasis};
			--bs-warning-bg-subtle: ${bsBgSubtle};
			--bs-warning-border-subtle: ${bsBorderSubtle};

			--bs-highlight-bg: ${bsHighlightBg};
		}

		[data-bs-theme='dark'] {
			--bs-warning-text-emphasis: ${bsDarkTextEmphasis};
			--bs-warning-bg-subtle: ${bsDarkBgSubtle};
			--bs-warning-border-subtle: ${bsDarkBorderSubtle};

			--bs-highlight-bg: ${bsDarkHighlightBg};
		}

		.table-warning {
			--bs-table-bg: ${bsTableBg};
			--bs-table-color: ${bsTableColor};
			--bs-table-border-color: ${bsTableBorderColor};
			--bs-table-striped-bg: ${bsTableStripedBg};
			--bs-table-striped-color: ${bsTableStripedColor};
			--bs-table-active-bg: ${bsTableActiveBg};
			--bs-table-active-color: ${bsTableActiveColor};
			--bs-table-hover-bg: ${bsTableHoverBg};
			--bs-table-hover-color: ${bsTableHoverColor};
		}
		
		.text-bg-warning {
			color: ${btnColor} !important;
			background-color: rgba(${rgb},var(--bs-bg-opacity,1)) !important;
		}

		.btn-warning {
			--bs-btn-color: ${btnColor};
			--bs-btn-bg: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${btnDisabledColor};
			--bs-btn-disabled-bg: ${btnDisabledBg};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

		.btn-outline-warning {
			--bs-btn-color: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${hex};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

		
	`;
};

export const info = (hex: string, light: string = "#fff", dark: string = "#000") => {
	//:root, [data-bs-theme=light]
	const baseColor = "#0dcaf0"; //--bs-info
	const rgb = getRGBString(hex); //--bs-info-rgb

	//.btn-info
	const btnColor = calcFontHex(hex, light, dark); //--bs-btn-color
	const btnBorder = calcHex(baseColor, "#0dcaf0", hex); //--bs-btn-border-color
	const btnHoverBg = calcHex(baseColor, "#31d2f2", hex); //--bs-btn-hover-bg
	const btnHoverColor = calcFontHex(btnHoverBg, light, dark); //--bs-btn-hover-color
	const btnHoverBorder = calcHex(baseColor, "#25cff2", hex); //--bs-btn-hover-border-color
	const btnActiveBg = calcHex(baseColor, "#3dd5f3", hex); //--bs-btn-active-bg
	const btnActiveColor = calcFontHex(btnActiveBg, light, dark); //--bs-btn-active-color
	const btnActiveBorder = calcHex(baseColor, "#25cff2", hex); //--bs-btn-active-border-color
	const btnDisabledBg = calcHex(baseColor, "#0dcaf0", hex); //--bs-btn-disabled-bg
	const btnDisabledColor = calcFontHex(btnDisabledBg, light, dark); //--bs-btn-disabled-color
	const btnDisabledBorder = calcHex(baseColor, "#0dcaf0", hex); //--bs-btn-disabled-border-color

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = calcHex(baseColor, "#58151c", hex); //--bs-info-text-emphasis
	const bsBgSubtle = calcHex(baseColor, "#cff4fc", hex); //--bs-info-bg-subtle
	const bsBorderSubtle = calcHex(baseColor, "#9eeaf9", hex); //--bs-info-border-subtle

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = calcHex(baseColor, "#6edff6", hex); //--bs-info-text-emphasis
	const bsDarkBgSubtle = calcHex(baseColor, "#032830", hex); //--bs-info-bg-subtle
	const bsDarkBorderSubtle = calcHex(baseColor, "#087990", hex); //--bs-info-border-subtle

	//.table-info
	const bsTableBg = calcHex(baseColor, "#cff4fc", hex); //--bs-table-bg
	const bsTableColor = calcFontHex(bsTableBg, light, dark); //--bs-table-color
	const bsTableBorderColor = calcHex(baseColor, "#badce3", hex); //--bs-table-border-color
	const bsTableStripedBg = calcHex(baseColor, "#c5e8ef", hex); //--bs-table-striped-bg
	const bsTableStripedColor = calcFontHex(bsTableStripedBg, light, dark); //--bs-table-striped-color
	const bsTableActiveBg = calcHex(baseColor, "#badce3", hex); //--bs-table-active-bg
	const bsTableActiveColor = calcFontHex(bsTableActiveBg, light, dark); //--bs-table-active-color
	const bsTableHoverBg = calcHex(baseColor, "#bfe2e9", hex); //--bs-table-hover-bg
	const bsTableHoverColor = calcFontHex(bsTableHoverBg, light, dark); //--bs-table-hover-color

	return `
		:root, [data-bs-theme='light'] {
			--bs-info: ${hex};
			--bs-info-rgb: ${rgb};

			--bs-info-text-emphasis: ${bsTextEmphasis};
			--bs-info-bg-subtle: ${bsBgSubtle};
			--bs-info-border-subtle: ${bsBorderSubtle};
		}

		[data-bs-theme='dark'] {
			--bs-info-text-emphasis: ${bsDarkTextEmphasis};
			--bs-info-bg-subtle: ${bsDarkBgSubtle};
			--bs-info-border-subtle: ${bsDarkBorderSubtle};
		}

		.table-info {
			--bs-table-bg: ${bsTableBg};
			--bs-table-color: ${bsTableColor};
			--bs-table-border-color: ${bsTableBorderColor};
			--bs-table-striped-bg: ${bsTableStripedBg};
			--bs-table-striped-color: ${bsTableStripedColor};
			--bs-table-active-bg: ${bsTableActiveBg};
			--bs-table-active-color: ${bsTableActiveColor};
			--bs-table-hover-bg: ${bsTableHoverBg};
			--bs-table-hover-color: ${bsTableHoverColor};
		}
		
		.text-bg-info {
			color: ${btnColor} !important;
			background-color: rgba(${rgb},var(--bs-bg-opacity,1)) !important;
		}

		.btn-info {
			--bs-btn-color: ${btnColor};
			--bs-btn-bg: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${btnDisabledColor};
			--bs-btn-disabled-bg: ${btnDisabledBg};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

		.btn-outline-info {
			--bs-btn-color: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${hex};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}
	`;
};

export const danger = (hex: string, light: string = "#fff", dark: string = "#000") => {
	//:root, [data-bs-theme=light]
	const baseColor = "#dc3545"; //--bs-danger
	const rgb = getRGBString(hex); //--bs-danger-rgb

	//.btn-danger
	const btnColor = calcFontHex(hex, light, dark); //--bs-btn-color
	const btnBorder = calcHex(baseColor, "#dc3545", hex); //--bs-btn-border-color
	const btnHoverBg = calcHex(baseColor, "#bb2d3b", hex); //--bs-btn-hover-bg
	const btnHoverColor = calcFontHex(btnHoverBg, light, dark); //--bs-btn-hover-color
	const btnHoverBorder = calcHex(baseColor, "#b02a37", hex); //--bs-btn-hover-border-color
	const btnActiveBg = calcHex(baseColor, "#b02a37", hex); //--bs-btn-active-bg
	const btnActiveColor = calcFontHex(btnActiveBg, light, dark); //--bs-btn-active-color
	const btnActiveBorder = calcHex(baseColor, "#a52834", hex); //--bs-btn-active-border-color
	const btnDisabledBg = calcHex(baseColor, "#dc3545", hex); //--bs-btn-disabled-bg
	const btnDisabledColor = calcFontHex(btnDisabledBg, light, dark); //--bs-btn-disabled-color
	const btnDisabledBorder = calcHex(baseColor, "#dc3545", hex); //--bs-btn-disabled-border-color

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = calcHex(baseColor, "#58151c", hex); //--bs-danger-text-emphasis
	const bsBgSubtle = calcHex(baseColor, "#f8d7da", hex); //--bs-danger-bg-subtle
	const bsBorderSubtle = calcHex(baseColor, "#f1aeb5", hex); //--bs-danger-border-subtle
	const bsFormInvalid = calcHex(baseColor, "#dc3545", hex); //--bs-form-invalid-color
	const bsFormInvalidBorder = calcHex(baseColor, "#dc3545", hex); //--bs-form-invalid-border-color
	const bsCodeColor = calcHex(baseColor, "#d63384", hex); //--bs-code-color

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = calcHex(baseColor, "#ea868f", hex); //--bs-danger-text-emphasis
	const bsDarkBgSubtle = calcHex(baseColor, "#2c0b0e", hex); //--bs-danger-bg-subtle
	const bsDarkBorderSubtle = calcHex(baseColor, "#842029", hex); //--bs-danger-border-subtle
	const bsDarkFormInvalid = calcHex(baseColor, "#ea868f", hex); //--bs-form-invalid-color
	const bsDarkFormInvalidBorder = calcHex(baseColor, "#ea868f", hex); //--bs-form-invalid-border-color
	const bsDarkCodeColor = calcHex(baseColor, "#e685b5", hex); //--bs-code-color

	//.table-danger
	const bsTableBg = calcHex(baseColor, "#f8d7da", hex); //--bs-table-bg
	const bsTableColor = calcFontHex(bsTableBg, light, dark); //--bs-table-color
	const bsTableBorderColor = calcHex(baseColor, "#dfc2c4", hex); //--bs-table-border-color
	const bsTableStripedBg = calcHex(baseColor, "#eccccf", hex); //--bs-table-striped-bg
	const bsTableStripedColor = calcFontHex(bsTableStripedBg, light, dark); //--bs-table-striped-color
	const bsTableActiveBg = calcHex(baseColor, "#dfc2c4", hex); //--bs-table-active-bg
	const bsTableActiveColor = calcFontHex(bsTableActiveBg, light, dark); //--bs-table-active-color
	const bsTableHoverBg = calcHex(baseColor, "#e5c7ca", hex); //--bs-table-hover-bg
	const bsTableHoverColor = calcFontHex(bsTableHoverBg, light, dark); //--bs-table-hover-color

	//formcontrol invalid icon
	const esHex = encodeURIComponent(hex);
	const formControlInvalidImg = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='${esHex}'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='${esHex}' stroke='none'/%3e%3c/svg%3e")`;
	const bsFormSelectBgIcon = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='${esHex}'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='${esHex}' stroke='none'/%3e%3c/svg%3e")`;

	return `
		:root, [data-bs-theme='light'] {
			--bs-danger: ${hex};
			--bs-danger-rgb: ${rgb};

			--bs-danger-text-emphasis: ${bsTextEmphasis};
			--bs-danger-bg-subtle: ${bsBgSubtle};
			--bs-danger-border-subtle: ${bsBorderSubtle};

			--bs-form-invalid-color: ${bsFormInvalid};
			--bs-form-invalid-border-color: ${bsFormInvalidBorder};

			--bs-code-color: ${bsCodeColor};
		}

		[data-bs-theme='dark'] {
			--bs-danger-text-emphasis: ${bsDarkTextEmphasis};
			--bs-danger-bg-subtle: ${bsDarkBgSubtle};
			--bs-danger-border-subtle: ${bsDarkBorderSubtle};

			--bs-form-invalid-color: ${bsDarkFormInvalid};
			--bs-form-invalid-border-color: ${bsDarkFormInvalidBorder};

			--bs-code-color: ${bsDarkCodeColor};
		}

		.table-danger {
			--bs-table-bg: ${bsTableBg};
			--bs-table-color: ${bsTableColor};
			--bs-table-border-color: ${bsTableBorderColor};
			--bs-table-striped-bg: ${bsTableStripedBg};
			--bs-table-striped-color: ${bsTableStripedColor};
			--bs-table-active-bg: ${bsTableActiveBg};
			--bs-table-active-color: ${bsTableActiveColor};
			--bs-table-hover-bg: ${bsTableHoverBg};
			--bs-table-hover-color: ${bsTableHoverColor};
		}

		.form-control.is-invalid, .was-validated .form-control:invalid {
			background-image: ${formControlInvalidImg};
		}

		.form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"], .was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"]{
			--bs-form-select-bg-icon: ${bsFormSelectBgIcon};
		}
		
		.text-bg-danger {
			color: ${btnColor} !important;
			background-color: rgba(${rgb},var(--bs-bg-opacity,1)) !important;
		}

		.btn-danger {
			--bs-btn-color: ${btnColor};
			--bs-btn-bg: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${btnDisabledColor};
			--bs-btn-disabled-bg: ${btnDisabledBg};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

		.btn-outline-danger {
			--bs-btn-color: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${hex};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}
	`;
};

export const success = (hex: string, light: string = "#fff", dark: string = "#000") => {
	//:root, [data-bs-theme=light]
	const baseColor = "#198754"; //--bs-success
	const rgb = getRGBString(hex); //--bs-success-rgb

	//.btn-success
	const btnColor = calcFontHex(hex, light, dark); //--bs-btn-color
	const btnBorder = calcHex(baseColor, "#198754", hex); //--bs-btn-border-color
	const btnHoverBg = calcHex(baseColor, "#157347", hex); //--bs-btn-hover-bg
	const btnHoverColor = calcFontHex(btnHoverBg, light, dark); //--bs-btn-hover-color
	const btnHoverBorder = calcHex(baseColor, "#146c43", hex); //--bs-btn-hover-border-color
	const btnActiveBg = calcHex(baseColor, "#146c43", hex); //--bs-btn-active-bg
	const btnActiveColor = calcFontHex(btnActiveBg, light, dark); //--bs-btn-active-color
	const btnActiveBorder = calcHex(baseColor, "#13653f", hex); //--bs-btn-active-border-color
	const btnDisabledBg = calcHex(baseColor, "#198754", hex); //--bs-btn-disabled-bg
	const btnDisabledColor = calcFontHex(btnDisabledBg, light, dark); //--bs-btn-disabled-color
	const btnDisabledBorder = calcHex(baseColor, "#198754", hex); //--bs-btn-disabled-border-color

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = calcHex(baseColor, "#0a3622", hex); //--bs-success-text-emphasis
	const bsBgSubtle = calcHex(baseColor, "#d1e7dd", hex); //--bs-success-bg-subtle
	const bsBorderSubtle = calcHex(baseColor, "#a3cfbb", hex); //--bs-success-border-subtle
	const bsFormValid = calcHex(baseColor, "#198754", hex); //--bs-form-valid-color
	const bsFormValidBorder = calcHex(baseColor, "#198754", hex); //--bs-form-valid-border-color

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = calcHex(baseColor, "#75b798", hex); //--bs-success-text-emphasis
	const bsDarkBgSubtle = calcHex(baseColor, "#051b11", hex); //--bs-success-bg-subtle
	const bsDarkBorderSubtle = calcHex(baseColor, "#084298", hex); //--bs-success-border-subtle
	const bsDarkFormValid = calcHex(baseColor, "#75b798", hex); //--bs-form-valid-color
	const bsDarkFormValidBorder = calcHex(baseColor, "#75b798", hex); //--bs-form-valid-border-color

	//.table-succcess
	const bsTableBg = calcHex(baseColor, "#d1e7dd", hex); //--bs-table-bg
	const bsTableColor = calcFontHex(bsTableBg, light, dark); //--bs-table-color
	const bsTableBorderColor = calcHex(baseColor, "#bcd0c7", hex); //--bs-table-border-color
	const bsTableStripedBg = calcHex(baseColor, "#c7dbd2", hex); //--bs-table-striped-bg
	const bsTableStripedColor = calcFontHex(bsTableStripedBg, light, dark); //--bs-table-striped-color
	const bsTableActiveBg = calcHex(baseColor, "#bcd0c7", hex); //--bs-table-active-bg
	const bsTableActiveColor = calcFontHex(bsTableActiveBg, light, dark); //--bs-table-active-color
	const bsTableHoverBg = calcHex(baseColor, "#c1d6cc", hex); //--bs-table-hover-bg
	const bsTableHoverColor = calcFontHex(bsTableHoverBg, light, dark); //--bs-table-hover-color

	//formcontrol valid icon
	const esHex = encodeURIComponent(hex);
	const formControlValidImg = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='${esHex}' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")`;
	const bsFormSelectBgIcon = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='${esHex}' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")`;

	return `
		:root, [data-bs-theme='light'] {
			--bs-success: ${hex};
			--bs-success-rgb: ${rgb};

			--bs-success-text-emphasis: ${bsTextEmphasis};
			--bs-success-bg-subtle: ${bsBgSubtle};
			--bs-success-border-subtle: ${bsBorderSubtle};

			--bs-form-valid-color: ${bsFormValid};
			--bs-form-valid-border-color: ${bsFormValidBorder};
		}

		[data-bs-theme='dark'] {
			--bs-success-text-emphasis: ${bsDarkTextEmphasis};
			--bs-success-bg-subtle: ${bsDarkBgSubtle};
			--bs-success-border-subtle: ${bsDarkBorderSubtle};

			--bs-form-valid-color: ${bsDarkFormValid};
			--bs-form-valid-border-color: ${bsDarkFormValidBorder};
		}

		.table-success {
			--bs-table-bg: ${bsTableBg};
			--bs-table-color: ${bsTableColor};
			--bs-table-border-color: ${bsTableBorderColor};
			--bs-table-striped-bg: ${bsTableStripedBg};
			--bs-table-striped-color: ${bsTableStripedColor};
			--bs-table-active-bg: ${bsTableActiveBg};
			--bs-table-active-color: ${bsTableActiveColor};
			--bs-table-hover-bg: ${bsTableHoverBg};
			--bs-table-hover-color: ${bsTableHoverColor};
		}

		.form-control.is-valid, .was-validated .form-control:valid {
			background-image: ${formControlValidImg};
		}

		.form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"], .was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"]{
			--bs-form-select-bg-icon: ${bsFormSelectBgIcon};
		}
		
		.text-bg-success {
			color: ${btnColor} !important;
			background-color: rgba(${rgb},var(--bs-bg-opacity,1)) !important;
		}

		.btn-success {
			--bs-btn-color: ${btnColor};
			--bs-btn-bg: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${btnDisabledColor};
			--bs-btn-disabled-bg: ${btnDisabledBg};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

		.btn-outline-success {
			--bs-btn-color: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${hex};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}
	`;
};

export const primary = (hex: string, light: string = "#fff", dark: string = "#000") => {
	//:root, [data-bs-theme=light]
	const baseColor = "#0d6efd"; //--bs-primary
	const rgb = getRGBString(hex); //--bs-primary-rgb
	const bsFocusBorder = calcHex(baseColor, "#86b7fe", hex); //form-control-focus

	//.btn-primary
	const btnColor = calcFontHex(hex, light, dark); //--bs-btn-color
	const btnBorder = calcHex(baseColor, "#0d6efd", hex); //--bs-btn-border-color
	const btnHoverBg = calcHex(baseColor, "#0b5ed7", hex); //--bs-btn-hover-bg
	const btnHoverColor = calcFontHex(btnHoverBg, light, dark); //--bs-btn-hover-color
	const btnHoverBorder = calcHex(baseColor, "#0a58ca", hex); //--bs-btn-hover-border-color
	const btnActiveBg = calcHex(baseColor, "#0a58ca", hex); //--bs-btn-active-bg
	const btnActiveColor = calcFontHex(btnActiveBg, light, dark); //--bs-btn-active-color
	const btnActiveBorder = calcHex(baseColor, "#0a53be", hex); //--bs-btn-active-border-color
	const btnDisabledBg = calcHex(baseColor, "#0d6efd", hex); //--bs-btn-disabled-bg
	const btnDisabledColor = calcFontHex(btnDisabledBg, light, dark); //--bs-btn-disabled-color
	const btnDisabledBorder = calcHex(baseColor, "#0d6efd", hex); //--bs-btn-disabled-border-color

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = calcHex(baseColor, "#052c65", hex); //--bs-primary-text-emphasis
	const bsBgSubtle = calcHex(baseColor, "#cfe2ff", hex); //--bs-primary-bg-subtle
	const bsBorderSubtle = calcHex(baseColor, "#9ec5fe", hex); //--bs-primary-border-subtle
	const bsLinkColor = calcHex(baseColor, "#0d6efd", hex); //--bs-link-color
	const bsLinkColorRGB = getRGBString(bsLinkColor); //--bs-link-color-rgb
	const bsLinkHoverColor = calcHex(baseColor, "#0a58ca", hex); //--bs-link-hover-color
	const bsLinkHoverColorRGB = getRGBString(bsLinkHoverColor); //--bs-link-hover-color-rgb

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = calcHex(baseColor, "#6ea8fe", hex); //--bs-primary-text-emphasis
	const bsDarkBgSubtle = calcHex(baseColor, "#031633", hex); //--bs-primary-bg-subtle
	const bsDarkBorderSubtle = calcHex(baseColor, "#084298", hex); //--bs-primary-border-subtle
	const bsDarkLinkColor = calcHex(baseColor, "#6ea8fe", hex); //--bs-link-color
	const bsDarkLinkColorRGB = getRGBString(bsDarkLinkColor); //--bs-link-color-rgb
	const bsDarkLinkHoverColor = calcHex(baseColor, "#8bb9fe", hex); //--bs-link-hover-color
	const bsDarkLinkHoverColorRGB = getRGBString(bsDarkLinkHoverColor); //--bs-link-hover-color-rgb

	//.table-primary
	const bsTableBg = calcHex(baseColor, "#cfe2ff", hex); //--bs-table-bg
	const bsTableColor = calcFontHex(bsTableBg, light, dark); //--bs-table-color
	const bsTableBorderColor = calcHex(baseColor, "#bacbe6", hex); //--bs-table-border-color
	const bsTableStripedBg = calcHex(baseColor, "#c5d7f2", hex); //--bs-table-striped-bg
	const bsTableStripedColor = calcFontHex(bsTableStripedBg, light, dark); //--bs-table-striped-color
	const bsTableActiveBg = calcHex(baseColor, "#bacbe6", hex); //--bs-table-active-bg
	const bsTableActiveColor = calcFontHex(bsTableActiveBg, light, dark); //--bs-table-active-color
	const bsTableHoverBg = calcHex(baseColor, "#bfd1ec", hex); //--bs-table-hover-bg
	const bsTableHoverColor = calcFontHex(bsTableHoverBg, light, dark); //--bs-table-hover-color

	//checkbox and radio svg
	const esBsFocusBorder = encodeURIComponent(bsFocusBorder);
	const esBtnColor = encodeURIComponent(btnColor);

	const bsFormSwitchBg = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='${esBsFocusBorder}'/%3e%3c/svg%3e")`;
	const bsFormSwitchBgChecked = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='${esBtnColor}'/%3e%3c/svg%3e")`;
	const bsFormSwitchBgImgChecked = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='${esBtnColor}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e")`;
	const bsFormSwitchBgImgIndeterminate = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='${esBtnColor}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e")`;
	const bsFormSwitchBgImgCheckedRadio = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='${esBtnColor}'/%3e%3c/svg%3e")`;

	//form-select
	const esBsTextEmphasis = encodeURIComponent(bsTextEmphasis);
	const esBsDarkTextEmphasis = encodeURIComponent(bsDarkTextEmphasis);
	const bsFormSelectBgImg = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='${esBsTextEmphasis}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")`; //--bs-form-select-bg-img
	const bsDarkFormSelectBgImg = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='${esBsDarkTextEmphasis}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")`; //--bs-form-select-bg-img

	//accordion svg
	const bsAccordionBtnActiveIcon = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='${esBsTextEmphasis}'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")`;
	const bsDarkAccordionBtnActiveIcon = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='${esBsDarkTextEmphasis}'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")`;

	return `
		::selection {
			color: ${btnColor};
  			background-color: ${hex};
		}

		:root, [data-bs-theme='light'] {
			--bs-primary: ${hex};
			--bs-primary-rgb: ${rgb};
			--bs-focus-ring-color: rgba(${rgb}, 0.25);

			--bs-primary-text-emphasis: ${bsTextEmphasis};
			--bs-primary-bg-subtle: ${bsBgSubtle};
			--bs-primary-border-subtle: ${bsBorderSubtle};

			--bs-link-color: ${bsLinkColor};
			--bs-link-color-rgb: ${bsLinkColorRGB};
			--bs-link-hover-color: ${bsLinkHoverColor};
			--bs-link-hover-color-rgb: ${bsLinkHoverColorRGB};
		}

		[data-bs-theme='dark'] {
			--bs-primary-text-emphasis: ${bsDarkTextEmphasis};
			--bs-primary-bg-subtle: ${bsDarkBgSubtle};
			--bs-primary-border-subtle: ${bsDarkBorderSubtle};

			--bs-link-color: ${bsDarkLinkColor};
			--bs-link-color-rgb: ${bsDarkLinkColorRGB};
			--bs-link-hover-color: ${bsDarkLinkHoverColor};
			--bs-link-hover-color-rgb: ${bsDarkLinkHoverColorRGB};
		}

		.table-primary {
			--bs-table-bg: ${bsTableBg};
			--bs-table-color: ${bsTableColor};
			--bs-table-border-color: ${bsTableBorderColor};
			--bs-table-striped-bg: ${bsTableStripedBg};
			--bs-table-striped-color: ${bsTableStripedColor};
			--bs-table-active-bg: ${bsTableActiveBg};
			--bs-table-active-color: ${bsTableActiveColor};
			--bs-table-hover-bg: ${bsTableHoverBg};
			--bs-table-hover-color: ${bsTableHoverColor};
		}

		.form-control:focus, .form-select:focus, .form-check-input:focus {
			border-color: ${bsFocusBorder};
			box-shadow: 0 0 0 .25rem rgba(${rgb},.25);
		}

		.form-switch .form-check-input:focus {
			--bs-form-switch-bg: ${bsFormSwitchBg};
		}

		.form-switch .form-check-input:checked {
			--bs-form-switch-bg: ${bsFormSwitchBgChecked};
		}

		.form-check-input:checked[type='checkbox'] {
			--bs-form-check-bg-image: ${bsFormSwitchBgImgChecked};
		}

		.form-check-input:checked {
			background-color: ${hex};
			border-color: ${hex};
		}

		.form-check-input[type=checkbox]:indeterminate {
			background-color: ${hex};
			border-color: ${hex};
			--bs-form-check-bg-image: ${bsFormSwitchBgImgIndeterminate};
		}

		.form-check-input:checked[type=radio] {
			--bs-form-check-bg-image: ${bsFormSwitchBgImgCheckedRadio};
		}

		

		.form-range::-moz-range-thumb {
			background-color: ${hex};
		}
 
		.form-range::-webkit-slider-thumb {
			-webkit-appearance: none;
			background-color: ${hex};
		}

		.form-range::-ms-track {
			background-color: ${hex};
		}
 
		.form-range::-ms-fill-lower {
			background-color: ${hex};
		}
 
		.form-range::-ms-fill-upper {
			background-color: ${hex};
		}

		.form-range:focus::-moz-range-thumb {
			box-shadow: 0 0 0 .25rem rgba(${rgb},.25);
		}
 
		.form-range:focus::-webkit-slider-thumb {
			box-shadow: 0 0 0 .25rem rgba(${rgb},.25);
		}

		.form-range:focus::-ms-thumb {
			box-shadow: 0 0 0 .25rem rgba(${rgb},.25);
		}

		.form-range:focus::-ms-fill-lower {
			box-shadow: 0 0 0 .25rem rgba(${rgb},.25);
		}

		.form-range:focus::-ms-fill-upper {
			box-shadow: 0 0 0 .25rem rgba(${rgb},.25);
		}

		.dropdown-item {
			--bs-dropdown-link-active-bg: ${hex};
		}

		.list-group {
			--bs-list-group-active-bg: ${hex};
			--bs-list-group-active-border-color: ${hex};
		}


		.text-bg-primary {
			color: ${btnColor} !important;
			background-color: rgba(${rgb},var(--bs-bg-opacity,1)) !important;
		}

		.btn-primary {
			--bs-btn-color: ${btnColor};
			--bs-btn-bg: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${btnDisabledColor};
			--bs-btn-disabled-bg: ${btnDisabledBg};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

		.btn-outline-primary {
			--bs-btn-color: ${hex};
			--bs-btn-border-color: ${btnBorder};
			--bs-btn-hover-color: ${btnHoverColor};
			--bs-btn-hover-bg: ${btnHoverBg};
			--bs-btn-hover-border-color: ${btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btnActiveColor};
			--bs-btn-active-bg: ${btnActiveBg};
			--bs-btn-active-border-color: ${btnActiveBorder};
			--bs-btn-disabled-color: ${hex};
			--bs-btn-disabled-border-color: ${btnDisabledBorder};
		}

		.progress, .progress-stacked {
			--bs-progress-bar-bg: ${hex};
		}

		.nav-pills {
			--bs-nav-pills-link-active-bg: ${hex};
			--bs-nav-pills-link-active-color: ${btnColor};
		}

		.pagination {
			--bs-pagination-color: ${hex};
			--bs-pagination-active-bg: ${hex};
			--bs-pagination-active-color: ${btnColor};
			--bs-pagination-active-border-color: ${hex};
			--bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(${rgb}, 0.25);
		}

		.accordion {
			--bs-accordion-btn-active-icon: ${bsAccordionBtnActiveIcon};
			--bs-accordion-btn-focus-border-color: ${bsFocusBorder};
    		--bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(${rgb}, 0.25);
		}

		.form-select:focus {
			--bs-form-select-bg-img: ${bsFormSelectBgImg};
		}

		[data-bs-theme=dark] .accordion-button::after {
			--bs-accordion-btn-active-icon: ${bsDarkAccordionBtnActiveIcon};
		}

		[data-bs-theme='dark'] .form-select:focus {
			--bs-form-select-bg-img: ${bsDarkFormSelectBgImg};
		}
	`;
};

export const body = (hex: string) => {
	//:root, [data-bs-theme=light]
	const baseColor = "#ffffff"; //--bs-body-bg
	const rgb = getRGBString(hex); //--bs-body-bg-rgb

	const bsBodyColor = calcHex(baseColor, "#212529", hex); //--bs-body-color
	const bsBodyColorRGB = getRGBString(bsBodyColor); //--bs-body-color-rgb
	const bsHighlightColor = calcHex(baseColor, "#212529", hex); //--bs-highlight-color
	const bsEmphasisColor = calcHex(baseColor, "#000000", hex); //--bs-emphasis-color
	const bsEmphasisColorRGB = getRGBString(bsEmphasisColor); //--bs-emphasis-color-rgb
	const bsSecondaryColor = `rgba(${bsBodyColorRGB}, 0.75)`; //--bs-secondary-color
	const bsSecondaryColorRGB = bsBodyColorRGB; //--bs-secondary-color-rgb
	const bsSecondaryBg = calcHex(baseColor, "#e9ecef", hex); //--bs-secondary-bg
	const bsSecondaryBgRGB = getRGBString(bsSecondaryBg); //--bs-secondary-bg-rgb
	const bsTertiaryColor = `rgba(${bsBodyColorRGB}, 0.5)`; //--bs-tertiary-color
	const bsTertiaryColorRGB = bsBodyColorRGB; //--bs-tertiary-color-rgb
	const bsTertiaryBg = calcHex(baseColor, "#f8f9fa", hex); //--bs-secondary-bg
	const bsTertiaryBgRGB = getRGBString(bsTertiaryBg); //--bs-secondary-bg-rgb
	const bsBorderColor = calcHex(baseColor, "#dee2e6", hex); //--bs-border-color

	//[data-bs-theme="dark"]
	const bsDarkBodyBg = calcHex(baseColor, "#212529", hex); //--bs-body-bg
	const rgbDark = getRGBString(bsDarkBodyBg); //--bs-body-bg-rgb

	const bsDarkBodyColor = calcHex(baseColor, "#dee2e6", hex); //--bs-body-color
	const bsDarkBodyColorRGB = getRGBString(bsDarkBodyColor); //--bs-body-color-rgb
	const bsDarkHighlightColor = calcHex(baseColor, "#dee2e6", hex); //--bs-highlight-color
	const bsDarkEmphasisColor = calcHex(baseColor, "#ffffff", hex); //--bs-emphasis-color
	const bsDarkEmphasisColorRGB = getRGBString(bsDarkEmphasisColor); //--bs-emphasis-color-rgb
	const bsDarkSecondaryColor = `rgba(${bsDarkBodyColorRGB}, 0.75)`; //--bs-secondary-color
	const bsDarkSecondaryColorRGB = bsDarkBodyColorRGB; //--bs-secondary-color-rgb
	const bsDarkSecondaryBg = calcHex(baseColor, "#343a40", hex); //--bs-secondary-bg
	const bsDarkSecondaryBgRGB = getRGBString(bsDarkSecondaryBg); //--bs-secondary-bg-rgb
	const bsDarkTertiaryColor = `rgba(${bsDarkBodyColorRGB}, 0.5)`; //--bs-tertiary-color
	const bsDarkTertiaryColorRGB = bsDarkBodyColorRGB; //--bs-tertiary-color-rgb
	const bsDarkTertiaryBg = calcHex(baseColor, "#2b3035", hex); //--bs-secondary-bg
	const bsDarkTertiaryBgRGB = getRGBString(bsDarkTertiaryBg); //--bs-secondary-bg-rgb
	const bsDarkBorderColor = calcHex(baseColor, "#495057", hex); //--bs-border-color

	//select
	const esBsBodyBg = encodeURIComponent(bsBodyColor);
	const esBsDarkBodyBg = encodeURIComponent(bsDarkBodyColor);
	const bsFormSelectBgImg = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='${esBsBodyBg}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")`; //--bs-form-select-bg-img
	const bsDarkFormSelectBgImg = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='${esBsDarkBodyBg}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")`; //--bs-form-select-bg-img

	//accordion svg
	const bsAccordionBtnIcon = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='${esBsBodyBg}'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")`;
	const bsDarkAccordionBtnIcon = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='${esBsDarkBodyBg}'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")`;

	return `
		:root, [data-bs-theme='light'] {
			--bs-body-bg: ${hex};
			--bs-body-bg-rgb: ${rgb};
			--bs-body-color: ${bsBodyColor};
			--bs-body-color-rgb: ${bsBodyColorRGB};
			--bs-highlight-color: ${bsHighlightColor};
			--bs-emphasis-color: ${bsEmphasisColor};
			--bs-emphasis-color-rgb: ${bsEmphasisColorRGB};
			--bs-secondary-color: ${bsSecondaryColor};
			--bs-secondary-color-rgb: ${bsSecondaryColorRGB};
			--bs-secondary-bg: ${bsSecondaryBg};
			--bs-secondary-bg-rgb: ${bsSecondaryBgRGB};
			--bs-tertiary-color: ${bsTertiaryColor};
			--bs-tertiary-color-rgb: ${bsTertiaryColorRGB};
			--bs-tertiary-bg: ${bsTertiaryBg};
			--bs-tertiary-bg-rgb: ${bsTertiaryBgRGB};
			--bs-border-color: ${bsBorderColor};
			
		}

		[data-bs-theme='dark'] {
			--bs-body-bg: ${bsDarkBodyBg};
			--bs-body-bg-rgb: ${rgbDark};
			--bs-body-color: ${bsDarkBodyColor};
			--bs-body-color-rgb: ${bsDarkBodyColorRGB};
			--bs-highlight-color: ${bsDarkHighlightColor};
			--bs-emphasis-color: ${bsDarkEmphasisColor};
			--bs-emphasis-color-rgb: ${bsDarkEmphasisColorRGB};
			--bs-secondary-color: ${bsDarkSecondaryColor};
			--bs-secondary-color-rgb: ${bsDarkSecondaryColorRGB};
			--bs-secondary-bg: ${bsDarkSecondaryBg};
			--bs-secondary-bg-rgb: ${bsDarkSecondaryBgRGB};
			--bs-tertiary-color: ${bsDarkTertiaryColor};
			--bs-tertiary-color-rgb: ${bsDarkTertiaryColorRGB};
			--bs-tertiary-bg: ${bsDarkTertiaryBg};
			--bs-tertiary-bg-rgb: ${bsDarkTertiaryBgRGB};
			--bs-border-color: ${bsDarkBorderColor};
		}


		.accordion {
			--bs-accordion-btn-icon: ${bsAccordionBtnIcon};
		}

		.form-select {
			--bs-form-select-bg-img: ${bsFormSelectBgImg};
		}

		[data-bs-theme=dark] .accordion-button::after {
			--bs-accordion-btn-icon: ${bsDarkAccordionBtnIcon};
		}

		[data-bs-theme='dark'] .form-select {
			--bs-form-select-bg-img: ${bsDarkFormSelectBgImg};
		}
	`;
};

export const getBodyColor = (hex: string) => {
	const baseColor = "#ffffff"; //--bs-body-bg
	const bsBodyColor = calcHex(baseColor, "#212529", hex); //--bs-body-color
	const bsDarkBodyColor = calcHex(baseColor, "#dee2e6", hex); //--bs-body-color

	return { light: bsBodyColor, dark: bsDarkBodyColor };
};

export const apply = (css: string, id?: string) => {
	id ??= "bsts-custom-var-container";

	let bstsCustomVarContainer = document.getElementById(id);
	if (!bstsCustomVarContainer) {
		appendChild(document.head, new style({ id: id }, css));
	} else {
		replaceWith(bstsCustomVarContainer, new style({ id: id }, css));
	}
};
