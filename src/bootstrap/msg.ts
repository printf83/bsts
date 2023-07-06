import { IAttr, IElem, isAttr } from "../core/tag.js";
import { div } from "../html/div.js";
import { Label, label as TLabel } from "../html/label.js";
import { Icon, icon } from "./icon.js";

export interface Msg extends Label {
	icon?: Icon;
	iconPosition?: "start" | "end" | "top" | "bottom";
	iconContainer?: IAttr;
}

const fnRow = (elem: IElem) => {
	return new div({ row: true }, new div({ col: true, textAlign: "center" }, elem));
};

const fnIcon = (containerAttr: IAttr | undefined, attr: Icon) => {
	return new div(containerAttr || { fontSize: 1 }, new icon(attr!));
};

const fnElem = (elem: IElem) => {
	return new div({ display: "flex", alignItem: "center" }, new div(elem));
};

const convert = (attr: Msg) => {
	let tElem: IElem;
	let tAttr: Msg = attr;

	if (attr && typeof attr.icon !== "undefined") {
		if (attr.elem) {
			//default position
			attr.iconPosition ??= "start";

			//append icon base on position
			switch (attr.iconPosition) {
				case "start":
					tElem = new div({ display: "flex", gap: 3 }, [
						fnIcon(attr.iconContainer, attr.icon),
						fnElem(attr.elem),
					]);
					break;
				case "end":
					tElem = new div({ display: "flex", gap: 3 }, [
						fnElem(attr.elem),
						fnIcon(attr.iconContainer, attr.icon),
					]);
					break;
				case "top":
					tElem = new div({ display: "inline-block", gap: 3 }, [
						fnRow(fnIcon(attr.iconContainer, attr.icon)),
						fnRow(fnElem(attr.elem)),
					]);
					break;
				case "bottom":
					tElem = new div({ display: "inline-block", gap: 3 }, [
						fnRow(fnElem(attr.elem)),
						fnRow(fnIcon(attr.iconContainer, attr.icon)),
					]);
					break;
				default:
					throw new Error("Unknow iconPosition");
			}
		} else {
			tElem = new icon(attr.icon);
		}
	} else {
		if (attr.elem) {
			tElem = attr.elem;
		} else {
			tElem = "Message";
		}
	}

	delete tAttr.icon;
	delete tAttr.iconPosition;

	delete attr.elem;
	attr.elem = tElem;

	return attr;
};

export class msg extends TLabel {
	constructor();
	constructor(attr: Msg);
	constructor(elem: IElem);
	constructor(icon: string, elem: IElem);
	constructor(icon: Icon, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<Msg>(arg[0])) {
				super(convert(arg[0]));
			} else {
				super(convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			if (typeof arg[0] === "string") {
				super(convert({ icon: { id: arg[0] }, elem: arg[1] }));
			} else {
				super(convert({ icon: arg[0], elem: arg[1] }));
			}
		}
	}
}

export const Msg = (AttrOrElemOrIcon?: Msg | Icon | IElem, Elem?: IElem) => {
	if (AttrOrElemOrIcon) {
		if (Elem) {
			if (typeof AttrOrElemOrIcon === "string") {
				return new msg(AttrOrElemOrIcon as string, Elem);
			} else {
				return new msg(AttrOrElemOrIcon as Icon, Elem);
			}
		} else {
			if (isAttr<Msg>(AttrOrElemOrIcon)) {
				return new msg(AttrOrElemOrIcon as Msg);
			} else {
				return new msg(AttrOrElemOrIcon as IElem);
			}
		}
	} else {
		return new msg();
	}
};
