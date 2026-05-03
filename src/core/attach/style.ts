import { camel2Dash } from "../util/camel2Dash.js";
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
			for (const [key, value] of Object.entries(attr.style)) {
				if (value) {
					if (value.includes(" !important")) {
						(<HTMLElement>elem).style.setProperty(
							camel2Dash(key),
							value.replace(" !important", ""),
							"important"
						);
					} else {
						(<HTMLElement>elem).style.setProperty(camel2Dash(key), value);
					}
				}
			}

			changed = true;
		}
	}

	return { attr, elem, changed };
};
