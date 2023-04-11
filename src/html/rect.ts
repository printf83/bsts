import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface IAttrTagRect extends IAttr {
	d?: string;
	fill?: string;
}

const convert = (attr: IAttrTagRect) => {
	return attr;
};

export class rect extends tag {
	constructor(); //#1
	constructor(elem: IElem); //#3
	constructor(attr: IAttrTagRect); //#4
	constructor(attr: IAttrTagRect, elem: IElem); //#4
	constructor(...arg: any[]) {
		super("rect", convert(tagConsArg<IAttrTagRect>("elem", arg)));
	}
}
