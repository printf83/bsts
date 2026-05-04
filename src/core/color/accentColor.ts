import { style } from "../../html/style.js";
import { hexIsDark, hexToHSL, hexToRGB, hslToHex } from "./CSSVar.js";
import { appendChild, replaceWith } from "../builder.js";

/**
 * Calculates the HSL distance between two hex color values.
 *
 * Takes two hex color strings, converts them to HSL, and returns the
 * numeric difference between the H, S, and L values.
 *
 * Returns an object with `h`, `s`, and `l` properties representing the
 * distance between the colors in the HSL color space.
 */
const normalizeLoop = (value: number, max: number) => {
	const remainder = value % max;
	return remainder < 0 ? remainder + max : remainder;
};

const normalizeBounce = (value: number, max: number) => {
	if (value < 0) return -value;
	if (value > max) return max - (value - max);
	return value;
};

function getHSLDistance(fromHex: string, toHex: string) {
	const fromHSL = hexToHSL(fromHex);
	const toHSL = hexToHSL(toHex);

	return fromHSL && toHSL
		? {
				h: fromHSL.h - toHSL.h,
				s: fromHSL.s - toHSL.s,
				l: fromHSL.l - toHSL.l,
			}
		: { h: 0, s: 0, l: 0 };
}

function addDistanceHex(hex: string, distanceHSL: { h: number; s: number; l: number }) {
	const HSL = hexToHSL(hex);

	if (!HSL) {
		return { h: 0, s: 0, l: 0 };
	}

	return {
		h: normalizeLoop(HSL.h - distanceHSL.h, 360),
		s: normalizeBounce(HSL.s - distanceHSL.s, 100),
		l: normalizeBounce(HSL.l - distanceHSL.l, 100),
	};
}

export const calcHex = (mainHex: string, refHex: string, hex: string) =>
	hslToHex(addDistanceHex(hex, getHSLDistance(mainHex, refHex)));

function calcFontHex(hex: string, light: string = "#fff", dark: string = "#000") {
	return hexIsDark(hex) ? light : dark;
}

function getRGBString(hex: string) {
	const rgb = hexToRGB(hex);
	return rgb ? `${rgb.r},${rgb.g},${rgb.b}` : "0,0,0";
}

type ButtonVars = {
	btnColor: string;
	btnBorder: string;
	btnHoverBg: string;
	btnHoverColor: string;
	btnHoverBorder: string;
	btnActiveBg: string;
	btnActiveColor: string;
	btnActiveBorder: string;
	btnDisabledBg: string;
	btnDisabledColor: string;
	btnDisabledBorder: string;
};

const createButtonVars = (
	baseColor: string,
	hex: string,
	light: string,
	dark: string,
	hoverBg: string,
	hoverBorder: string,
	activeBg: string,
	activeBorder: string
): ButtonVars => {
	const btnColor = calcFontHex(hex, light, dark);
	const btnBorder = calcHex(baseColor, baseColor, hex);
	const btnHoverBg = calcHex(baseColor, hoverBg, hex);
	const btnHoverColor = calcFontHex(btnHoverBg, light, dark);
	const btnHoverBorder = calcHex(baseColor, hoverBorder, hex);
	const btnActiveBg = calcHex(baseColor, activeBg, hex);
	const btnActiveColor = calcFontHex(btnActiveBg, light, dark);
	const btnActiveBorder = calcHex(baseColor, activeBorder, hex);
	const btnDisabledBg = calcHex(baseColor, baseColor, hex);
	const btnDisabledColor = calcFontHex(btnDisabledBg, light, dark);
	const btnDisabledBorder = calcHex(baseColor, baseColor, hex);

	return {
		btnColor,
		btnBorder,
		btnHoverBg,
		btnHoverColor,
		btnHoverBorder,
		btnActiveBg,
		btnActiveColor,
		btnActiveBorder,
		btnDisabledBg,
		btnDisabledColor,
		btnDisabledBorder,
	};
};

type TableVars = {
	bg: string;
	color: string;
	borderColor: string;
	stripedBg: string;
	stripedColor: string;
	activeBg: string;
	activeColor: string;
	hoverBg: string;
	hoverColor: string;
};

const createTableVars = (
	baseColor: string,
	hex: string,
	light: string,
	dark: string,
	bgRef: string,
	borderRef: string,
	stripedBgRef: string,
	activeBgRef: string,
	hoverBgRef: string
): TableVars => {
	const bg = calcHex(baseColor, bgRef, hex);
	const stripedBg = calcHex(baseColor, stripedBgRef, hex);
	const activeBg = calcHex(baseColor, activeBgRef, hex);
	const hoverBg = calcHex(baseColor, hoverBgRef, hex);

	return {
		bg,
		color: calcFontHex(bg, light, dark),
		borderColor: calcHex(baseColor, borderRef, hex),
		stripedBg,
		stripedColor: calcFontHex(stripedBg, light, dark),
		activeBg,
		activeColor: calcFontHex(activeBg, light, dark),
		hoverBg,
		hoverColor: calcFontHex(hoverBg, light, dark),
	};
};

const tableCss = (name: string, table: TableVars) => `
		.table-${name} {
			--bs-table-bg: ${table.bg};
			--bs-table-color: ${table.color};
			--bs-table-border-color: ${table.borderColor};
			--bs-table-striped-bg: ${table.stripedBg};
			--bs-table-striped-color: ${table.stripedColor};
			--bs-table-active-bg: ${table.activeBg};
			--bs-table-active-color: ${table.activeColor};
			--bs-table-hover-bg: ${table.hoverBg};
			--bs-table-hover-color: ${table.hoverColor};
		}
`;

const buttonCss = (name: string, hex: string, btn: ButtonVars, rgb: string) => `
		.text-bg-${name} {
			color: ${btn.btnColor} !important;
			background-color: rgba(${rgb},var(--bs-bg-opacity,1)) !important;
		}

		.btn-${name} {
			--bs-btn-color: ${btn.btnColor};
			--bs-btn-bg: ${hex};
			--bs-btn-border-color: ${btn.btnBorder};
			--bs-btn-hover-color: ${btn.btnHoverColor};
			--bs-btn-hover-bg: ${btn.btnHoverBg};
			--bs-btn-hover-border-color: ${btn.btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btn.btnActiveColor};
			--bs-btn-active-bg: ${btn.btnActiveBg};
			--bs-btn-active-border-color: ${btn.btnActiveBorder};
			--bs-btn-disabled-color: ${btn.btnDisabledColor};
			--bs-btn-disabled-bg: ${btn.btnDisabledBg};
			--bs-btn-disabled-border-color: ${btn.btnDisabledBorder};
		}

		.btn-outline-${name} {
			--bs-btn-color: ${hex};
			--bs-btn-border-color: ${btn.btnBorder};
			--bs-btn-hover-color: ${btn.btnHoverColor};
			--bs-btn-hover-bg: ${btn.btnHoverBg};
			--bs-btn-hover-border-color: ${btn.btnHoverBorder};
			--bs-btn-focus-shadow-rgb: ${rgb};
			--bs-btn-active-color: ${btn.btnActiveColor};
			--bs-btn-active-bg: ${btn.btnActiveBg};
			--bs-btn-active-border-color: ${btn.btnActiveBorder};
			--bs-btn-disabled-color: ${hex};
			--bs-btn-disabled-border-color: ${btn.btnDisabledBorder};
		}
`;

export const dark = (hex: string, light: string = "#fff", dark: string = "#000") => {
	//:root, [data-bs-theme=light]
	const baseColor = "#212529"; //--bs-dark
	const rgb = getRGBString(hex); //--bs-dark-rgb

	const btn = createButtonVars(baseColor, hex, light, dark, "#424649", "#373b3e", "#4d5154", "#373b3e");

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = calcHex(baseColor, "#495057", hex); //--bs-dark-text-emphasis
	const bsBgSubtle = calcHex(baseColor, "#ced4da", hex); //--bs-dark-bg-subtle
	const bsBorderSubtle = calcHex(baseColor, "#adb5bd", hex); //--bs-dark-border-subtle

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = calcHex(baseColor, "#f8f9fa", hex); //--bs-dark-text-emphasis
	const bsDarkBgSubtle = calcHex(baseColor, "#1a1d20", hex); //--bs-dark-bg-subtle
	const bsDarkBorderSubtle = calcHex(baseColor, "#343a40", hex); //--bs-dark-border-subtle

	//.table-dark
	const bsTable = createTableVars(baseColor, hex, light, dark, "#212529", "#373b3e", "#2c3034", "#373b3e", "#323539");

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

		${tableCss("dark", bsTable)}
		
		${buttonCss("dark", hex, btn, rgb)}

	`;
};

export const light = (hex: string, light: string = "#fff", dark: string = "#000") => {
	//:root, [data-bs-theme=light]
	const baseColor = "#f8f9fa"; //--bs-light
	const rgb = getRGBString(hex); //--bs-light-rgb

	const btn = createButtonVars(baseColor, hex, light, dark, "#d3d4d5", "#c6c7c8", "#c6c7c8", "#babbbc");

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = calcHex(baseColor, "#495057", hex); //--bs-light-text-emphasis
	const bsBgSubtle = calcHex(baseColor, "#fcfcfd", hex); //--bs-light-bg-subtle
	const bsBorderSubtle = calcHex(baseColor, "#e9ecef", hex); //--bs-light-border-subtle

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = calcHex(baseColor, "#f8f9fa", hex); //--bs-light-text-emphasis
	const bsDarkBgSubtle = calcHex(baseColor, "#343a40", hex); //--bs-light-bg-subtle
	const bsDarkBorderSubtle = calcHex(baseColor, "#495057", hex); //--bs-light-border-subtle

	//.table-light
	const bsTable = createTableVars(baseColor, hex, light, dark, "#f8f9fa", "#dfe0e1", "#ecedee", "#dfe0e1", "#e5e6e7");

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

		${tableCss("light", bsTable)}
		
		${buttonCss("light", hex, btn, rgb)}

	`;
};

export const secondary = (hex: string, light: string = "#fff", dark: string = "#000") => {
	//:root, [data-bs-theme=light]
	const baseColor = "#6c757d"; //--bs-secondary
	const rgb = getRGBString(hex); //--bs-secondary-rgb

	//.btn-secondary
	const btn = createButtonVars(baseColor, hex, light, dark, "#5c636a", "#565e64", "#565e64", "#51585e");

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = calcHex(baseColor, "#2b2f32", hex); //--bs-secondary-text-emphasis
	const bsBgSubtle = calcHex(baseColor, "#e2e3e5", hex); //--bs-secondary-bg-subtle
	const bsBorderSubtle = calcHex(baseColor, "#c4c8cb", hex); //--bs-secondary-border-subtle

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = calcHex(baseColor, "#a7acb1", hex); //--bs-secondary-text-emphasis
	const bsDarkBgSubtle = calcHex(baseColor, "#161719", hex); //--bs-secondary-bg-subtle
	const bsDarkBorderSubtle = calcHex(baseColor, "#41464b", hex); //--bs-secondary-border-subtle

	//.table-secondary
	const bsTable = createTableVars(baseColor, hex, light, dark, "#e2e3e5", "#cbccce", "#d7d8da", "#cbccce", "#d1d2d4");

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

		${tableCss("secondary", bsTable)}
		
		${buttonCss("secondary", hex, btn, rgb)}
	`;
};

export const warning = (hex: string, light: string = "#fff", dark: string = "#000") => {
	//:root, [data-bs-theme=light]
	const baseColor = "#ffc107"; //--bs-warning
	const rgb = getRGBString(hex); //--bs-warning-rgb

	//.btn-warning
	const btn = createButtonVars(baseColor, hex, light, dark, "#ffca2c", "#ffc720", "#ffcd39", "#ffc720");

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = calcHex(baseColor, "#664d03", hex); //--bs-warning-text-emphasis
	const bsBgSubtle = calcHex(baseColor, "#fff3cd", hex); //--bs-warning-bg-subtle
	const bsBorderSubtle = calcHex(baseColor, "#ffe69c", hex); //--bs-warning-border-subtle
	const bsHighlightBg = calcHex(baseColor, "#fff3cd", hex); //--bs-highlight-bg

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = calcHex(baseColor, "#ffda6a", hex); //--bs-warning-text-emphasis
	const bsDarkBgSubtle = calcHex(baseColor, "#332701", hex); //--bs-warning-bg-subtle
	const bsDarkBorderSubtle = calcHex(baseColor, "#997404", hex); //--bs-warning-border-subtle
	const bsDarkHighlightBg = calcHex(baseColor, "#664d03", hex); //--bs-highlight-bg

	//.table-warning
	const bsTable = createTableVars(baseColor, hex, light, dark, "#fff3cd", "#e6dbb9", "#f2e7c3", "#e6dbb9", "#ece1be");

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

		${tableCss("warning", bsTable)}
		
		${buttonCss("warning", hex, btn, rgb)}
	`;
};

export const info = (hex: string, light: string = "#fff", dark: string = "#000") => {
	//:root, [data-bs-theme=light]
	const baseColor = "#0dcaf0"; //--bs-info
	const rgb = getRGBString(hex); //--bs-info-rgb

	//.btn-info
	const btn = createButtonVars(baseColor, hex, light, dark, "#31d2f2", "#25cff2", "#3dd5f3", "#25cff2");

	//:root, [data-bs-theme=light]
	const bsTextEmphasis = calcHex(baseColor, "#58151c", hex); //--bs-info-text-emphasis
	const bsBgSubtle = calcHex(baseColor, "#cff4fc", hex); //--bs-info-bg-subtle
	const bsBorderSubtle = calcHex(baseColor, "#9eeaf9", hex); //--bs-info-border-subtle

	//[data-bs-theme=dark]
	const bsDarkTextEmphasis = calcHex(baseColor, "#6edff6", hex); //--bs-info-text-emphasis
	const bsDarkBgSubtle = calcHex(baseColor, "#032830", hex); //--bs-info-bg-subtle
	const bsDarkBorderSubtle = calcHex(baseColor, "#087990", hex); //--bs-info-border-subtle

	//.table-info
	const bsTable = createTableVars(baseColor, hex, light, dark, "#cff4fc", "#badce3", "#c5e8ef", "#badce3", "#bfe2e9");

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

		${tableCss("info", bsTable)}
		
		${buttonCss("info", hex, btn, rgb)}
	`;
};

export const danger = (hex: string, light: string = "#fff", dark: string = "#000") => {
	//:root, [data-bs-theme=light]
	const baseColor = "#dc3545"; //--bs-danger
	const rgb = getRGBString(hex); //--bs-danger-rgb

	//.btn-danger
	const btn = createButtonVars(baseColor, hex, light, dark, "#bb2d3b", "#b02a37", "#b02a37", "#a52834");

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
	const bsTable = createTableVars(baseColor, hex, light, dark, "#f8d7da", "#dfc2c4", "#eccccf", "#dfc2c4", "#e5c7ca");

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

		${tableCss("danger", bsTable)}

		.form-control.is-invalid, .was-validated .form-control:invalid {
			background-image: ${formControlInvalidImg};
		}

		.form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"], .was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"]{
			--bs-form-select-bg-icon: ${bsFormSelectBgIcon};
		}
		
		${buttonCss("danger", hex, btn, rgb)}
	`;
};

export const success = (hex: string, light: string = "#fff", dark: string = "#000") => {
	//:root, [data-bs-theme=light]
	const baseColor = "#198754"; //--bs-success
	const rgb = getRGBString(hex); //--bs-success-rgb

	//.btn-success
	const btn = createButtonVars(baseColor, hex, light, dark, "#157347", "#146c43", "#146c43", "#13653f");

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
	const bsTable = createTableVars(baseColor, hex, light, dark, "#d1e7dd", "#bcd0c7", "#c7dbd2", "#bcd0c7", "#c1d6cc");

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

		${tableCss("success", bsTable)}

		.form-control.is-valid, .was-validated .form-control:valid {
			background-image: ${formControlValidImg};
		}

		.form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"], .was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"]{
			--bs-form-select-bg-icon: ${bsFormSelectBgIcon};
		}
		
		${buttonCss("success", hex, btn, rgb)}
	`;
};

export const primary = (hex: string, light: string = "#fff", dark: string = "#000") => {
	//:root, [data-bs-theme=light]
	const baseColor = "#0d6efd"; //--bs-primary
	const rgb = getRGBString(hex); //--bs-primary-rgb
	const bsFocusBorder = calcHex(baseColor, "#86b7fe", hex); //form-control-focus

	//.btn-primary
	const btn = createButtonVars(baseColor, hex, light, dark, "#0b5ed7", "#0a58ca", "#0a58ca", "#0a53be");
	const { btnColor } = btn;

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
	const bsTable = createTableVars(baseColor, hex, light, dark, "#cfe2ff", "#bacbe6", "#c5d7f2", "#bacbe6", "#bfd1ec");

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

		${tableCss("primary", bsTable)}

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

		.form-range::-moz-range-thumb:active {
			background-color: rgba(${rgb},.75);
		}
 
		.form-range::-webkit-slider-thumb:active {
			background-color: rgba(${rgb},.75);
		}

		.form-range::-ms-thumb:active {
			background-color: rgba(${rgb},.75);
		}

		.form-range::-ms-fill-lower:active {
			background-color: rgba(${rgb},.75);
		}

		.form-range::-ms-fill-upper:active {
			background-color: rgba(${rgb},.75);
		}

		.dropdown-item {
			--bs-dropdown-link-active-bg: ${hex};
		}

		.list-group {
			--bs-list-group-active-bg: ${hex};
			--bs-list-group-active-border-color: ${hex};
		}


		${buttonCss("primary", hex, btn, rgb)}

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

/**
 * Calculates the body text color for light and dark themes based on the given accent color hex value.
 * Uses a base body background color and default body text colors for light and dark themes.
 * Returns an object with the calculated hex values for light and dark body text colors.
 */
export const getBodyColor = (hex: string) => {
	const baseColor = "#ffffff"; //--bs-body-bg
	const bsBodyColor = calcHex(baseColor, "#212529", hex); //--bs-body-color
	const bsDarkBodyColor = calcHex(baseColor, "#dee2e6", hex); //--bs-body-color

	return { light: bsBodyColor, dark: bsDarkBodyColor };
};

/**
 * Applies CSS rules to the document by creating or updating a style element.
 *
 * Accepts the CSS string to apply and an optional ID of an existing element to update.
 * If no ID is provided, it will create a new style element with a default ID.
 * Checks if an element with the ID already exists, and either updates it or creates a new one.
 */
export const apply = (css: string, id?: string) => {
	id ??= "bsts-custom-var-container";

	let bstsCustomVarContainer = document.getElementById(id);
	if (!bstsCustomVarContainer) {
		appendChild(document.head, new style({ id: id }, css));
	} else {
		replaceWith(bstsCustomVarContainer, new style({ id: id }, css));
	}
};
