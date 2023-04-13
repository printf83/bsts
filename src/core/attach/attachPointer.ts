import { IAttr } from "../tag.js";
import { IAttachFn } from "./_index.js";

interface IAttrPointer extends IAttr {
	href?: string;
}

export const attachPointer: IAttachFn = (key, elem, attr: IAttrPointer) => {
	if (key === "pointer") {
		if (attr && attr.pointer === true) {
			if (!elem.getAttribute("role")) {
				elem.setAttribute("role", "button");
			}

			delete attr.pointer;
		}
	}

	return { attr, elem };
};
