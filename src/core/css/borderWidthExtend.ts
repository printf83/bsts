import { bsTypeA } from "../../interface/core/bsTypeA.js";

let borderWidthExtendDB: string | undefined = undefined;
/**
 * Extends Bootstrap's border width variables and classes for active, hover and focus states.
 *
 * Defines CSS custom properties for border widths from 1-5px.
 * Generates utility classes like `.border-active-3` for applying a 3px border on active state.
 * Allows control of border width on interaction states independently of static border width.
 */
export const borderWidthExtend = () => {
	if (borderWidthExtendDB) {
		return borderWidthExtendDB;
	} else {
		//WARNING! BOOTSTRAP HARDCODED FONTWEIGHT

		let root = `
        :root {
            --bs-border-5: 5px;
            --bs-border-4: 4px;
            --bs-border-3: 3px;
            --bs-border-2: 2px;
            --bs-border-1: 1px;
			--bs-border-5-margin: -4px;
			--bs-border-4-margin: -3px;
			--bs-border-3-margin: -2px;
			--bs-border-2-margin: -1px;
			--bs-border-1-margin: 0px;
        }
        `;

		let borderWidth = bsTypeA.borderWidth.map((i) => {
			return { name: i, var: `var(--bs-border-${i})`, varMargin: `var(--bs-border-${i}-margin)` };
		});

		borderWidthExtendDB = [
			`
			/* 
			src/core/css/borderWidthExtend.ts 
			--------------------------------- */
			`,
			root,
			borderWidth
				.map((i) => {
					return `.border-active-${i.name}:active, 
					.border-active-${i.name}.active, 
					.active .border-active-${i.name} { 
						border-width: ${i.var} !important; 
						margin: ${i.varMargin} !important;
					}`;
				})
				.join("\n"),
			borderWidth
				.map((i) => {
					return `.border-hover-${i.name}:hover { 
						border-width: ${i.var} !important; 
						margin: ${i.varMargin} !important;
					}`;
				})
				.join("\n"),
			borderWidth
				.map((i) => {
					return `.border-focus-${i.name}:focus { 
						border-width: ${i.var} !important; 
						margin: ${i.varMargin} !important;
					}`;
				})
				.join("\n"),
		].join("\n");

		return borderWidthExtendDB;
	}
};
