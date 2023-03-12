import { IElem } from "../../../core/base/tag.js";
import { conProp } from "../../../core/base/bootstrap.js";
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
		super(conProp<IAttrBSNavButton>("elem", convert, arg));
	}
}
