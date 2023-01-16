import { bootstrapType } from "../core/base/bootstrap.js";
import { IElem } from "../core/base/tag.js";
import { IAttrTagLabel, label as TLabel } from "../tag/label.js";
import { span } from "../tag/span.js";
import { IAttrBSIcon, icon } from "./icon.js";

export interface IAttrBSLabel extends IAttrTagLabel {
	icon?: IAttrBSIcon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconVisible?: bootstrapType.viewport[number];
	labelVisible?: bootstrapType.viewport[number];
}

const convert = (attr: IAttrBSLabel, text: string) => {
	let e: IElem;
	let a: IAttrBSLabel = attr;

	if (attr && typeof attr.icon !== "undefined") {
		if (text) {
			switch (attr.iconPosition) {
				case "start":
					new span();
					e = new span([new icon(attr.icon), text]);
					break;
				case "end":
					e = new span([text, new icon(attr.icon)]);
					break;
				case "top":
					e = new span([new icon(attr.icon), text]);
					break;
				case "bottom":
					e = new span([text, new icon(attr.icon)]);
					break;
				default:
					throw new Error("Unknow iconPosition");
			}
		} else {
			e = new icon(attr.icon);
		}
	} else {
		if (text) {
			e = text;
		} else {
			e = "label";
		}
	}

	delete a.icon;
	delete a.iconPosition;
	delete a.iconVisible;
	delete a.labelVisible;

	return { a, e };
};

export class label extends TLabel {
	constructor(); //#1
	constructor(text: string); //#2
	constructor(attr: IAttrBSLabel, text: string); //#3
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super("Label");
		} else if (arg.length === 1) {
			//#2
			super(arg[0]);
		} else if (arg.length === 2) {
			//#3
			let { e, a } = convert(arg[0], arg[1]);
			super(a, e);
		}
	}
}
