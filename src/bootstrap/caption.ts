import { bootstrapType, bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { IAttr, IElem, genTagClass, isAttr } from "../core/tag.js";
import { div } from "../html/div.js";
import { span } from "../html/span.js";
import { IBsIcon, icon } from "./icon.js";

export type IBsCaptionDisplay = bootstrapType.display | bootstrapType.display[];

export interface IBsCaption extends IAttr {
	icon?: string | IBsIcon | icon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconDisplay?: IBsCaptionDisplay;
	labelDisplay?: IBsCaptionDisplay;
}

const fnRow = (display: IBsCaptionDisplay | undefined, elem: IElem) => {
	return new div({ row: true, display: display }, new div({ col: true, textAlign: "center" }, elem));
};

const fnIcon = (display: IBsCaptionDisplay | undefined, attr: string | IBsIcon | icon) => {
	if (typeof attr === "string") {
		attr = { id: attr } as IBsIcon;
	}

	if (isAttr<IBsIcon>(attr)) {
		return new span({ display: display }, new icon(attr!));
	} else {
		return new span({ display: display }, attr!);
	}
};

const fnElem = (display: IBsCaptionDisplay | undefined, elem: IElem) => {
	return new span({ display: display }, elem);
};

const convert = (attr: IBsCaption) => {
	if (attr && typeof attr.icon !== "undefined") {
		if (attr.elem) {
			//default position
			attr.iconPosition ??= "start";

			//append icon base on position
			switch (attr.iconPosition) {
				case "start":
					attr = mergeObject({ display: "flex", gap: 2, alignItem: "center" }, attr);
					attr.elem = [fnIcon(attr.iconDisplay, attr.icon!), fnElem(attr.labelDisplay, attr.elem!)];

					break;
				case "end":
					attr = mergeObject({ display: "flex", gap: 2, alignItem: "center" }, attr);
					attr.elem = [fnElem(attr.labelDisplay, attr.elem!), fnIcon(attr.iconDisplay, attr.icon!)];
					break;
				case "top":
					attr = mergeObject({ display: "inline-block" }, attr);
					attr.elem = [
						fnRow(attr.iconDisplay, fnIcon(undefined, attr.icon!)),
						fnRow(attr.labelDisplay, fnElem(undefined, attr.elem!)),
					];
					break;
				case "bottom":
					attr = mergeObject({ display: "inline-block" }, attr);
					attr.elem = [
						fnRow(attr.labelDisplay, fnElem(undefined, attr.elem!)),
						fnRow(attr.iconDisplay, fnIcon(undefined, attr.icon!)),
					];
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
					attr.elem = new icon(attr.icon);
				} else {
					attr.elem = attr.icon;
				}
			} else {
				attr.elem = "Caption";
			}
		}
	} else {
		if (!attr.elem) {
			attr.elem = "Caption";
		}
	}

	delete attr.icon;
	delete attr.iconPosition;
	delete attr.iconDisplay;
	delete attr.labelDisplay;

	return attr;
};

export class caption extends div {
	constructor();
	constructor(text: string);
	constructor(attr: IBsCaption);
	constructor(attr: IBsCaption, text: string);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}

export const Caption = (AttrOrText?: IBsCaption | string, Text?: string) =>
	genTagClass<caption, IBsCaption>(caption, AttrOrText, Text);
