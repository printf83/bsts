import { genBootstrapClass } from "../core/attach/attachBootstrap.js";
import { bootstrapAttachRule, bootstrapBase, bootstrapRuleDB, bootstrapType } from "../core/base/bootstrap.js";
import { IElem } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "../tag/div.js";
import { IAttrTagLabel, label as TLabel } from "../tag/label.js";
import { span } from "../tag/span.js";
import { IAttrBSIcon, icon } from "./icon.js";

type IBootstrapTypeDisplay = bootstrapType.display[number] | bootstrapType.display[number][];

export interface IAttrBSLabel extends IAttrTagLabel {
	icon?: IAttrBSIcon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconDisplay?: IBootstrapTypeDisplay;
	labelDisplay?: IBootstrapTypeDisplay;

	color?: bootstrapType.color[number];
	outline?: boolean;
}

const rules: bootstrapRuleDB = {
	btnColor: new bootstrapAttachRule("btn btn-$1", bootstrapBase.btnColor.concat()),
	btnOutlineColor: new bootstrapAttachRule("btn btn-outline-$1", bootstrapBase.btnOutlineColor.concat()),
};

const fnRow = (display: IBootstrapTypeDisplay | undefined, elem: IElem) => {
	return new div({ row: true, display: display }, new div({ col: true, textAlign: "center" }, elem));
};

const fnIcon = (display: IBootstrapTypeDisplay | undefined, attr: IAttrBSIcon) => {
	return new span({ display: display }, new icon(attr!));
};

const fnText = (display: IBootstrapTypeDisplay | undefined, text: string) => {
	return new span({ display: display }, text);
};

const convert = (attr: IAttrBSLabel, text: string) => {
	let tElem: IElem;
	let tAttr: IAttrBSLabel = attr;

	if (attr && typeof attr.icon !== "undefined") {
		if (text) {
			//default position
			attr.iconPosition = attr.iconPosition || "start";

			//append icon base on position
			switch (attr.iconPosition) {
				case "start":
					tElem = new div({ display: "flex", gap: 2, alignItem: "center" }, [
						fnIcon(attr.iconDisplay, attr.icon),
						fnText(attr.labelDisplay, text),
					]);
					break;
				case "end":
					tElem = new div({ display: "flex", gap: 2, alignItem: "center" }, [
						fnText(attr.labelDisplay, text),
						fnIcon(attr.iconDisplay, attr.icon),
					]);
					break;
				case "top":
					tElem = new div({ display: "inline-block" }, [
						fnRow(attr.iconDisplay, fnIcon(undefined, attr.icon)),
						fnRow(attr.labelDisplay, fnText(undefined, text)),
					]);
					break;
				case "bottom":
					tElem = new div({ display: "inline-block" }, [
						fnRow(attr.labelDisplay, fnText(undefined, text)),
						fnRow(attr.iconDisplay, fnIcon(undefined, attr.icon)),
					]);
					break;
				default:
					throw new Error("Unknow iconPosition");
			}
		} else {
			tElem = new icon(attr.icon);
		}
	} else {
		if (text) {
			tElem = text;
		} else {
			tElem = "Label";
		}
	}

	//check label toggle
	//color & outline
	if (attr.color) {
		if (attr.outline === true) {
			attr.class = mergeClass(
				genBootstrapClass("btnOutlineColor", rules.btnOutlineColor, attr.color),
				attr.class
			);
		} else {
			attr.class = mergeClass(genBootstrapClass("btnColor", rules.btnColor, attr.color), attr.class);
		}
	}

	delete tAttr.icon;
	delete tAttr.iconPosition;
	delete tAttr.iconDisplay;
	delete tAttr.labelDisplay;
	delete tAttr.color;
	delete tAttr.outline;

	return { attr: tAttr, elem: tElem };
};

export class label extends TLabel {
	constructor(); //#1
	constructor(text: string); //#2
	constructor(attr: IAttrBSLabel); //#3
	constructor(icon: string, text: string); //#4

	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super("Label");
		} else if (arg.length === 1) {
			//#2 #3
			super(arg[0]);
		} else if (arg.length === 2) {
			//#4
			let { elem, attr } = convert({ icon: arg[0] as IAttrBSIcon } as IAttrBSLabel, arg[1]);
			super(attr, elem);
		}
	}
}
