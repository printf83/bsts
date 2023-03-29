import { IElem } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { UUID } from "../../../core/uuid.js";
import { button as TButton, IAttrTagButton } from "../../../html/button.js";

export interface IAttrBSNavButton extends IAttrTagButton {
	role?: "tab" | "button";
	toggle?: "dropdown" | "pill" | "tab";
	target?: string;
	active?: boolean;
}

const convert = (attr: IAttrBSNavButton) => {
	switch (attr.toggle) {
		case "dropdown":
			attr.role ??= "button";
			break;
		case "pill":
		case "tab":
			attr.role ??= "tab";
			break;
		default:
		// attr.role ??= "tab";
		// attr.toggle ??= "tab";
	}

	attr = mergeObject(
		{
			id: attr.id || UUID(),
			class: [
				"nav-link",
				attr.active ? "active" : undefined,
				attr.toggle === "dropdown" ? "dropdown-toggle" : undefined,
			],
			aria: {
				selected: attr.active ? "true" : "false",
			},
			role: attr.role,
			data: {
				"bs-target": attr.target,
				"bs-toggle": attr.toggle,
			},
		},
		attr
	);

	delete attr.active;
	delete attr.toggle;
	delete attr.target;

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
