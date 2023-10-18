import { elem } from "../../interface/core/elem.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { button as Tbutton } from "../button.js";
import { visuallyhidden } from "../visuallyhidden.js";
import { button as Button } from "../../interface/bootstrap/dropdown/button.js";

const convert = (attr: Button) => {
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

export class button extends Tbutton {
	constructor();
	constructor(attr: Button);
	constructor(elem: elem);
	constructor(attr: Button, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Button>("elem", arg)));
	}
}
