import { bootstrapTypeA } from "../bootstrap.js";

let colorExtendDB: string | undefined = undefined;
export const colorExtend = () => {
	if (colorExtendDB) {
		return colorExtendDB;
	} else {
		let textColor = bootstrapTypeA.textColor.map((i) => {
			let ivar = i;
			if (i.indexOf("-emphasis") > -1) {
				ivar = `${i.replace("-emphasis", "")}-text-emphasis`;
			} else {
				ivar = `${i}`;
			}

			return { name: i, var: `var(--bs-${i})` };
		});

		let bgColor = bootstrapTypeA.bgColor.map((i) => {
			let ivar = i;
			if (i.indexOf("-subtle") > -1) {
				ivar = `${i.replace("-subtle", "")}-bg-subtle`;
			} else {
				ivar = `${i}`;
			}

			return { name: i, var: `var(--bs-${i})` };
		});

		let borderColor = bootstrapTypeA.borderColor.map((i) => {
			let ivar = i;
			if (i.indexOf("-subtle") > -1) {
				ivar = `${i.replace("-subtle", "")}-border-subtle`;
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
					return `.bg-active-${i.name}:active, .bg-active-${i.name}.active, .active .bg-active-${i.name} { background-color: ${i.var} !important; }`;
				})
				.join(""),
			bgColor
				.map((i) => {
					return `.bg-hover-${i.name}:hover { background-color: ${i.var} !important; }`;
				})
				.join(""),
			bgColor
				.map((i) => {
					return `.bg-focus-${i.name}:focus { background-color: ${i.var} !important; }`;
				})
				.join(""),
			textColor
				.map((i) => {
					return `.text-active-${i.name}:active, .text-active-${i.name}.active, .active .text-active-${i.name} { color: ${i.var} !important; }`;
				})
				.join(""),
			textColor
				.map((i) => {
					return `.text-hover-${i.name}:hover { color: ${i.var} !important; }`;
				})
				.join(""),
			textColor
				.map((i) => {
					return `.text-focus-${i.name}:focus { color: ${i.var} !important; }`;
				})
				.join(""),
			borderColor
				.map((i) => {
					return `.border-active-${i.name}:active, .border-active-${i.name}.active, .active .border-active-${i.name} { border-color: ${i.var} !important; }`;
				})
				.join(""),
			borderColor
				.map((i) => {
					return `.border-hover-${i.name}:hover { border-color: ${i.var} !important; }`;
				})
				.join(""),
			borderColor
				.map((i) => {
					return `.border-focus-${i.name}:focus { border-color: ${i.var} !important; }`;
				})
				.join(""),
		].join("");

		return colorExtendDB;
	}
};
