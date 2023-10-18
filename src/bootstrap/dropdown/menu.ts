import { elem } from "../../interface/core/elem.js";
import { div } from "../../html/div.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { menu as Menu } from "../../interface/bootstrap/dropdown/menu.js";

const convert = (attr: Menu) => {
	attr = mergeObject(
		{
			class: [
				"dropdown-menu",
				attr.customStyle ? `custom-style-${attr.customStyle}` : undefined,
				attr.debug ? "debug" : undefined,
			],

			data: {
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
		},
		attr
	);

	attr.dropdownMenuPositionView = attr.dropdownMenuPositionView || attr.positionView;

	delete attr.viewOffset;
	delete attr.reference;
	delete attr.autoClose;

	delete attr.boundary;
	delete attr.positioning;
	delete attr.popperConfig;

	delete attr.positioning;
	delete attr.positionView;
	delete attr.debug;

	delete attr.customStyle;

	return attr;
};

export class menu extends div {
	constructor();
	constructor(attr: Menu);
	constructor(elem: elem | elem[]);
	constructor(attr: Menu, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Menu>("elem", arg)));
	}
}
