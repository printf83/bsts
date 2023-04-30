import { bootstrapType, bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { IAttr, IElem, genTagClass, isAttr } from "../core/tag.js";
import { div } from "../html/div.js";
import { span } from "../html/span.js";
import { Icon, icon } from "./icon.js";

export type CaptionDisplay = bootstrapType.display | bootstrapType.display[];

export interface Caption extends IAttr {
	icon?: string | Icon | icon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconDisplay?: CaptionDisplay;
	labelDisplay?: CaptionDisplay;
}

const fnRow = (display: CaptionDisplay | undefined, elem: IElem) => {
	return new div({ row: true, display: display }, new div({ col: true, textAlign: "center" }, elem));
};

const fnIcon = (display: CaptionDisplay | undefined, attr: string | Icon | icon) => {
	if (typeof attr === "string") {
		attr = { id: attr } as Icon;
	}

	if (isAttr<Icon>(attr)) {
		return new span({ display: display }, new icon(attr!));
	} else {
		return new span({ display: display }, attr!);
	}
};

const fnElem = (display: CaptionDisplay | undefined, elem: IElem) => {
	return new span({ display: display }, elem);
};

const convert = (attr: Caption) => {
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
					attr.icon = { id: attr.icon } as Icon;
				}

				if (isAttr<Icon>(attr.icon)) {
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
	constructor(attr: Caption);
	constructor(attr: Caption, text: string);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}

export const Caption = (AttrOrText?: Caption | string, Text?: string) =>
	genTagClass<caption, Caption>(caption, AttrOrText, Text);
