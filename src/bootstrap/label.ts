import { bsConstructor } from "../core/bootstrap.js";
import { isAttr, tag } from "../core/tag.js";
import { mergeClass } from "../core/util/mergeClass.js";

import { mergeObject } from "../core/util/mergeObject.js";
import { label as HLabel } from "../html/label.js";
import { span } from "../html/span.js";
import { icon } from "./icon.js";
import { icon as Icon } from "../interface/bootstrap/icon.js";
import { label as Label, labelDisplay as LabelDisplay } from "../interface/bootstrap/label.js";
import { elem } from "../interface/core/elem.js";

/**
 * Converts the label icon attribute to the appropriate icon component based on the type.
 * If attr is a string, returns a new icon component with that id.
 * If attr is an Icon interface, returns a new icon component merged with the display.
 * Otherwise returns the attr unchanged.
 */
const fnIcon = (display: LabelDisplay | undefined, attr: string | Icon | icon) => {
	if (typeof attr === "string") {
		return new icon({ id: attr, display: display });
	} else if (isAttr<Icon>(attr)) {
		return new icon(mergeObject(attr, { display: display }));
	} else {
		return attr;
	}
};

/**
 * Converts the label element attribute to the appropriate element based on the display.
 * If display is defined, wraps elem in a span with that display.
 * Otherwise, returns elem unchanged.
 */
const fnElem = (display: LabelDisplay | undefined, elem: elem | elem[]) => {
	if (display) {
		return new span({ display: display }, elem);
	} else {
		return elem as tag;
	}
};

/**
 * Bootstrap label component.
 * Extends the HTML label element with additional functionality:
 * - Support for icons, colors, outlines, etc.
 * - Automatic styling based on the iconPosition, labelDisplay, etc. props.
 * - Helper methods like convert() to handle processing the label config.
 */
export class label extends HLabel {
	constructor();
	constructor(text: string);
	constructor(attr: Label);
	constructor(attr: Label, text: string);
	constructor(...arg: any[]) {
		super(bsConstructor("elem", arg));
	}

	convert(attr: Label) {
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
		return super.convert(attr);
	}
}
