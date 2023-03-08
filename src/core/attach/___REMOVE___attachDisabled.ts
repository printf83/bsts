import { IAttr } from "../base/tag.js";
import { addClassIntoElement } from "../fn/addClassIntoElement.js";
import { IAttachFn } from "./_index.js";

interface IAttrDisabled extends IAttr {
	disabled?: boolean;
}

export const attachDisabled: IAttachFn = (key, elem, attr: IAttrDisabled) => {
	if (key === "disabled" && attr[key] === true) {
		if (attr && typeof attr.disabled !== "undefined") {
			if (attr.disabled === true) {
				elem = addClassIntoElement(elem, "disabled");
				elem.setAttribute("aria-disabled", "true");
				elem.setAttribute("disabled", "disabled");
				elem.setAttribute("tabindex", "-1");
			}

			delete attr.disabled;
		}
	}

	return { attr, elem };
};
