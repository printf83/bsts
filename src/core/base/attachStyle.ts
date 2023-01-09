import { attachFn } from "./index.js";

export const attachStyle: attachFn = (key, elem, attr) => {
	if (key === "style") {
		if (attr && typeof attr.style !== "undefined") {
			let i = Object.keys(attr.style);

			if (i) {
				type baseStyleType = keyof typeof attr.style;

				for (let x = 0; x < i.length; x++) {
					let k = i[x] as baseStyleType;

					if (attr.style[k]) {
						if (attr.style[k]!.indexOf(" !important") > -1) {
							elem.style.setProperty(i[x], attr.style[k]!.replace(" !important", ""), "important");
						} else {
							elem.style.setProperty(i[x], attr.style[k]!);
						}
					}
				}
			}

			delete attr.style;
		}
	}

	return { attr, elem };
};
