import { IElem } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { UUID } from "../../../core/uuid.js";
import { button as TButton, IAttrTagButton } from "../../../html/button.js";

export interface IAttrBSNavButton extends IAttrTagButton {
	active?: boolean;
	target?: string;
	role?: "tab";
}

const convert = (attr: IAttrBSNavButton) => {
	attr = mergeObject(
		{
			id: attr.id || UUID(),
			class: ["nav-link", attr.active ? "active" : undefined],
			aria: {
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
		super(bsConstArg<IAttrBSNavButton>("elem", convert, arg));
	}
}
