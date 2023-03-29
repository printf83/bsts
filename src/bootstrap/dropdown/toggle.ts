import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { button, IAttrBSButton } from "../button.js";
import { visuallyhidden } from "../visuallyhidden.js";

export interface IAttrBSDropdownToggle extends IAttrBSButton {
	menuOffset?: string;
	menuReference?: "toggle" | "parent";
	menuAutoClose?: "true" | "false" | "auto" | "manual" | "inside" | "outside";
	split?: boolean;
	navItem?: boolean;
}

const convert = (attr: IAttrBSDropdownToggle) => {
	if (attr.menuAutoClose) {
		if (attr.menuAutoClose === "auto") attr.menuAutoClose = "true";
		if (attr.menuAutoClose === "manual") attr.menuAutoClose = "false";
	}

	attr = mergeObject(
		{
			class: [
				"dropdown-toggle",
				attr.split ? "dropdown-toggle-split" : undefined,
				attr.navItem ? "nav-link" : undefined,
			],
			data: {
				"bs-toggle": "dropdown",
				"bs-offset": attr.menuOffset,
				"bs-reference": attr.menuReference,
				"bs-auto-close": attr.menuAutoClose,
			},
			aria: { expanded: "false" },
			defColor: !attr.navItem,
		},
		attr
	);

	if (attr.split) {
		attr.elem = new visuallyhidden(attr.elem || "Toggle dropdown");
	} else {
		attr.elem = attr.elem || "Dropdown";
	}

	delete attr.menuOffset;
	delete attr.menuReference;
	delete attr.menuAutoClose;
	delete attr.split;
	delete attr.navItem;

	return attr;
};

export class toggle extends button {
	constructor(); //#1
	constructor(attr: IAttrBSDropdownToggle); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSDropdownToggle, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSDropdownToggle>("elem", convert, arg));
	}
}
