import { IElem } from "../../core/base/tag.js";
import { conProp } from "../../core/fn/arg.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { button, IAttrBSButton } from "../button.js";
import { visuallyhidden } from "../visuallyhidden.js";

export interface IAttrBSDropdownToggle extends IAttrBSButton {
	menuOffset?: string;
	menuReference?: "toggle" | "parent";
	menuAutoClose?: "true" | "false" | "auto" | "manual" | "inside" | "outside";
	split?: boolean;
}

const convert = (attr: IAttrBSDropdownToggle): IAttrBSButton => {
	if (attr.menuAutoClose) {
		if (attr.menuAutoClose === "auto") attr.menuAutoClose = "true";
		if (attr.menuAutoClose === "manual") attr.menuAutoClose = "false";
	}

	attr = mergeObject(
		{
			class: ["dropdown-toggle", attr.split ? "dropdown-toggle-split" : ""],
			data: {
				"bs-toggle": "dropdown",
				"bs-offset": attr.menuOffset,
				"bs-reference": attr.menuReference,
				"bs-auto-close": attr.menuAutoClose,
			},
			aria: { expanded: "false" },
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

	return attr;
};

export class toggle extends button {
	constructor(); //#1
	constructor(attr: IAttrBSDropdownToggle); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSDropdownToggle, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(conProp<IAttrBSDropdownToggle>("elem", convert, arg));
	}
}
