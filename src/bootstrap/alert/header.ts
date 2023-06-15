import { IAttr, IElem, isAttr } from "../../core/tag.js";
import { mergeClass } from "../../core/mergeClass.js";
import { mergeObject } from "../../core/mergeObject.js";
import { h, HLevel } from "../../html/h.js";

const convert = (attr: IAttr) => {
	//add alert-header
	attr.class = mergeClass(attr.class, "alert-heading");
	return attr;
};

export class header extends h {
	constructor();
	constructor(level: HLevel);
	constructor(level: HLevel, attr: IAttr);
	constructor(level: HLevel, elem: IElem);
	constructor(level: HLevel, attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super(4, convert({}), "Header");
		} else if (arg.length === 1) {
			super(arg[0] as HLevel, convert({}));
		} else if (arg.length === 2) {
			if (isAttr<IAttr>(arg[1])) {
				super(arg[0] as HLevel, convert(arg[1]));
			} else {
				super(arg[0] as HLevel, convert({ elem: arg[1] }));
			}
		} else if (arg.length === 3) {
			super(arg[0] as HLevel, convert(mergeObject({ elem: arg[1] }, arg[0])));
		}
	}
}

export const Header = (Level: HLevel, AttrOrElem?: IAttr | IElem, Elem?: IElem) => {
	if (AttrOrElem) {
		if (isAttr<IAttr>(AttrOrElem)) {
			if (Elem) {
				return new header(Level, AttrOrElem as IAttr, Elem);
			} else {
				return new header(Level, AttrOrElem as IAttr);
			}
		} else {
			return new header(Level, AttrOrElem as IElem);
		}
	} else {
		return new header(Level);
	}
};
