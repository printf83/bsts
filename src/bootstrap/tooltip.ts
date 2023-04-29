import { IAttr, IElem, genTagClass } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { span } from "../html/span.js";

export interface IBsTooltip extends IAttr {
	inline?: boolean;
	trigger?: "hover" | "focus" | "click" | ("hover" | "focus" | "click")[];
	content?: string;
	placement?: "auto" | "right" | "left" | "top" | "bottom";
	parent?: string;
	customClass?: string;
	allowHtml?: boolean;

	allowList?: string;
	animation?: boolean;
	boundary?: string;
	showDelay?: string | number;
	hideDelay?: string | number;
	delay?: string | number;
	fallbackPlacement?: "right" | "left" | "top" | "bottom" | ("right" | "left" | "top" | "bottom")[];
	viewOffset?: string | number[];
	popperConfig?: object;
	sanitize?: boolean;
	sanitizeFn?: string;
	selector?: string | false;
	template?: string;
}

const convert = (attr: IBsTooltip) => {
	attr.inline ??= true;

	let JDelay: string | undefined = undefined;
	if (attr.showDelay && attr.hideDelay) {
		JDelay = JSON.stringify({ show: attr.showDelay, hide: attr.hideDelay });
	} else if (attr.showDelay && !attr.hideDelay) {
		JDelay = JSON.stringify({ show: attr.showDelay });
	} else if (!attr.showDelay && attr.hideDelay) {
		JDelay = JSON.stringify({ hide: attr.hideDelay });
	}

	attr = mergeObject<IBsTooltip>(
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
				"bs-html": attr.allowHtml === true ? "true" : undefined,
				"bs-animation": attr.animation === false ? "false" : undefined,
				"bs-allow-list": attr.allowList,
				"bs-boundary": attr.boundary,
				"bs-delay": attr.delay ? attr.delay.toString() : JDelay,
				"bs-fallback-placement": attr.fallbackPlacement
					? Array.isArray(attr.fallbackPlacement)
						? JSON.stringify(attr.fallbackPlacement)
						: attr.fallbackPlacement
					: undefined,
				"bs-offset": attr.viewOffset
					? Array.isArray(attr.viewOffset)
						? JSON.stringify(attr.viewOffset)
						: attr.viewOffset
					: undefined,
				"bs-popper-config": attr.popperConfig ? JSON.stringify(attr.popperConfig) : undefined,
				"bs-sanitize": attr.sanitize ? (attr.sanitize === true ? "true" : "false") : undefined,
				"bs-sanitize-fn": attr.sanitizeFn,
				"bs-selector": attr.selector ? attr.selector : undefined,
				"bs-template": attr.template,
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
	delete attr.allowHtml;

	delete attr.allowList;
	delete attr.animation;
	delete attr.boundary;
	delete attr.showDelay;
	delete attr.hideDelay;
	delete attr.delay;
	delete attr.fallbackPlacement;
	delete attr.viewOffset;
	delete attr.popperConfig;
	delete attr.sanitize;
	delete attr.sanitizeFn;
	delete attr.selector;
	delete attr.template;

	return attr;
};

export class tooltip extends span {
	constructor(); //#1
	constructor(attr: IBsTooltip); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsTooltip, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsTooltip>("elem", arg)));
	}

	static getInstance = (elem: HTMLElement) => {
		return window.bootstrap.Tooltip.getInstance(elem);
	};
	static getOrCreateInstance = (elem: HTMLElement) => {
		return window.bootstrap.Tooltip.getOrCreateInstance(elem);
	};
}

export const Tooltip = (AttrOrElem?: IBsTooltip | IElem, Elem?: IElem) =>
	genTagClass<tooltip, IBsTooltip>(tooltip, AttrOrElem, Elem);
