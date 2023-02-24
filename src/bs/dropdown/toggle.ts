import { IElem, isAttr } from "../../core/base/tag.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { span } from "../../ht/span.js";
import { button, IAttrBSButton } from "../button.js";

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
			class: [
				"dropdown-toggle",
				attr.split ? "dropdown-toggle-split" : "",
			],
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
		attr.elem = new span({
			class: "visually-hidden",
			elem: attr.elem || "Toggle dropdown",
		});
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
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSDropdownToggle>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(mergeObject({ elem: arg[1] }, arg[0])));
		}
	}
}
