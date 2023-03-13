import { bootstrapType, bsConstArg } from "../core/base/bootstrap.js";
import { IAttr, IElem } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "../html/div.js";
import { small } from "../html/small.js";
import { span } from "../html/span.js";
import { IAttrBSIcon, icon } from "./icon.js";

export interface IAttrBSPill extends IAttr {
	icon?: IAttrBSIcon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	color?: bootstrapType.color[number];
	weight?: "md" | "lg";
}

const fnRow = (elem: IElem) => {
	return new div({ row: true }, new div({ col: true, textAlign: "center" }, elem));
};

const fnIcon = (
	color: bootstrapType.color[number] | undefined,
	iconPosition: "start" | "end" | "top" | "bottom" | undefined,
	rounded: bootstrapType.rounded[number] | undefined,
	attr: IAttrBSIcon
) => {
	let r: bootstrapType.rounded[number];
	let n: number = typeof rounded === "number" ? rounded : 1;

	switch (iconPosition) {
		case "end":
			r = `end-${n}` as bootstrapType.rounded[number];
			attr.weight = attr.weight || "sm";
			break;
		case "start":
			r = `start-${n}` as bootstrapType.rounded[number];
			attr.weight = attr.weight || "sm";
			break;
		case "top":
			r = `top-${n}` as bootstrapType.rounded[number];
			attr.weight = attr.weight || "2xl";
			break;
		case "bottom":
			r = `bottom-${n}` as bootstrapType.rounded[number];
			attr.weight = attr.weight || "2xl";
			break;
		default:
			r = `start-${n}` as bootstrapType.rounded[number];
	}

	if (rounded === false) {
		r = false;
	}

	return new span(
		{
			bgOpacity: 75,
			bgColor: color,
			textBgColor: color as bootstrapType.textBgColor[number],
			rounded: r,
			paddingX: 2,
			paddingY: iconPosition === "top" || iconPosition === "bottom" ? 3 : 1,
			display: iconPosition === "top" || iconPosition === "bottom" ? "block" : undefined,
		},
		new icon(attr!)
	);
};

const fnElem = (
	color: bootstrapType.color[number] | undefined,
	iconPosition: "start" | "end" | "top" | "bottom" | undefined,
	rounded: bootstrapType.rounded[number] | undefined,
	elem: IElem
) => {
	let r: bootstrapType.rounded[number];
	let n: number = typeof rounded === "number" ? rounded : 1;

	switch (iconPosition) {
		case "end":
			r = `start-${n}` as bootstrapType.rounded[number];
			break;
		case "start":
			r = `end-${n}` as bootstrapType.rounded[number];
			break;
		case "top":
			r = `bottom-${n}` as bootstrapType.rounded[number];
			break;
		case "bottom":
			r = `top-${n}` as bootstrapType.rounded[number];
			break;
		default:
			r = `end-${n}` as bootstrapType.rounded[number];
	}

	if (rounded === false) {
		r = false;
	}

	return new span(
		{
			bgColor: color,
			textBgColor: color as bootstrapType.textBgColor[number],
			rounded: r,
			paddingX: 2,
			paddingY: 1,
			display: iconPosition === "top" || iconPosition === "bottom" ? "block" : undefined,
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
						fnIcon(attr.color, attr.iconPosition, attr.rounded, attr.icon),
						fnElem(attr.color, attr.iconPosition, attr.rounded, attr.elem),
					]);
					break;
				case "end":
					tElem = new small({ display: "flex", alignItem: "center" }, [
						fnElem(attr.color, attr.iconPosition, attr.rounded, attr.elem),
						fnIcon(attr.color, attr.iconPosition, attr.rounded, attr.icon),
					]);
					break;
				case "top":
					tElem = new div({ display: "inline-block" }, [
						fnRow(fnIcon(attr.color, attr.iconPosition, attr.rounded, attr.icon)),
						fnRow(fnElem(attr.color, attr.iconPosition, attr.rounded, attr.elem)),
					]);
					break;
				case "bottom":
					tElem = new div({ display: "inline-block" }, [
						fnRow(fnElem(attr.color, attr.iconPosition, attr.rounded, attr.elem)),
						fnRow(fnIcon(attr.color, attr.iconPosition, attr.rounded, attr.icon)),
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
	delete tAttr.rounded;

	delete attr.elem;

	attr.elem = tElem;

	attr = mergeObject(
		{
			// class: ["btn", attr.weight ? (attr.weight === "md" ? undefined : "btn-lg") : "btn-sm"],
			display: "inline-block",
			// padding: 0,
			fontSize: attr.weight ? (attr.weight === "md" ? 5 : 4) : 6,
		},
		attr
	);

	delete attr.weight;

	return attr;
};

export class pill extends small {
	constructor();
	constructor(text: string);
	constructor(attr: IAttrBSPill);
	constructor(attr: IAttrBSPill, text: string);
	constructor(...arg: any[]) {
		super(bsConstArg("elem", convert, arg));
	}
}
