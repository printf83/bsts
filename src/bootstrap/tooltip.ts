import { bsConstructor } from "../core/bootstrap.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { span } from "../html/span.js";
import { addEvent } from "../core/util/eventManager.js";
import { bstsConsole as console } from "../core/util/console.js";
import { Tooltip as BSTooltip } from "bootstrap";
import { tooltip as Tooltip } from "../interface/bootstrap/tooltip.js";
import { elem } from "../interface/core/elem.js";

export class tooltip extends span {
	constructor();
	constructor(attr: Tooltip);
	constructor(elem: elem | elem[]);
	constructor(attr: Tooltip, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Tooltip>("elem", arg));
	}

	convert(attr: Tooltip) {
		attr.autoInit ??= true;
		attr.inline ??= true;

		let JDelay: string | undefined = undefined;
		if (attr.showDelay && attr.hideDelay) {
			JDelay = JSON.stringify({ show: attr.showDelay, hide: attr.hideDelay });
		} else if (attr.showDelay && !attr.hideDelay) {
			JDelay = JSON.stringify({ show: attr.showDelay });
		} else if (!attr.showDelay && attr.hideDelay) {
			JDelay = JSON.stringify({ hide: attr.hideDelay });
		}

		attr = mergeObject<Tooltip>(
			{
				display: attr.inline ? "inline-block" : undefined,
				tabindex: "0",
				data: {
					"bs-toggle": attr.autoInit ? "tooltip" : undefined,
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
				on: {
					build: (e) => {
						const target = e.target as Element;
						tooltip.init(target);
					},
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
		return super.convert(attr);
	}

	static init = (elem: Element | string, options?: Partial<BSTooltip.Options>) => {
		return tooltip.getOrCreateInstance(elem, options);
	};
	static getInstance = (elem: Element | string) => {
		return BSTooltip.getInstance(elem);
	};
	static getOrCreateInstance = (elem: Element | string, options?: Partial<BSTooltip.Options>) => {
		addEvent("destroy", elem, (i) => {
			const target = i.target as Element;

			const m = tooltip.getInstance(target);
			if (m) {
				console.info(`Dispose bootstrap tooltip from $1`, target);
				m.hide();
				m.dispose();
			}
		});

		console.info(`Initialize bootstrap tooltip to $1`, elem);
		return BSTooltip.getOrCreateInstance(elem, options);
	};
	static disable = (elem: Element | string) => {
		tooltip.getOrCreateInstance(elem)?.disable();
	};
	static dispose = (elem: Element | string) => {
		tooltip.getInstance(elem)?.dispose();
	};
	static enable = (elem: Element | string) => {
		tooltip.getOrCreateInstance(elem)?.enable();
	};
	static hide = (elem: Element | string) => {
		tooltip.getOrCreateInstance(elem)?.hide();
	};
	static show = (elem: Element | string) => {
		tooltip.getOrCreateInstance(elem)?.show();
	};
	static setContent = (
		elem: Element | string,
		content?: Record<string, string | Element | BSTooltip.SetContentFunction | null>
	) => {
		tooltip.getOrCreateInstance(elem)?.setContent(content);
	};
	static toggle = (elem: Element | string) => {
		tooltip.getOrCreateInstance(elem)?.toggle();
	};
	static toggleEnabled = (elem: Element | string) => {
		tooltip.getOrCreateInstance(elem)?.toggleEnabled();
	};
	static update = (elem: Element | string) => {
		tooltip.getOrCreateInstance(elem)?.update();
	};
}
