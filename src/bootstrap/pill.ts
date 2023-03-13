import { bootstrapType, bsConstArg } from "../core/base/bootstrap.js";
import { IElem } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { IAttrTagLabel, label as TLabel } from "../html/label.js";
import { small } from "../html/small.js";
import { span } from "../html/span.js";
import { IAttrBSIcon, icon } from "./icon.js";

export interface IAttrBSPill extends IAttrTagLabel {
	icon?: IAttrBSIcon;
	iconPosition?: "start" | "end";
	color?: bootstrapType.color[number];
	weight?: "md" | "lg";
}

const fnIcon = (
	color: bootstrapType.color[number] | undefined,
	iconPosition: "start" | "end" | undefined,
	attr: IAttrBSIcon
) => {
	return new span(
		{
			bgOpacity: 50,
			bgColor: color,
			textBgColor: color as bootstrapType.textBgColor[number],
			rounded: iconPosition === "end" ? "end" : "start",
			paddingX: 2,
			paddingY: 1,
		},
		new icon(attr!)
	);
};

const fnElem = (
	color: bootstrapType.color[number] | undefined,
	iconPosition: "start" | "end" | undefined,
	elem: IElem
) => {
	return new span(
		{
			bgColor: color,
			textBgColor: color as bootstrapType.textBgColor[number],
			rounded: iconPosition === "end" ? "start" : "end",
			paddingX: 2,
			paddingY: 1,
		},
		elem
	);
};

const convert = (attr: IAttrBSPill) => {
	let tElem: IElem;
	let tAttr: IAttrBSPill = attr;

	if (attr && typeof attr.icon !== "undefined") {
		if (attr.elem) {
			//default position
			attr.iconPosition = attr.iconPosition || "start";

			//append icon base on position
			switch (attr.iconPosition) {
				case "start":
					tElem = new small({ display: "flex", alignItem: "center" }, [
						fnIcon(attr.color, attr.iconPosition, attr.icon),
						fnElem(attr.color, attr.iconPosition, attr.elem),
					]);
					break;
				case "end":
					tElem = new small({ display: "flex", alignItem: "center" }, [
						fnElem(attr.color, attr.iconPosition, attr.elem),
						fnIcon(attr.color, attr.iconPosition, attr.icon),
					]);
					break;
				default:
					throw new Error("Unknow iconPosition");
			}
		} else {
			tElem = new icon(attr.icon);
		}
	} else {
		if (attr.elem) {
			tElem = attr.elem;
		} else {
			tElem = "Label";
		}
	}

	delete tAttr.icon;
	delete tAttr.iconPosition;
	delete tAttr.color;

	delete attr.elem;

	attr.elem = tElem;

	attr = mergeObject(
		{
			class: ["btn", attr.weight ? (attr.weight === "md" ? undefined : "btn-lg") : "btn-sm"],
			display: "inline-block",
			padding: 0,
		},
		attr
	);

	delete attr.weight;

	return attr;
};

export class pill extends TLabel {
	constructor();
	constructor(text: string);
	constructor(attr: IAttrBSPill);
	constructor(attr: IAttrBSPill, text: string);
	constructor(...arg: any[]) {
		super(bsConstArg("elem", convert, arg));
	}
}
