import { bootstrapType, bsConstArg, bsConstArgTag } from "../core/bootstrap.js";
import { IElem, tag } from "../core/tag.js";
import { mergeObject } from "../core/mergeObject.js";
import { IAttrTagButton } from "../html/button.js";

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

const convert = (attr: IAttrBSButton) => {
	if (attr.defColor !== false) {
		attr.color ??= "primary";
	}

	if (attr.href) {
		attr.role ??= "button";
	}

	attr.type ??= "button";

	//add btn class
	//weight,role,toggle
	attr = mergeObject(
		{
			class: [
				attr.color ? "btn" : undefined,
				attr.weight ? `btn-${attr.weight}` : undefined,
				attr.color && attr.outline !== true ? `btn-${attr.color}` : undefined,
				attr.color && attr.outline === true ? `btn-outline-${attr.color}` : undefined,
				attr.disabled && attr.href ? "disabled" : undefined,
				attr.active ? "active" : undefined,
			],
			role: attr.href && attr.role ? attr.role : undefined,
			data: {
				"bs-toggle": attr.toggle ? (attr.toggle === true ? "button" : attr.toggle) : undefined,
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
	delete attr.defColor;

	if (attr.href) {
		if (attr.disabled) {
			delete attr.href;
		}

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
		super(
			bsConstArgTag<IAttrBSButton>("button", "a", (i) => (i.href ? true : false), arg),
			bsConstArg<IAttrBSButton>("elem", convert, arg)
		);
	}
}
