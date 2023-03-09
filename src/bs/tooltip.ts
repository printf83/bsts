import { IAttr, IElem } from "../core/base/tag.js";
import { conElem } from "../core/fn/arg.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { span } from "../ht/span.js";

export interface IAttrBSPopover extends IAttr {
	inline?: boolean;
	trigger?: "hover" | "focus" | "click" | ("hover" | "focus" | "click")[];
	content?: string;
	placement?: "right" | "left" | "top" | "bottom";
	customClass?: string;
	parent?: string;
}

const convert = (attr: IAttrBSPopover) => {
	attr = mergeObject(
		{
			display: attr.inline ? "inline-block" : undefined,
			tabindex: "0",
			data: {
				"bs-toggle": "tooltip",
				"bs-custom-class": attr.customClass,
				"bs-title": attr.content,
				"bs-container": attr.parent,
				"bs-placement": attr.placement,
				"bs-trigger": attr.trigger
					? Array.isArray(attr.trigger)
						? attr.trigger.join(" ")
						: attr.trigger
					: undefined,
			},
		},
		attr
	);

	delete attr.inline;
	delete attr.trigger;
	delete attr.content;
	delete attr.placement;
	delete attr.customClass;
	delete attr.parent;

	return attr;
};

export class tooltip extends span {
	constructor(); //#1
	constructor(attr: IAttrBSPopover); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSPopover, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(conElem<IAttrBSPopover>(convert, arg));
	}
}
