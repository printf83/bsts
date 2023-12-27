import { camel2Dash } from "../util/camel2Dash.js";
import { keyOfType } from "../util/keyOfType.js";
import { IAttachFn } from "./_index.js";

/**
 * Attaches inline styles from the 'style' attribute to the element.
 * Loops through the style object keys and sets each property on the element's
 * style object, converting the key to dash-case. Handles important flags.
 */
export const attach: IAttachFn = (key, elem, attr) => {
	let changed = false;
	if (key === "style") {
		if (attr && typeof attr.style !== "undefined") {
			let i = Object.keys(attr.style);

			if (i && i.length > 0) {
				for (let x = 0; x < i.length; x++) {
					let k = keyOfType(i[x], attr.style);

					if (attr.style[k]) {
						if (attr.style[k]!.indexOf(" !important") > -1) {
							(<HTMLElement>elem).style.setProperty(
								camel2Dash(i[x]),
								attr.style[k]!.replace(" !important", ""),
								"important"
							);
						} else {
							(<HTMLElement>elem).style.setProperty(camel2Dash(i[x]), attr.style[k]!);
						}
					}
				}
			}

			changed = true;
		}
	}

	return { attr, elem, changed };
};
