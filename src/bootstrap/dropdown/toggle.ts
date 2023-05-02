import { genTagClass, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { button, Button } from "../button.js";
import { visuallyhidden } from "../visuallyhidden.js";

export interface Toggle extends Button {
	viewOffset?: string | number[];
	reference?: "toggle" | "parent";
	autoClose?: "true" | "false" | "auto" | "manual" | "inside" | "outside";

	boundary?: string;
	positioning?: "dynamic" | "static";
	popperConfig?: object;

	split?: boolean;
	navItem?: boolean;
}

const convert = (attr: Toggle) => {
	if (attr.autoClose) {
		if (attr.autoClose === "auto") attr.autoClose = "true";
		if (attr.autoClose === "manual") attr.autoClose = "false";
	}

	attr = mergeObject(
		{
			class: [
				"dropdown-toggle",
				attr.split ? "dropdown-toggle-split" : undefined,
				attr.navItem ? "nav-link" : undefined,
			],
			data: {
				"bs-toggle": "dropdown",
				"bs-offset": attr.viewOffset
					? Array.isArray(attr.viewOffset)
						? attr.viewOffset.join(",")
						: attr.viewOffset
					: undefined,
				"bs-reference": attr.reference,
				"bs-auto-close": attr.autoClose,
				"bs-boundary": attr.boundary,
				"bs-positioning": attr.positioning,
				"bs-popper-config": attr.popperConfig ? JSON.stringify(attr.popperConfig) : undefined,
			},
			aria: { expanded: "false" },
			defColor: !attr.navItem,
		},
		attr
	);

	if (attr.split) {
		attr.elem = new visuallyhidden(attr.elem || "Toggle dropdown");
	} else {
		attr.elem ??= "Dropdown";
	}

	delete attr.viewOffset;
	delete attr.reference;
	delete attr.autoClose;
	delete attr.boundary;
	delete attr.positioning;
	delete attr.popperConfig;
	delete attr.split;
	delete attr.navItem;

	return attr;
};

export class toggle extends button {
	constructor(); //#1
	constructor(attr: Toggle); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Toggle, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Toggle>("elem", arg)));
	}
}

export const Toggle = (AttrOrElem?: Toggle | IElem, Elem?: IElem) =>
	genTagClass<toggle, Toggle>(toggle, AttrOrElem, Elem);
