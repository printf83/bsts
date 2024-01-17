import { bsConstructor } from "../core/bootstrap.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { isAttr, tag } from "../core/tag.js";
import { div } from "../html/div.js";
import { span } from "../html/span.js";
import { icon } from "./icon.js";
import { icon as Icon } from "../interface/bootstrap/icon.js";
import { caption as Caption, captionDisplay as CaptionDisplay } from "../interface/bootstrap/caption.js";
import { elem } from "../interface/core/elem.js";

const fnIcon = (display: CaptionDisplay | undefined, attr: string | Icon | icon) => {
	if (typeof attr === "string") {
		return new icon({ id: attr, display: display });
	} else if (isAttr<Icon>(attr)) {
		return new icon(mergeObject(attr, { display: display }));
	} else {
		return attr;
	}
};

const fnElem = (display: CaptionDisplay | undefined, elem: elem | elem[]) => {
	if (display) {
		return new span({ display: display }, elem);
	} else {
		return elem as tag;
	}
};

/**
 * Converts a Caption attribute into a caption element with icon and label formatting.
 * Handles icon position and display styling.
 */
export class caption extends div {
	constructor();
	constructor(text: string);
	constructor(attr: Caption);
	constructor(attr: Caption, text: string);
	constructor(...arg: any[]) {
		super(bsConstructor("elem", arg));
	}

	convert(attr: Caption) {
		if (attr && typeof attr.icon !== "undefined") {
			if (attr.elem) {
				//default position
				attr.iconPosition ??= "start";

				//append icon base on position
				switch (attr.iconPosition) {
					case "start":
						attr = mergeObject(
							{ display: "flex", gap: 2, alignItem: "center", justifyContent: "start" },
							attr
						);
						attr.elem = [fnIcon(attr.iconDisplay, attr.icon!), fnElem(attr.labelDisplay, attr.elem!)];
						break;
					case "end":
						attr = mergeObject(
							{ display: "flex", gap: 2, alignItem: "center", justifyContent: "end" },
							attr
						);
						attr.elem = [fnElem(attr.labelDisplay, attr.elem!), fnIcon(attr.iconDisplay, attr.icon!)];
						break;
					case "top":
						attr = mergeObject(
							{
								display: "grid",
								gap: 1,
								alignItem: "center",
								justifyContent: "center",
								textAlign: "center",
							},
							attr
						);
						attr.elem = [fnIcon(attr.iconDisplay, attr.icon!), fnElem(attr.labelDisplay, attr.elem!)];
						break;
					case "bottom":
						attr = mergeObject(
							{
								display: "grid",
								gap: 1,
								alignItem: "center",
								justifyContent: "center",
								textAlign: "center",
							},
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
		return super.convert(attr);
	}
}
