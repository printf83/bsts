import { bootstrapType, bsConstArg } from "../core/bootstrap.js";
import { IElem, isAttr, tag } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";
import { Label as ILabel, label as TLabel } from "../html/label.js";
import { span } from "../html/span.js";
import { Icon, icon } from "./icon.js";
import { Button } from "./button.js";
import { mergeObject } from "../core/mergeObject.js";

export type LabelDisplay = bootstrapType.display | bootstrapType.display[];

export interface Label extends ILabel, Omit<Button, "role"> {
	icon?: string | Icon | icon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconDisplay?: LabelDisplay;
	labelDisplay?: LabelDisplay;
	stretched?: boolean;
}

const fnIcon = (display: LabelDisplay | undefined, attr: string | Icon | icon) => {
	if (typeof attr === "string") {
		return new icon({ id: attr, display: display });
	} else if (isAttr<Icon>(attr)) {
		return new icon(mergeObject(attr, { display: display }));
	} else {
		return attr;
	}
};

const fnElem = (display: LabelDisplay | undefined, elem: IElem) => {
	if (display) {
		return new span({ display: display }, elem);
	} else {
		return elem as tag;
	}
};

const convert = (attr: Label) => {
	if (attr && typeof attr.icon !== "undefined") {
		if (attr.elem) {
			//default position
			attr.iconPosition ??= "start";

			//append icon base on position
			switch (attr.iconPosition) {
				case "start":
					attr = mergeObject({ display: "flex", gap: 2, alignItem: "center", justifyContent: "start" }, attr);
					attr.elem = [fnIcon(attr.iconDisplay, attr.icon!), fnElem(attr.labelDisplay, attr.elem!)];
					break;
				case "end":
					attr = mergeObject({ display: "flex", gap: 2, alignItem: "center", justifyContent: "end" }, attr);
					attr.elem = [fnElem(attr.labelDisplay, attr.elem!), fnIcon(attr.iconDisplay, attr.icon!)];
					break;
				case "top":
					attr = mergeObject(
						{ display: "grid", gap: 1, alignItem: "center", justifyContent: "center", textAlign: "center" },
						attr
					);
					attr.elem = [fnIcon(attr.iconDisplay, attr.icon!), fnElem(attr.labelDisplay, attr.elem!)];
					break;
				case "bottom":
					attr = mergeObject(
						{ display: "grid", gap: 1, alignItem: "center", justifyContent: "center", textAlign: "center" },
						attr
					);
					attr.elem = [fnElem(attr.labelDisplay, attr.elem!), fnIcon(attr.iconDisplay, attr.icon!)];
					break;
				default:
					throw new Error("Unknow iconPosition");
			}
		} else {
			if (attr.icon) {
				if (typeof attr.icon === "string") {
					attr.elem = new icon({ id: attr.icon });
				} else if (isAttr<Icon>(attr.icon)) {
					attr.elem = new icon(attr.icon);
				} else {
					attr.elem = attr.icon;
				}
			} else {
				attr.elem = "Label";
			}
		}
	} else {
		if (!attr.elem) {
			attr.elem = "Label";
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

	delete attr.icon;
	delete attr.iconPosition;
	delete attr.iconDisplay;
	delete attr.labelDisplay;
	delete attr.stretched;
	return attr;
};

export class label extends TLabel {
	constructor();
	constructor(text: string);
	constructor(attr: Label);
	constructor(attr: Label, text: string);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
