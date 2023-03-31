import { IAttr, IElem } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { span } from "../html/span.js";

export interface IAttrBSPopover extends IAttr {
	inline?: boolean;
	trigger?: "hover" | "focus" | "click" | ("hover" | "focus" | "click")[];
	title?: string;
	content?: string;
	placement?: "right" | "left" | "top" | "bottom";
	customClass?: string;
	parent?: string;
}

const convert = (attr: IAttrBSPopover) => {
	attr.inline ??= true;

	attr = mergeObject(
		{
			display: attr.inline ? "inline-block" : attr.display,
			tabindex: "0",
			data: {
				"bs-toggle": "popover",
				"bs-custom-class": attr.customClass,
				"bs-title": attr.title,
				"bs-content": attr.content,
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
	delete attr.title;
	delete attr.content;
	delete attr.placement;
	delete attr.customClass;
	delete attr.parent;

	return attr;
};

export class popover extends span {
	constructor(); //#1
	constructor(attr: IAttrBSPopover); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSPopover, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSPopover>("elem", convert, arg));
	}
}
