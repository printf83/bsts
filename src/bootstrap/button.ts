import { bsConstructor, bsConstructorMultiTag } from "../core/bootstrap.js";
import { tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { addEvent } from "../core/util/eventManager.js";
import { bstsConsole as console } from "../core/util/console.js";
import { Button as BSButton } from "bootstrap";
import { button as Button } from "../interface/bootstrap/button.js";

const convert = (attr: Button) => {
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
				attr.stretched && attr.href ? "stretched-link" : undefined,
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

	return attr;
};

export class button extends tag {
	constructor();
	constructor(attr: Button);
	constructor(elem: elem | elem[]);
	constructor(attr: Button, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(
			bsConstructorMultiTag<Button>("elem", "button", "a", (i) => (i.href ? true : false), arg),
			convert(bsConstructor<Button>("elem", arg))
		);
	}

	convert(attr: Button) {
		return super.convert(attr);
	}

	static init = (elem: Element | string) => {
		return button.getOrCreateInstance(elem);
	};
	static getInstance = (elem: Element | string) => {
		return BSButton.getInstance(elem);
	};
	static getOrCreateInstance = (elem: Element | string) => {
		addEvent("destroy", elem, (i) => {
			const target = i.target as Element;

			const m = button.getInstance(target);
			if (m) {
				console.info(`Dispose bootstrap button from $1`, target);
				m.dispose();
			}
		});

		console.info(`Initialize bootstrap button to $1`, elem);
		return BSButton.getOrCreateInstance(elem);
	};
	static toggle = (elem: Element | string) => {
		button.getOrCreateInstance(elem)?.toggle();
	};
	static dispose = (elem: Element | string) => {
		button.getInstance(elem)?.dispose();
	};
}
