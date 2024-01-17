import { bsTypeA } from "../../interface/core/bsTypeA.js";

let colorExtendDB: string | undefined = undefined;
/**
 * Generates CSS classes for applying Bootstrap theme colors on :hover, :focus, :active states.
 * Includes background, text and border color utilities.
 */
export const colorExtend = () => {
	if (colorExtendDB) {
		return colorExtendDB;
	} else {
		let textColor = bsTypeA.textColor.map((i) => {
			let ivar = i;
			if (i.indexOf("-emphasis") > -1) {
				ivar = `${i.replace("-emphasis", "")}-text-emphasis`;
			} else if (i === "body-tertiary") {
				ivar = "tertiary-text";
			} else if (i === "body-emphasis") {
				ivar = "emphasis-text";
			} else {
				ivar = `${i}`;
			}

			return { name: i, var: `var(--bs-${ivar})` };
		});

		let bgColor = bsTypeA.bgColor.map((i) => {
			let ivar = i;
			if (i.indexOf("-subtle") > -1) {
				ivar = `${i.replace("-subtle", "")}-bg-subtle`;
			} else if (i === "body-tertiary") {
				ivar = "tertiary-bg";
			} else if (i === "body-emphasis") {
				ivar = "emphasis-bg";
			} else {
				ivar = `${i}`;
			}

			return { name: i, var: `var(--bs-${ivar})` };
		});

		let borderColor = bsTypeA.borderColor.map((i) => {
			let ivar = i;
			if (i.indexOf("-subtle") > -1) {
				ivar = `${i.replace("-subtle", "")}-border-subtle`;
			} else if (i === "body-tertiary") {
				ivar = "tertiary-border";
			} else if (i === "body-emphasis") {
				ivar = "emphasis-border";
			} else {
				ivar = `${i}`;
			}

			return { name: i, var: `var(--bs-${ivar})` };
		});

		colorExtendDB = [
			`
			/* 
			src/core/css/colorExtend.ts 
			--------------------------- */
			`,
			bgColor
				.map((i) => {
					return `.bg-active-${i.name}:active,
					.bg-active-${i.name}.active, 
					.active .bg-active-${i.name} { 
						background-color: ${i.var} !important; 
					}`;
				})
				.join("\n"),
			bgColor
				.map((i) => {
					return `.bg-hover-${i.name}:hover { 
						background-color: ${i.var} !important; 
					}`;
				})
				.join("\n"),
			bgColor
				.map((i) => {
					return `.bg-focus-${i.name}:focus { 
						background-color: ${i.var} !important; 
					}`;
				})
				.join("\n"),
			textColor
				.map((i) => {
					return `.text-active-${i.name}:active, 
					.text-active-${i.name}.active, 
					.active .text-active-${i.name} { 
						color: ${i.var} !important; 
					}`;
				})
				.join("\n"),
			textColor
				.map((i) => {
					return `.text-hover-${i.name}:hover { 
						color: ${i.var} !important; 
					}`;
				})
				.join("\n"),
			textColor
				.map((i) => {
					return `.text-focus-${i.name}:focus { 
						color: ${i.var} !important; 
					}`;
				})
				.join("\n"),
			borderColor
				.map((i) => {
					return `.border-active-${i.name}:active, 
					.border-active-${i.name}.active, 
					.active .border-active-${i.name} { 
						border-color: ${i.var} !important; 
					}`;
				})
				.join("\n"),
			borderColor
				.map((i) => {
					return `.border-hover-${i.name}:hover { 
						border-color: ${i.var} !important; 
					}`;
				})
				.join("\n"),
			borderColor
				.map((i) => {
					return `.border-focus-${i.name}:focus { 
						border-color: ${i.var} !important; 
					}`;
				})
				.join("\n"),
		].join("\n");

		return colorExtendDB;
	}
};
