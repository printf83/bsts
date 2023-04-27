import { bootstrapType, bsConstArg } from "../core/bootstrap.js";
import { IElem, genTagClass, isAttr } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";
import { div } from "../html/div.js";
import { ITagLabel, label as TLabel } from "../html/label.js";
import { span } from "../html/span.js";
import { IBsIcon, icon } from "./icon.js";
import { IBsButton } from "./button.js";

export type IBsLabelDisplay = bootstrapType.display | bootstrapType.display[];

export interface IBsLabel extends ITagLabel, Omit<IBsButton, "role"> {
	icon?: string | IBsIcon | icon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconDisplay?: IBsLabelDisplay;
	labelDisplay?: IBsLabelDisplay;

	stretched?: boolean;
}

const fnRow = (display: IBsLabelDisplay | undefined, elem: IElem) => {
	return new div({ row: true, display: display }, new div({ col: true, textAlign: "center" }, elem));
};

const fnIcon = (display: IBsLabelDisplay | undefined, attr: string | IBsIcon | icon) => {
	if (typeof attr === "string") {
		attr = { id: attr } as IBsIcon;
	}

	if (isAttr<IBsIcon>(attr)) {
		return new span({ display: display }, new icon(attr!));
	} else {
		return new span({ display: display }, attr!);
	}
};

const fnElem = (display: IBsLabelDisplay | undefined, elem: IElem) => {
	return new span({ display: display }, elem);
};

const convert = (attr: IBsLabel) => {
	let tElem: IElem;
	let tAttr: IBsLabel = attr;

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
					attr.icon = { id: attr.icon } as IBsIcon;
				}

				if (isAttr<IBsIcon>(attr.icon)) {
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

	delete attr.elem;
	attr.elem = tElem;

	return attr;
};

export class label extends TLabel {
	constructor();
	constructor(text: string);
	constructor(attr: IBsLabel);
	constructor(attr: IBsLabel, text: string);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}

export const Label = (AttrOrText?: IBsLabel | string, Text?: string) =>
	genTagClass<label, IBsLabel>(label, AttrOrText, Text);
