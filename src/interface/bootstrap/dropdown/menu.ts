import { IAttr, IElem } from "../../core/tag.js";
import { bootstrapType } from "../../core/bootstrap.js";
import { div } from "../../html/div.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";

export interface Menu extends IAttr {
	viewOffset?: string | number[];
	reference?: "toggle" | "parent";
	autoClose?: "true" | "false" | "auto" | "manual" | "inside" | "outside";

	boundary?: string;
	positioning?: "dynamic" | "static";
	popperConfig?: object;

	positionView?: bootstrapType.dropdownMenuPositionView | bootstrapType.dropdownMenuPositionView[];
	dropdownMenuPositionView?: bootstrapType.dropdownMenuPositionView | bootstrapType.dropdownMenuPositionView[];

	customStyle?: 1;

	debug?: boolean;
}

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
	constructor(elem: IElem);
	constructor(attr: Menu, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Menu>("elem", arg)));
	}
}
