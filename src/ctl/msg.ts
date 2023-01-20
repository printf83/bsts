import { IAttr, IElem } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "../tag/div.js";
import { IAttrTagLabel, label as TLabel } from "../tag/label.js";
import { span } from "../tag/span.js";
import { IAttrBSIcon, icon } from "./icon.js";

export interface IAttrBSMsg extends IAttrTagLabel {
	icon?: IAttrBSIcon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconContainer?: IAttr;
}

const fnRow = (elem: IElem) => {
	return new div({ row: true }, new div({ col: true, textAlign: "center" }, elem));
};

const fnIcon = (containerAttr: IAttr | undefined, attr: IAttrBSIcon) => {
	return new div(containerAttr || { fontSize: 4 }, new icon(attr!));
};

const fnText = (text: string) => {
	return new div({ display: "flex", alignItem: "center" }, new span(text));
};

const convert = (attr: IAttrBSMsg, text: string) => {
	let tElem: IElem;
	let tAttr: IAttrBSMsg = attr;

	if (attr && typeof attr.icon !== "undefined") {
		if (text) {
			//default position
			attr.iconPosition = attr.iconPosition || "start";

			//append icon base on position
			switch (attr.iconPosition) {
				case "start":
					tElem = new div({ display: "flex", gap: 3 }, [fnIcon(attr.iconContainer, attr.icon), fnText(text)]);
					break;
				case "end":
					tElem = new div({ display: "flex", gap: 3 }, [fnText(text), fnIcon(attr.iconContainer, attr.icon)]);
					break;
				case "top":
					tElem = new div({ display: "inline-block", gap: 3 }, [
						fnRow(fnIcon(attr.iconContainer, attr.icon)),
						fnRow(fnText(text)),
					]);
					break;
				case "bottom":
					tElem = new div({ display: "inline-block", gap: 3 }, [
						fnRow(fnText(text)),
						fnRow(fnIcon(attr.iconContainer, attr.icon)),
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
			tElem = "Message";
		}
	}

	delete tAttr.icon;
	delete tAttr.iconPosition;

	return { attr: tAttr, elem: tElem };
};

export class msg extends TLabel {
	constructor(); //#1
	constructor(text: string); //#2
	constructor(icon: string, text: string); //#3
	constructor(attr: IAttrBSMsg, text: string); //#4
	constructor(attr: IAttrBSMsg, icon: string, text: string); //#5
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
				let { elem, attr } = convert({ icon: arg[0] as IAttrBSIcon } as IAttrBSMsg, arg[1]);
				super(attr, elem);
			} else {
				//#4
				let { elem, attr } = convert(arg[0], arg[1]);
				super(attr, elem);
			}
		} else if (arg.length === 3) {
			//#5
			let ttt = mergeObject<IAttrBSMsg>(arg[0], { icon: arg[1] as IAttrBSIcon });
			let { elem, attr } = convert(ttt, arg[2]);
			super(attr, elem);
		}
	}
}
