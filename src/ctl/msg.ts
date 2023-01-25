import { IAttr, IElem, isAttr } from "../core/base/tag.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "../tag/div.js";
import { IAttrTagLabel, label as TLabel } from "../tag/label.js";
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

const fnElem = (elem: IElem) => {
	return new div({ display: "flex", alignItem: "center" }, elem);
};

const convert = (attr: IAttrBSMsg) => {
	let tElem: IElem;
	let tAttr: IAttrBSMsg = attr;

	if (attr && typeof attr.icon !== "undefined") {
		if (attr.elem) {
			//default position
			attr.iconPosition = attr.iconPosition || "start";

			//append icon base on position
			switch (attr.iconPosition) {
				case "start":
					tElem = new div({ display: "flex", gap: 3 }, [
						fnIcon(attr.iconContainer, attr.icon),
						fnElem(attr.elem),
					]);
					break;
				case "end":
					tElem = new div({ display: "flex", gap: 3 }, [
						fnElem(attr.elem),
						fnIcon(attr.iconContainer, attr.icon),
					]);
					break;
				case "top":
					tElem = new div({ display: "inline-block", gap: 3 }, [
						fnRow(fnIcon(attr.iconContainer, attr.icon)),
						fnRow(fnElem(attr.elem)),
					]);
					break;
				case "bottom":
					tElem = new div({ display: "inline-block", gap: 3 }, [
						fnRow(fnElem(attr.elem)),
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
		if (attr.elem) {
			tElem = attr.elem;
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
	constructor(attr: IAttrBSMsg); //#2
	constructor(elem: IElem); //#3
	constructor(icon: IAttrBSIcon, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			let { elem, attr } = convert({});
			super(attr, elem);
		} else if (arg.length === 1) {
			if (isAttr(arg[0])) {
				//#2
				let { elem, attr } = convert(arg[0]);
				super(attr, elem);
			} else {
				//#3
				let { elem, attr } = convert(mergeObject({ elem: arg[0] }, {}));
				super(attr, elem);
			}
		} else if (arg.length === 2) {
			//#4
			let { elem, attr } = convert(mergeObject({ icon: arg[0], elem: arg[1] }, {}));
			super(attr, elem);
		}
	}
}
