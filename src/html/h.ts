import { tagConsArg, IAttr, IElem, tag, isAttr } from "../core/tag.js";

export type HLevel = 1 | 2 | 3 | 4 | 5 | 6;

export class h extends tag {
	constructor();
	constructor(level: HLevel);
	constructor(level: HLevel, elem: IElem);
	constructor(level: HLevel, attr: IAttr);
	constructor(level: HLevel, attr: IAttr, elem: IElem);
	constructor(...arg: any[]) {
		if (arg) {
			if (arg.length > 1) {
				let l = arg.shift();
				super(`h${l}`, tagConsArg("elem", arg));
			} else {
				super(`h${arg[0]}`);
			}
		} else {
			super("h1");
		}
	}
}

export const H = (Level: HLevel, AttrOrElem?: IAttr | IElem, Elem?: IElem) => {
	if (AttrOrElem) {
		if (isAttr<IAttr>(AttrOrElem)) {
			if (Elem) {
				return new h(Level, AttrOrElem as IAttr, Elem);
			} else {
				return new h(Level, AttrOrElem as IAttr);
			}
		} else {
			return new h(Level, AttrOrElem as IElem);
		}
	} else {
		return new h(Level);
	}
};
