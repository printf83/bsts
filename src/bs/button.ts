import { bootstrapType } from "../core/base/bootstrap.js";
import { IElem, isAttr, tag } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { IAttrTagButton } from "../ht/button.js";

export interface IAttrBSButton extends IAttrTagButton {
	color?: bootstrapType.color[number] | "link";
	outline?: boolean;
	dismiss?: "modal" | "alert" | "offcanvas" | "toast";
	weight?: "lg" | "sm";
	toggle?: true | "button" | "tab" | "modal";
	href?: string;
	role?: "button" | "tab";
	target?: string;

	active?: boolean;
	defColor?: boolean;
}

const convert = (attr: IAttrBSButton): IAttrBSButton => {
	if (attr.defColor !== false) {
		attr.color = attr.color || "primary";
	}

	if (attr.href) {
		attr.role = attr.role || "button";
	}

	//add btn class
	//weight,role,toggle
	attr = mergeObject(
		{
			class: [
				attr.color ? "btn" : "",
				attr.weight ? `btn-${attr.weight}` : "",
				attr.color && attr.outline !== true ? `btn-${attr.color}` : "",
				attr.color && attr.outline === true
					? `btn-outline-${attr.color}`
					: "",
				attr.disabled && attr.href ? "disabled" : "",
				attr.active ? "active" : "",
			],
			role: attr.href && attr.role ? attr.role : undefined,
			data: {
				"bs-toggle": attr.toggle
					? attr.toggle === true
						? "button"
						: attr.toggle
					: undefined,
				"bs-target": attr.target,
				"bs-dismiss": attr.dismiss,
			},
			aria: {
				disabled: attr.disabled && attr.href ? "true" : undefined,
				pressed: attr.active ? "true" : undefined,
			},
			tabindex: attr.disabled && attr.href ? "-1" : undefined,
		},
		attr
	);

	delete attr.color;
	delete attr.outline;
	delete attr.weight;
	delete attr.toggle;
	delete attr.target;
	delete attr.dismiss;

	delete attr.active;

	if (attr.href) {
		delete attr.disabled;
	}

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
