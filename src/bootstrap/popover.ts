import { IAttr, IElem, genTagClass } from "../core/tag.js";
import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { span } from "../html/span.js";

export interface Popover extends IAttr {
	inline?: boolean;
	trigger?: "hover" | "focus" | "click" | ("hover" | "focus" | "click")[];
	title?: string;
	content?: string;
	placement?: "right" | "left" | "top" | "bottom";
	parent?: string;
	customClass?: string;

	allowHtml?: boolean;
	autoInit?: boolean;
	allowList?: object;
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

const convert = (attr: Popover) => {
	attr.inline ??= true;
	attr.autoInit ??= true;

	let JDelay: string | undefined = undefined;
	if (attr.showDelay && attr.hideDelay) {
		JDelay = JSON.stringify({ show: attr.showDelay, hide: attr.hideDelay });
	} else if (attr.showDelay && !attr.hideDelay) {
		JDelay = JSON.stringify({ show: attr.showDelay });
	} else if (!attr.showDelay && attr.hideDelay) {
		JDelay = JSON.stringify({ hide: attr.hideDelay });
	}
	attr = mergeObject(
		{
			display: attr.inline ? "inline-block" : attr.display,
			tabindex: "0",
			data: {
				"bs-toggle": attr.autoInit ? "popover" : undefined,
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
				"bs-html": attr.allowHtml === true ? "true" : undefined,
				"bs-animation": attr.animation === false ? "false" : undefined,
				"bs-allow-list": JSON.stringify(attr.allowList),
				"bs-boundary": attr.boundary,
				"bs-delay": attr.delay ? attr.delay.toString() : JDelay,
				"bs-fallback-placement": attr.fallbackPlacement
					? Array.isArray(attr.fallbackPlacement)
						? attr.fallbackPlacement.join(" ")
						: attr.fallbackPlacement
					: undefined,
				"bs-offset": attr.viewOffset
					? Array.isArray(attr.viewOffset)
						? attr.viewOffset.join(",")
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
	delete attr.title;
	delete attr.content;
	delete attr.placement;
	delete attr.customClass;
	delete attr.parent;
	delete attr.allowHtml;
	delete attr.autoInit;
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

export class popover extends span {
	constructor();
	constructor(attr: Popover);
	constructor(elem: IElem);
	constructor(attr: Popover, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Popover>("elem", arg)));
	}

	static init = (elem: Element | string, options?: Partial<bootstrap.Popover.Options>) => {
		return new window.bootstrap.Popover(elem, options);
	};
	static getInstance = (elem: Element | string) => {
		return window.bootstrap.Popover.getInstance(elem);
	};
	static getOrCreateInstance = (elem: Element | string) => {
		return window.bootstrap.Popover.getOrCreateInstance(elem);
	};
	static disable = (elem: Element | string) => {
		this.getOrCreateInstance(elem)?.disable();
	};
	static dispose = (elem: Element | string) => {
		this.getInstance(elem)?.dispose();
	};
	static enable = (elem: Element | string) => {
		this.getOrCreateInstance(elem)?.enable();
	};
	static hide = (elem: Element | string) => {
		this.getOrCreateInstance(elem)?.hide();
	};
	static show = (elem: Element | string) => {
		this.getOrCreateInstance(elem)?.show();
	};
	static setContent = (elem: Element | string, content?: Record<string, string | Element | null>) => {
		this.getOrCreateInstance(elem)?.setContent(content);
	};
	static toggle = (elem: Element | string) => {
		this.getOrCreateInstance(elem)?.toggle();
	};
	static toggleEnabled = (elem: Element | string) => {
		this.getOrCreateInstance(elem)?.toggleEnabled();
	};
	static update = (elem: Element | string) => {
		this.getOrCreateInstance(elem)?.update();
	};
}

export const Popover = (AttrOrElem?: Popover | IElem, Elem?: IElem) =>
	genTagClass<popover, Popover>(popover, AttrOrElem, Elem);
