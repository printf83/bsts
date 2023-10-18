import { elem } from "../../interface/core/elem.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { a } from "../../html/a.js";
import { visuallyhidden } from "../visuallyhidden.js";
import { buttonLink as ButtonLink } from "../../interface/bootstrap/dropdown/buttonLink.js";

const convert = (attr: ButtonLink) => {
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
			textDecoration: "none",
			display: "block",
			linkColor: attr.color,
		},
		attr
	);

	if (attr.split) {
		attr.elem = new visuallyhidden(attr.elem || "Toggle dropdown");
	} else {
		attr.elem ??= "Dropdown";
	}

	delete attr.color;
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

export class buttonLink extends a {
	constructor();
	constructor(attr: ButtonLink);
	constructor(elem: elem | elem[]);
	constructor(attr: ButtonLink, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<ButtonLink>("elem", arg)));
	}
}
