import { replaceWith } from "./../fn/builder";
import { camel2Dash } from "../fn/camel2Dash.js";
import { dash2Camel } from "../fn/dash2Camel.js";
import { attachFn } from "./index.js";

export const attachStyle: attachFn = (key, elem, attr) => {
	if (key === "style") {
		if (attr && typeof attr.style !== "undefined") {
			let i = Object.keys(attr.style);
			if (i) {
				for (let x = 0; x < i.length; x++) {
					if (attr.style[i[x]]) {
						if (attr.style[i[x]].indexOf(" !important") > -1) {
							elem.style.setProperty(i[x], attr.style[i[x]].replace(" !important", ""), "important");
						} else {
							elem.style.setProperty(i[x], attr.style[i[x]]);
						}
					}
				}
			}

			delete attr.style;
		}
	}

	return { attr, elem };
};
