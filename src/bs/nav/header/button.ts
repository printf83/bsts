import { IElem, isAttr } from "../../../core/base/tag.js";
import { mergeObject } from "../../../core/fn/mergeObject.js";
import { UUID } from "../../../core/fn/uuid.js";
import { button as TButton, IAttrTagButton } from "../../../ht/button.js";

export interface IAttrBSNavButton extends IAttrTagButton {
	active?: boolean;
	target?: string;
	control?: string;
	role?: "tab";
}

const convert = (attr: IAttrBSNavButton): IAttrTagButton => {
	attr = mergeObject(
		{
			id: attr.id || UUID(),
			class: ["nav-link", attr.active ? "active" : ""],
			aria: {
				controls: attr.control,
				selected: attr.active ? "true" : "false",
			},
			role: "tab",
			data: { "bs-target": attr.target, "bs-toggle": "tab" },
		},
		attr
	);

	delete attr.active;

	return attr;
};

export class button extends TButton {
	constructor(); //#1
	constructor(attr: IAttrBSNavButton); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSNavButton, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({ elem: "Button" }));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSNavButton>(arg[0])) {
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
