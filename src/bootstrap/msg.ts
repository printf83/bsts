import { bsConstructor } from "../core/bootstrap.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { isAttr } from "../core/tag.js";
import { div } from "../html/div.js";
import { icon } from "./icon.js";
import { icon as Icon } from "../interface/bootstrap/icon.js";
import { msg as Msg, msgDisplay as MsgDisplay } from "../interface/bootstrap/msg.js";
import { elem } from "../interface/core/elem.js";

/**
 * Renders the icon element for the message based on the given display and icon attribute.
 * If the icon attribute is a string, renders a FontAwesome icon component.
 * If it is an Icon interface, renders an icon component with those properties.
 * Otherwise returns the attribute as-is.
 */
const fnIcon = (display: MsgDisplay | undefined, attr: string | Icon | icon) => {
	if (typeof attr === "string") {
		return new icon({ id: attr, display: display, fontSize: 3 });
	} else if (isAttr<Icon>(attr)) {
		return new icon(mergeObject(attr, { display: display, fontSize: 3 }));
	} else {
		return attr;
	}
};

/**
 * Renders the message element based on the given display attribute.
 * If an array is passed, joins elements together.
 */
const fnElem = (display: MsgDisplay | undefined, elem: elem | elem[]) => {
	if (display) {
		return new div({ display: display }, elem);
	} else {
		return new div(elem);
	}
};

/**
 * Renders a Bootstrap message component with icon and text.
 * Accepts various configurations for icon position, display, etc.
 * Handles string icons, Icon interfaces, and raw elements.
 * Converts the input to the proper format before passing to the div.
 */
export class msg extends div {
	constructor();
	constructor(text: string);
	constructor(attr: Msg);
	constructor(attr: Msg, text: string);
	constructor(...arg: any[]) {
		super(bsConstructor("elem", arg));
	}

	convert(attr: Msg) {
		if (attr && typeof attr.icon !== "undefined") {
			if (attr.elem) {
				//default position
				attr.iconPosition ??= "start";

				//append icon base on position
				switch (attr.iconPosition) {
					case "start":
						attr = mergeObject(
							{ display: "flex", gap: 3, alignItem: "center", justifyContent: "start" },
							attr
						);
						attr.elem = [fnIcon(attr.iconDisplay, attr.icon!), fnElem(attr.labelDisplay, attr.elem!)];
						break;
					case "end":
						attr = mergeObject(
							{ display: "flex", gap: 3, alignItem: "center", justifyContent: "end" },
							attr
						);
						attr.elem = [fnElem(attr.labelDisplay, attr.elem!), fnIcon(attr.iconDisplay, attr.icon!)];
						break;
					case "top":
						attr = mergeObject(
							{
								display: "grid",
								gap: 3,
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
								gap: 3,
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
					attr.elem = "Msg";
				}
			}
		} else {
			if (!attr.elem) {
				attr.elem = "Msg";
			}
		}

		delete attr.icon;
		delete attr.iconPosition;
		delete attr.iconDisplay;
		delete attr.labelDisplay;
		return super.convert(attr);
	}
}
