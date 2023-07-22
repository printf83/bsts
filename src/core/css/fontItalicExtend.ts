import { bootstrapTypeA } from "../bootstrap.js";

let fontItalicExtendDB: string | undefined = undefined;
export const fontItalicExtend = () => {
	if (fontItalicExtendDB) {
		return fontItalicExtendDB;
	} else {
		//WARNING! BOOTSTRAP HARDCODED FONTITALIC
		let root = `
        :root {
            --bs-fst-italic: italic;
            --bs-fst-normal: normal;
        }
        `;

		let fontItalic = bootstrapTypeA.fontItalic.map((i) => {
			if (i === true) {
				return { name: "italic", var: `var(--bs-fst-italic)` };
			} else {
				return { name: "normal", var: `var(--bs-fst-normal)` };
			}
		});

		fontItalicExtendDB = [
			`
			/* 
			src/core/css/fontItalicExtend.ts 
			-------------------------------- */
			`,
			root,
			fontItalic
				.map((i) => {
					return `.fst-active-${i.name}:active, 
					.fst-active-${i.name}.active, 
					.active .fst-active-${i.name} { 
						font-style: ${i.var} !important; 
					}`;
				})
				.join("\n"),
			fontItalic
				.map((i) => {
					return `.fst-hover-${i.name}:hover { 
						font-style: ${i.var} !important; 
					}`;
				})
				.join("\n"),
			fontItalic
				.map((i) => {
					return `.fst-focus-${i.name}:focus { 
						font-style: ${i.var} !important; 
					}`;
				})
				.join("\n"),
		].join("\n");

		return fontItalicExtendDB;
	}
};
