import { bootstrapType } from "../../core/base/bootstrap.js";
import { IAttr, IElem } from "../../core/base/tag.js";
import { conProp } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { div } from "../../ht/div.js";
import { btnclose } from "../btnclose.js";

export interface IAttrBSAlertContainer extends IAttr {
	color?: bootstrapType.color[number];
	role?: string;
	dismissible?: true;
}

const convert = (attr: IAttrBSAlertContainer) => {
	//add default value
	attr.role = attr.role || "alert";
	attr.color = attr.color || "primary";

	//add alert class
	attr = mergeObject(
		{
			class: [
				"alert",
				attr.color ? `alert-${attr.color}` : "",
				attr.dismissible ? "alert-dismissible" : "",
				attr.dismissible ? "fade" : "",
				attr.dismissible ? "show" : "",
			],
			role: attr.role,
		},
		attr
	);

	if (attr.dismissible) {
		attr.elem = attr.elem || [];
		if (!Array.isArray(attr.elem)) attr.elem = [attr.elem];

		attr.elem.push(new btnclose({ data: { "bs-dismiss": "alert" } }));
	}

	delete attr.color;
	delete attr.dismissible;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttrBSAlertContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSAlertContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(conProp<IAttrBSAlertContainer>("elem", convert, arg));
	}
}
