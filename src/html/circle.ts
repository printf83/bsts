import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface IAttrTagCircle extends IAttr {
	d?: string;
	fill?: string;
	cx?: string | number;
	cy?: string | number;
	r?: string | number;
}

const convert = (attr: IAttrTagCircle) => {
	return attr;
};

export class circle extends tag {
	constructor(); //#1
	constructor(elem: IElem); //#3
	constructor(attr: IAttrTagCircle); //#4
	constructor(attr: IAttrTagCircle, elem: IElem); //#4
	constructor(...arg: any[]) {
		super("circle", convert(tagConsArg<IAttrTagCircle>("elem", arg)));
	}
}
