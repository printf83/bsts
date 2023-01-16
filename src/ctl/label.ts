import { bootstrapType } from "../core/base/bootstrap.js";
import { IBootstrap, IElem } from "../core/base/tag.js";
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
}

const fnRow = (display: IBootstrapTypeDisplay | undefined, elem: IElem) => {
	return new div({ row: true, display: display }, new div({ col: true, textAlign: "center" }, elem));
};

const fnIcon = (display: IBootstrapTypeDisplay | undefined, attr: IAttrBSIcon) => {
	// return new icon(mergeObject<IAttrBSIcon>(typeof attr === "string" ? { icon: attr } : attr, { weight: "2xl" }));
	return new span({ display: display }, new icon(attr!));
};

const fnText = (display: IBootstrapTypeDisplay | undefined, text: string) => {
	return new span({ display: display }, text);
};

const convert = (attr: IAttrBSLabel, text: string) => {
	let e: IElem;
	let a: IAttrBSLabel = attr;

	if (attr && typeof attr.icon !== "undefined") {
		if (text) {
			//default position
			attr.iconPosition = attr.iconPosition || "start";

			//append icon base on position
			switch (attr.iconPosition) {
				case "start":
					e = new div({ display: "flex", gap: 2, alignItem: "center" }, [
						fnIcon(attr.iconDisplay, attr.icon),
						fnText(attr.labelDisplay, text),
					]);
					break;
				case "end":
					e = new div({ display: "flex", gap: 2, alignItem: "center" }, [
						fnText(attr.labelDisplay, text),
						fnIcon(attr.iconDisplay, attr.icon),
					]);
					break;
				case "top":
					e = new div({ display: "inline-block" }, [
						fnRow(attr.iconDisplay, fnIcon(undefined, attr.icon)),
						fnRow(attr.labelDisplay, fnText(undefined, text)),
					]);
					break;
				case "bottom":
					e = new div({ display: "inline-block" }, [
						fnRow(attr.labelDisplay, fnText(undefined, text)),
						fnRow(attr.iconDisplay, fnIcon(undefined, attr.icon)),
					]);
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
	delete a.iconDisplay;
	delete a.labelDisplay;

	return { a, e };
};

export class label extends TLabel {
	constructor(); //#1
	constructor(text: string); //#2
	constructor(icon: string, text: string); //#3
	constructor(attr: IAttrBSLabel, text: string); //#4
	constructor(attr: IAttrBSLabel, icon: string, text: string); //#5
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super("Label");
		} else if (arg.length === 1) {
			//#2
			super(arg[0]);
		} else if (arg.length === 2) {
			if (typeof arg[0] === "string" && typeof arg[1] === "string") {
				//#3
				let { e, a } = convert({ icon: arg[0] as IAttrBSIcon } as IAttrBSLabel, arg[1]);
				super(a, e);
			} else {
				//#4
				let { e, a } = convert(arg[0], arg[1]);
				super(a, e);
			}
		} else if (arg.length === 3) {
			//#5
			let ttt = mergeObject<IAttrBSLabel>(arg[0], { icon: arg[1] as IAttrBSIcon });
			let { e, a } = convert(ttt, arg[2]);
			super(a, e);
		}
	}
}
