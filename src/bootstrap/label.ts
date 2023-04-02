import { bootstrapType, bsConstArg } from "../core/bootstrap.js";
import { IElem, isAttr } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";
import { div } from "../html/div.js";
import { IAttrTagLabel, label as TLabel } from "../html/label.js";
import { span } from "../html/span.js";
import { IAttrBSIcon, icon } from "./icon.js";

export type IBootstrapTypeDisplay = bootstrapType.display[number] | bootstrapType.display[number][];

export interface IAttrBSLabel extends IAttrTagLabel {
	icon?: string | IAttrBSIcon | icon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconDisplay?: IBootstrapTypeDisplay;
	labelDisplay?: IBootstrapTypeDisplay;

	stretched?: boolean;
	formCheck?: boolean;

	color?: bootstrapType.color[number];
	outline?: boolean;
}

const fnRow = (display: IBootstrapTypeDisplay | undefined, elem: IElem) => {
	return new div({ row: true, display: display }, new div({ col: true, textAlign: "center" }, elem));
};

const fnIcon = (display: IBootstrapTypeDisplay | undefined, attr: string | IAttrBSIcon | icon) => {
	if (typeof attr === "string") {
		attr = { id: attr } as IAttrBSIcon;
	}

	if (isAttr<IAttrBSIcon>(attr)) {
		return new span({ display: display }, new icon(attr!));
	} else {
		return new span({ display: display }, attr!);
	}
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
			attr.iconPosition ??= "start";

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
			if (attr.icon) {
				if (typeof attr.icon === "string") {
					attr.icon = { id: attr.icon } as IAttrBSIcon;
				}

				if (isAttr<IAttrBSIcon>(attr.icon)) {
					tElem = new icon(attr.icon);
				} else {
					tElem = attr.icon;
				}
			} else {
				tElem = "";
			}
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
	if (attr.formCheck) {
		attr.class = mergeClass(attr.class, "form-check-label");
	}

	if (attr.stretched) {
		attr.class = mergeClass(attr.class, "stretched-link");
	}

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
	delete tAttr.stretched;
	delete tAttr.formCheck;

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
