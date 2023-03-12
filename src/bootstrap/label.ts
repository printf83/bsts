import { bootstrapType, bsConstArg } from "../core/base/bootstrap.js";
import { IElem } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { div } from "../html/div.js";
import { IAttrTagLabel, label as TLabel } from "../html/label.js";
import { span } from "../html/span.js";
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

const fnRow = (display: IBootstrapTypeDisplay | undefined, elem: IElem) => {
	return new div({ row: true, display: display }, new div({ col: true, textAlign: "center" }, elem));
};

const fnIcon = (display: IBootstrapTypeDisplay | undefined, attr: IAttrBSIcon) => {
	return new span({ display: display }, new icon(attr!));
};

const fnElem = (display: IBootstrapTypeDisplay | undefined, elem: IElem) => {
	return new span({ display: display }, elem);
};

const convert = (attr: IAttrBSLabel) => {
	let tElem: IElem;
	let tAttr: IAttrBSLabel = attr;

	if (attr && typeof attr.icon !== "undefined") {
		if (attr.elem) {
			//default position
			attr.iconPosition = attr.iconPosition || "start";

			//append icon base on position
			switch (attr.iconPosition) {
				case "start":
					tElem = new div({ display: "flex", gap: 2, alignItem: "center" }, [
						fnIcon(attr.iconDisplay, attr.icon),
						fnElem(attr.labelDisplay, attr.elem),
					]);
					break;
				case "end":
					tElem = new div({ display: "flex", gap: 2, alignItem: "center" }, [
						fnElem(attr.labelDisplay, attr.elem),
						fnIcon(attr.iconDisplay, attr.icon),
					]);
					break;
				case "top":
					tElem = new div({ display: "inline-block" }, [
						fnRow(attr.iconDisplay, fnIcon(undefined, attr.icon)),
						fnRow(attr.labelDisplay, fnElem(undefined, attr.elem)),
					]);
					break;
				case "bottom":
					tElem = new div({ display: "inline-block" }, [
						fnRow(attr.labelDisplay, fnElem(undefined, attr.elem)),
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
		if (attr.elem) {
			tElem = attr.elem;
		} else {
			tElem = "Label";
		}
	}

	//check label toggle
	//color & outline
	if (attr.color) {
		if (attr.outline === true) {
			attr.class = mergeClass(attr.class, ["btn", `btn-outline-${attr.color}`]);
		} else {
			attr.class = mergeClass(attr.class, ["btn", `btn-${attr.color}`]);
		}
	}

	delete tAttr.icon;
	delete tAttr.iconPosition;
	delete tAttr.iconDisplay;
	delete tAttr.labelDisplay;
	delete tAttr.color;
	delete tAttr.outline;

	delete attr.elem;
	attr.elem = tElem;

	return attr;
};

export class label extends TLabel {
	constructor();
	constructor(text: string);
	constructor(attr: IAttrBSLabel);
	constructor(attr: IAttrBSLabel, text: string);
	constructor(...arg: any[]) {
		super(bsConstArg("elem", convert, arg));
	}
}
