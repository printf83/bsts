import { IAttr, IElem } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { span } from "../html/span.js";

export interface IBsTooltip extends IAttr {
	inline?: boolean;
	trigger?: "hover" | "focus" | "click" | ("hover" | "focus" | "click")[];
	content?: string;
	placement?: "right" | "left" | "top" | "bottom";
	customClass?: string;
	parent?: string;
}

const convert = (attr: IBsTooltip) => {
	attr.inline ??= true;

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
	constructor(attr: IBsTooltip); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsTooltip, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IBsTooltip>("elem", convert, arg));
	}

	static getInstance = (elem: HTMLElement) => {
		return window.bootstrap.Tooltip.getInstance(elem);
	};
	static getOrCreateInstance = (elem: HTMLElement) => {
		return window.bootstrap.Tooltip.getOrCreateInstance(elem);
	};
}
