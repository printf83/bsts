import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";
import { option, ITagOption } from "./option.js";

export interface ITagOptgroup extends IAttr {
	disabled?: boolean;
	label?: string;
	attrLabel?: string;

	item?: ITagOption | ITagOption[];
}

const convert = (attr: ITagOptgroup) => {
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
	constructor(attr: ITagOptgroup);
	constructor(attr: ITagOptgroup, elem: IElem);
	constructor(...arg: any[]) {
		super("optgroup", convert(tagConsArg<ITagOptgroup>("elem", arg)));
	}
}
