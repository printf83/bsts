import { IAttr, IElem, isAttr } from "../core/tag.js";
import { div } from "../html/div.js";
import { IAttrTagLabel, label as TLabel } from "../html/label.js";
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
	return new div(containerAttr || { fontSize: 6 }, new icon(attr!));
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
			attr.iconPosition ??= "start";

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

	delete attr.elem;
	attr.elem = tElem;

	return attr;
};

export class msg extends TLabel {
	constructor(); //#1
	constructor(attr: IAttrBSMsg); //#2
	constructor(elem: IElem); //#3
	constructor(icon: string, elem: IElem); //#4
	constructor(icon: IAttrBSIcon, elem: IElem); //#5
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSMsg>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			if (typeof arg[0] === "string") {
				//#4
				super(convert({ icon: { id: arg[0] }, elem: arg[1] }));
			} else {
				//#5
				super(convert({ icon: arg[0], elem: arg[1] }));
			}
		}
	}
}
