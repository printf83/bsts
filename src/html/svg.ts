import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface IAttrTagSvg extends IAttr {
	viewBox?: string;
	fill?: string;
	xmlns?: string;
}

const convert = (attr: IAttrTagSvg) => {
	attr.xmlns ??= "http://www.w3.org/2000/svg";
	return attr;
};

export class svg extends tag {
	constructor(); //#1
	constructor(elem: IElem); //#3
	constructor(attr: IAttrTagSvg); //#4
	constructor(attr: IAttrTagSvg, elem: IElem); //#4
	constructor(...arg: any[]) {
		super("svg", convert(tagConsArg<IAttrTagSvg>("elem", arg)));
	}
}
