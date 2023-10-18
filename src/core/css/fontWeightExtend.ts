import { bsTypeA } from "../../interface/core/bsTypeA.js";

let fontWeightExtendDB: string | undefined = undefined;
export const fontWeightExtend = () => {
	if (fontWeightExtendDB) {
		return fontWeightExtendDB;
	} else {
		//WARNING! BOOTSTRAP HARDCODED FONTWEIGHT

		let root = `
        :root {
            --bs-fw-bold: 700;
            --bs-fw-bolder: bolder;
            --bs-fw-semibold: 600;
            --bs-fw-medium: 500;
            --bs-fw-normal: 400;
            --bs-fw-light: 300;
            --bs-fw-lighter: lighter;
        }
        `;

		let fontWeight = bsTypeA.fontWeight.map((i) => {
			return { name: i, var: `var(--bs-fw-${i})` };
		});

		fontWeightExtendDB = [
			`
			/* 
			src/core/css/fontWeightExtend.ts 
			-------------------------------- */
			`,
			root,
			fontWeight
				.map((i) => {
					return `.fw-active-${i.name}:active, 
					.fw-active-${i.name}.active, 
					.active .fw-active-${i.name} { 
						font-weight: ${i.var} !important; 
					}`;
				})
				.join("\n"),
			fontWeight
				.map((i) => {
					return `.fw-hover-${i.name}:hover { 
						font-weight: ${i.var} !important; 
					}`;
				})
				.join("\n"),
			fontWeight
				.map((i) => {
					return `.fw-focus-${i.name}:focus { 
						font-weight: ${i.var} !important; 
					}`;
				})
				.join("\n"),
		].join("\n");

		return fontWeightExtendDB;
	}
};
