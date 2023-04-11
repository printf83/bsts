import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface IAttrTagPath extends IAttr {
	d?: string;
	fill?: string;
}

const convert = (attr: IAttrTagPath) => {
	return attr;
};

export class path extends tag {
	constructor(); //#1
	constructor(elem: IElem); //#3
	constructor(attr: IAttrTagPath); //#4
	constructor(attr: IAttrTagPath, elem: IElem); //#4
	constructor(...arg: any[]) {
		super("path", convert(tagConsArg<IAttrTagPath>("elem", arg)));
	}
}
