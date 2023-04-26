import { IAttr, IElem, genTagClass } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { span } from "../html/span.js";

export interface IBsPopover extends IAttr {
	inline?: boolean;
	trigger?: "hover" | "focus" | "click" | ("hover" | "focus" | "click")[];
	title?: string;
	content?: string;
	placement?: "right" | "left" | "top" | "bottom";
	customClass?: string;
	parent?: string;
}

const convert = (attr: IBsPopover) => {
	attr.inline ??= true;
	attr.parent ??= "body";

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
	constructor(attr: IBsPopover); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsPopover, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsPopover>("elem", arg)));
	}

	static getInstance = (elem: HTMLElement) => {
		return window.bootstrap.Popover.getInstance(elem);
	};
	static getOrCreateInstance = (elem: HTMLElement) => {
		return window.bootstrap.Popover.getOrCreateInstance(elem);
	};
}

export const Popover = (AttrOrElem?: IBsPopover | IElem, Elem?: IElem) =>
	genTagClass<popover, IBsPopover>(popover, AttrOrElem, Elem);
