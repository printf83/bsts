import { genBootstrapClass } from "../core/attach/attachBootstrap.js";
import { bootstrapAttachRule, bootstrapBase, bootstrapRuleDB, bootstrapType } from "../core/base/bootstrap.js";
import { IAttr, IElem, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { IAttrTagLabel, label as TLabel } from "../tag/label.js";
import { span } from "../tag/span.js";
import { IAttrBSIcon, icon } from "./icon.js";

export interface IAttrBSLabel extends IAttr {
	label?: TLabel;
	icon?: icon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconVisible?: bootstrapType.viewport[number];
	labelVisible?: bootstrapType.viewport[number];
}

const convert = (attr: IAttrBSLabel, iconArg?: IAttrBSIcon, labelArg?: TLabel) => {
	let e: IElem;
	let a: IAttrBSLabel = attr;

	if (iconArg) {
		if (labelArg) {
			switch (attr.iconPosition) {
				case "start":
					e = new span([new icon(iconArg), labelArg]);
					break;
				case "end":
					e = new span([labelArg, new icon(iconArg)]);
					break;
				case "top":
					e = new span([new icon(iconArg), labelArg]);
					break;
				case "bottom":
					e = new span([labelArg, new icon(iconArg)]);
					break;
				default:
					throw new Error("Unknow iconPosition");
			}
		} else {
			e = new icon(iconArg);
		}
	} else {
		if (labelArg) {
			e = labelArg;
		} else {
			e = "label";
		}
	}

	delete a.label;
	delete a.icon;
	delete a.iconPosition;
	delete a.iconVisible;
	delete a.labelVisible;

	return { e, a };
};

export class label extends TLabel {
	constructor(); //#1
	constructor(icon: IElem, label: IElem); //#2
	constructor(elem: IElem); //#2
	constructor(attr: IAttrBSLabel, elem: IElem); //#3
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super({ class: "btn btn-primary" }, "Button");
		} else if (arg.length === 1) {
			//#2
			let res = convert();
			super("button", { class: "btn btn-primary" }, arg[0]);
		} else if (arg.length === 2) {
			//#3
			super(convert(arg[0]), arg[1]);
		}
	}
}
