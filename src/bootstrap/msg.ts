import { bootstrapType, bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { IAttr, IElem, genTagClass, isAttr, tag } from "../core/tag.js";
import { div } from "../html/div.js";
import { span } from "../html/span.js";
import { Icon, icon } from "./icon.js";

export type MsgDisplay = bootstrapType.display | bootstrapType.display[];

export interface Msg extends IAttr {
	icon?: string | Icon | icon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconDisplay?: MsgDisplay;
	labelDisplay?: MsgDisplay;
}

const fnIcon = (display: MsgDisplay | undefined, attr: string | Icon | icon) => {
	if (typeof attr === "string") {
		return new icon({ id: attr, display: display, fontSize: 3 });
	} else if (isAttr<Icon>(attr)) {
		return new icon(mergeObject(attr, { display: display, fontSize: 3 }));
	} else {
		return attr;
	}
};

const fnElem = (display: MsgDisplay | undefined, elem: IElem) => {
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
						{ display: "grid", gap: 3, alignItem: "center", justifyContent: "center" },
						attr
					);
					attr.elem = [fnIcon(attr.iconDisplay, attr.icon!), fnElem(attr.labelDisplay, attr.elem!)];
					break;
				case "bottom":
					attr = mergeObject(
						{ display: "grid", gap: 3, alignItem: "center", justifyContent: "center" },
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

export const Msg = (AttrOrText?: Msg | string, Text?: string) => genTagClass<msg, Msg>(msg, AttrOrText, Text);

// import { IAttr, IElem, isAttr } from "../core/tag.js";
// import { div } from "../html/div.js";
// import { Label, label as TLabel } from "../html/label.js";
// import { Icon, icon } from "./icon.js";

// export interface Msg extends Label {
// 	icon?: Icon;
// 	iconPosition?: "start" | "end" | "top" | "bottom";
// 	iconContainer?: IAttr;
// }

// const fnRow = (elem: IElem) => {
// 	return new div({ row: true }, new div({ col: true, textAlign: "center" }, elem));
// };

// const fnIcon = (containerAttr: IAttr | undefined, attr: Icon) => {
// 	return new div(containerAttr || { fontSize: 1 }, new icon(attr!));
// };

// const fnElem = (elem: IElem) => {
// 	return new div({ display: "flex", alignItem: "center" }, new div(elem));
// };

// const convert = (attr: Msg) => {
// 	let tElem: IElem;
// 	let tAttr: Msg = attr;

// 	if (attr && typeof attr.icon !== "undefined") {
// 		if (attr.elem) {
// 			//default position
// 			attr.iconPosition ??= "start";

// 			//append icon base on position
// 			switch (attr.iconPosition) {
// 				case "start":
// 					tElem = new div({ display: "flex", gap: 3 }, [
// 						fnIcon(attr.iconContainer, attr.icon),
// 						fnElem(attr.elem),
// 					]);
// 					break;
// 				case "end":
// 					tElem = new div({ display: "flex", gap: 3 }, [
// 						fnElem(attr.elem),
// 						fnIcon(attr.iconContainer, attr.icon),
// 					]);
// 					break;
// 				case "top":
// 					tElem = new div({ display: "inline-block", gap: 3 }, [
// 						fnRow(fnIcon(attr.iconContainer, attr.icon)),
// 						fnRow(fnElem(attr.elem)),
// 					]);
// 					break;
// 				case "bottom":
// 					tElem = new div({ display: "inline-block", gap: 3 }, [
// 						fnRow(fnElem(attr.elem)),
// 						fnRow(fnIcon(attr.iconContainer, attr.icon)),
// 					]);
// 					break;
// 				default:
// 					throw new Error("Unknow iconPosition");
// 			}
// 		} else {
// 			tElem = new icon(attr.icon);
// 		}
// 	} else {
// 		if (attr.elem) {
// 			tElem = attr.elem;
// 		} else {
// 			tElem = "Message";
// 		}
// 	}

// 	delete tAttr.icon;
// 	delete tAttr.iconPosition;

// 	delete attr.elem;
// 	attr.elem = tElem;

// 	return attr;
// };

// export class msg extends TLabel {
// 	constructor();
// 	constructor(attr: Msg);
// 	constructor(elem: IElem);
// 	constructor(icon: string, elem: IElem);
// 	constructor(icon: Icon, elem: IElem);
// 	constructor(...arg: any[]) {
// 		if (arg.length === 0) {
// 			super(convert({}));
// 		} else if (arg.length === 1) {
// 			if (isAttr<Msg>(arg[0])) {
// 				super(convert(arg[0]));
// 			} else {
// 				super(convert({ elem: arg[0] }));
// 			}
// 		} else if (arg.length === 2) {
// 			if (typeof arg[0] === "string") {
// 				super(convert({ icon: { id: arg[0] }, elem: arg[1] }));
// 			} else {
// 				super(convert({ icon: arg[0], elem: arg[1] }));
// 			}
// 		}
// 	}
// }

// export const Msg = (AttrOrElemOrIcon?: Msg | Icon | IElem, Elem?: IElem) => {
// 	if (AttrOrElemOrIcon) {
// 		if (Elem) {
// 			if (typeof AttrOrElemOrIcon === "string") {
// 				return new msg(AttrOrElemOrIcon as string, Elem);
// 			} else {
// 				return new msg(AttrOrElemOrIcon as Icon, Elem);
// 			}
// 		} else {
// 			if (isAttr<Msg>(AttrOrElemOrIcon)) {
// 				return new msg(AttrOrElemOrIcon as Msg);
// 			} else {
// 				return new msg(AttrOrElemOrIcon as IElem);
// 			}
// 		}
// 	} else {
// 		return new msg();
// 	}
// };
