import { addIntoClassList } from "../fn/addIntoClassList.js";
import { IAttachFn, IAttrDisabled } from "./index.js";

export const attachDisabled: IAttachFn = (key, elem, attr: IAttrDisabled) => {
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
