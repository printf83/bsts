import { bsConstArg } from "../core/bootstrap.js";
import { isAttr, tag } from "../core/tag.js";
import { mergeClass } from "../core/util/mergeClass.js";

import { mergeObject } from "../core/util/mergeObject.js";
import { label as HLabel } from "../html/label.js";
import { span } from "../html/span.js";
import { icon } from "./icon.js";
import { icon as Icon } from "../interface/bootstrap/icon.js";
import { label as Label, labelDisplay as LabelDisplay } from "../interface/bootstrap/label.js";
import { elem } from "../interface/core/elem.js";

const fnIcon = (display: LabelDisplay | undefined, attr: string | Icon | icon) => {
	if (typeof attr === "string") {
		return new icon({ id: attr, display: display });
	} else if (isAttr<Icon>(attr)) {
		return new icon(mergeObject(attr, { display: display }));
	} else {
		return attr;
	}
};

const fnElem = (display: LabelDisplay | undefined, elem: elem | elem[]) => {
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

export class label extends HLabel {
	constructor();
	constructor(text: string);
	constructor(attr: Label);
	constructor(attr: Label, text: string);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
