import { tagConsArg, IAttr, IElem, tag } from "../core/base/tag.js";

export interface IAttrTagOptgroup extends IAttr {
	disabled?: boolean;
	label?: string;
	attrLabel?: string;
}

const convert = (attr: IAttrTagOptgroup) => {
	if (attr.label) {
		attr.attrLabel = attr.label;
		delete attr.label;
	}

	return attr;
};

export class optgroup extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagOptgroup);
	constructor(attr: IAttrTagOptgroup, elem: IElem);
	constructor(...arg: any[]) {
		super("optgroup", convert(tagConsArg<IAttrTagOptgroup>("elem", arg)));
	}
}
