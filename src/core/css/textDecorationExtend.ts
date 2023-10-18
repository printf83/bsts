import { bsTypeA } from "../../interface/core/bsTypeA.js";

let textDecorationExtendDB: string | undefined = undefined;
export const textDecorationExtend = () => {
	if (textDecorationExtendDB) {
		return textDecorationExtendDB;
	} else {
		//WARNING! BOOTSTRAP HARDCODED FONTWEIGHT

		let root = `
        :root {
            --bs-text-decoration-underline: underline;
            --bs-text-decoration-line-through: line-through;
            --bs-text-decoration-none: none;
        }
        `;

		let textDecoration = bsTypeA.textDecoration.map((i) => {
			return { name: i, var: `var(--bs-text-decoration-${i})` };
		});

		textDecorationExtendDB = [
			`
			/* 
			src/core/css/textDecorationExtend.ts 
			------------------------------------ */
			`,
			root,
			textDecoration
				.map((i) => {
					return `.text-decoration-active-${i.name}:active, 
					.text-decoration-active-${i.name}.active, 
					.active .text-decoration-active-${i.name} { 
						text-decoration: ${i.var} !important; 
					}`;
				})
				.join("\n"),
			textDecoration
				.map((i) => {
					return `.text-decoration-hover-${i.name}:hover { 
						text-decoration: ${i.var} !important; 
					}`;
				})
				.join("\n"),
			textDecoration
				.map((i) => {
					return `.text-decoration-focus-${i.name}:focus { 
						text-decoration: ${i.var} !important; 
					}`;
				})
				.join("\n"),
		].join("\n");

		return textDecorationExtendDB;
	}
};
