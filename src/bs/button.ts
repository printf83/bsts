import { bootstrapType } from "../core/base/bootstrap.js";
import { IElem, isAttr, tag } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { IAttrTagButton } from "../ht/button.js";

export interface IAttrBSButton extends IAttrTagButton {
	color?: bootstrapType.color[number] | "link";
	outline?: boolean;
	weight?: "lg" | "sm";
	toggle?: boolean;
	href?: string;
	role?: "button";
}

const convert = (attr: IAttrBSButton): IAttrBSButton => {
	//default button color

	attr.color = attr.color || "primary";
	//add btn class
	//weight,role,toggle
	attr = mergeObject(
		{
			class: [
				"btn",
				attr.weight ? `btn-${attr.weight}` : "",
				attr.color && attr.outline !== true ? `btn-${attr.color}` : "",
				attr.color && attr.outline === true
					? `btn-outline-${attr.color}`
					: "",
			],
			role: attr.href ? "button" : undefined,
			data: {
				"bs-toggle": attr.toggle ? "button" : undefined,
			},
		},
		attr
	);

	delete attr.color;
	delete attr.outline;
	delete attr.weight;
	delete attr.toggle;

	// dont delete
	// delete a.href;
	// delete a.role;

	return attr;
};

export class button extends tag {
	constructor(); //#1
	constructor(attr: IAttrBSButton); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSButton, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super("button", convert({}), "Button");
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSButton>(arg[0])) {
				//#2
				super(arg[0].href ? "a" : "button", convert(arg[0]));
			} else {
				//#3
				super("button", convert({}), arg[0]);
			}
		} else if (arg.length === 2) {
			//#4
			super(arg[0].href ? "a" : "button", convert(arg[0]), arg[1]);
		}
	}
}
