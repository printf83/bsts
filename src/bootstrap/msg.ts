import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { isAttr } from "../core/tag.js";
import { div } from "../html/div.js";
import { icon } from "./icon.js";
import { icon as Icon } from "../interface/bootstrap/icon.js";
import { msg as Msg, msgDisplay as MsgDisplay } from "../interface/bootstrap/msg.js";
import { elem } from "../interface/core/elem.js";

const fnIcon = (display: MsgDisplay | undefined, attr: string | Icon | icon) => {
	if (typeof attr === "string") {
		return new icon({ id: attr, display: display, fontSize: 3 });
	} else if (isAttr<Icon>(attr)) {
		return new icon(mergeObject(attr, { display: display, fontSize: 3 }));
	} else {
		return attr;
	}
};

const fnElem = (display: MsgDisplay | undefined, elem: elem | elem[]) => {
	if (display) {
		return new div({ display: display }, elem);
	} else {
		return new div(elem);
	}
};

const convert = (attr: Msg) => {
	if (attr && typeof attr.icon !== "undefined") {
		if (attr.elem) {
			//default position
			attr.iconPosition ??= "start";

			//append icon base on position
			switch (attr.iconPosition) {
				case "start":
					attr = mergeObject({ display: "flex", gap: 3, alignItem: "center", justifyContent: "start" }, attr);
					attr.elem = [fnIcon(attr.iconDisplay, attr.icon!), fnElem(attr.labelDisplay, attr.elem!)];
					break;
				case "end":
					attr = mergeObject({ display: "flex", gap: 3, alignItem: "center", justifyContent: "end" }, attr);
					attr.elem = [fnElem(attr.labelDisplay, attr.elem!), fnIcon(attr.iconDisplay, attr.icon!)];
					break;
				case "top":
					attr = mergeObject(
						{ display: "grid", gap: 3, alignItem: "center", justifyContent: "center", textAlign: "center" },
						attr
					);
					attr.elem = [fnIcon(attr.iconDisplay, attr.icon!), fnElem(attr.labelDisplay, attr.elem!)];
					break;
				case "bottom":
					attr = mergeObject(
						{ display: "grid", gap: 3, alignItem: "center", justifyContent: "center", textAlign: "center" },
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

	return attr;
};

export class msg extends div {
	constructor();
	constructor(text: string);
	constructor(attr: Msg);
	constructor(attr: Msg, text: string);
	constructor(...arg: any[]) {
		super(convert(bsConstArg("elem", arg)));
	}
}
