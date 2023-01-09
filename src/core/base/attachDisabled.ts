import { addIntoClassList } from "../fn/addIntoClassList.js";
import { attachFn } from "./index.js";

export const attachDisabled: attachFn = (key, elem, attr) => {
	if (key === "disabled" && attr[key] === true) {
		if (attr && typeof attr.disabled !== "undefined") {
			if (attr.disabled === true) {
				elem = addIntoClassList(elem, "disabled");
				elem.setAttribute("aria-disabled", "true");
				elem.setAttribute("disabled", "disabled");
				elem.setAttribute("tabindex", "-1");
			}

			delete attr.disabled;
		}
	}

	return { attr, elem };
};
