import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";
import { option, IAttrTagOption } from "./option.js";

export interface IAttrTagOptgroup extends IAttr {
	disabled?: boolean;
	label?: string;
	attrLabel?: string;

	item?: IAttrTagOption | IAttrTagOption[];
}

const convert = (attr: IAttrTagOptgroup) => {
	if (attr.label) {
		attr.attrLabel = attr.label;
		delete attr.label;
	}

	if (attr.item && !attr.elem) {
		if (!Array.isArray(attr.item)) {
			attr.item = [attr.item];
		}

		attr.elem = attr.item.map((i) => {
			return new option(i);
		});
	}

	delete attr.item;

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
