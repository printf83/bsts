import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { div } from "../../html/div.js";

export interface IBsToastItem extends IAttr {
	role?: "alert" | "status";
	live?: "assertive" | "polite";
	atomic?: boolean;
	autohide?: boolean;
	delay?: number;
	color?: bootstrapType.color;
	debug?: boolean;
}

const convert = (attr: IBsToastItem) => {
	attr = mergeObject(
		{
			class: ["toast", attr.debug ? "debug" : undefined],
			role: attr.role,
			textBgColor: attr.color,
			border: attr.color ? false : undefined,
			aria: {
				live: attr.live,
				atomic: attr.atomic ? "true" : undefined,
			},
			data: {
				"bs-autohide": attr.autohide === false ? "false" : undefined,
				"bs-delay": attr.delay ? attr.delay.toString() : undefined,
			},
		},
		attr
	);

	delete attr.color;
	delete attr.live;
	delete attr.atomic;
	delete attr.autohide;
	delete attr.delay;
	delete attr.debug;

	return attr;
};

export class item extends div {
	constructor(); //#1
	constructor(attr: IBsToastItem); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsToastItem, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsToastItem>("elem", arg)));
	}
}
