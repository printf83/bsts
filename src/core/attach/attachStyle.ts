import { camel2Dash } from "../camel2Dash.js";
import { keyOfType } from "./../keyOfType.js";
import { IAttachFn } from "./_index.js";

export const attachStyle: IAttachFn = (key, elem, attr) => {
	if (key === "style") {
		if (attr && typeof attr.style !== "undefined") {
			let i = Object.keys(attr.style);

			if (i) {
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

			delete attr.style;
		}
	}

	return { attr, elem };
};
