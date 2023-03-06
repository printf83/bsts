import { IElem, isAttr } from "../../../core/base/tag.js";
import { mergeObject } from "../../../core/fn/mergeObject.js";
import { UUID } from "../../../core/fn/uuid.js";
import { button as TButton, IAttrBSButton } from "../../button.js";

export interface IAttrBSNavButton extends IAttrBSButton {
	target?: string;
	control?: string;
}

const convert = (attr: IAttrBSNavButton): IAttrBSButton => {
	attr = mergeObject(
		{
			id: attr.id || UUID(),
			class: ["nav-link"],
			href: attr.href || "#",
			aria: {
				controls: attr.control,
				selected: attr.active ? "true" : "false",
			},
			toggle: true,
			role: "tab",
			data: { "bs-target": attr.target },
		},
		attr
	);

	delete attr.active;
	delete attr.disabled;

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
			super(convert({ elem: "Dropdown item" }));
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
