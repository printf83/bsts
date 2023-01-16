import { bootstrapType } from "../core/base/bootstrap.js";
import { IElem } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "../tag/div.js";
import { IAttrTagLabel, label as TLabel } from "../tag/label.js";
import { span } from "../tag/span.js";
import { IAttrBSIcon, icon } from "./icon.js";

export interface IAttrBSLabel extends IAttrTagLabel {
	icon?: IAttrBSIcon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconVisible?: bootstrapType.viewport[number];
	labelVisible?: bootstrapType.viewport[number];
}

const fnRow = (elem: IElem) => {
	return new div({ row: true }, new div({ col: true, textAlign: "center" }, elem));
};

const fnIcon = (attr: IAttrBSIcon) => {
	return new icon(mergeObject<IAttrBSIcon>(typeof attr === "string" ? { icon: attr } : attr, { weight: "xl" }));
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
					e = new div({ display: "flex", gap: 2, alignItem: "center" }, [new icon(attr.icon), text]);
					break;
				case "end":
					e = new div({ display: "flex", gap: 2, alignItem: "center" }, [text, new icon(attr.icon)]);
					break;
				case "top":
					e = new div({ display: "inline-block" }, [fnRow(fnIcon(attr.icon)), fnRow(text)]);
					break;
				case "bottom":
					e = new div({ display: "inline-block" }, [fnRow(text), fnRow(fnIcon(attr.icon))]);
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
