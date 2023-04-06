import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";
import { option } from "./option.js";

export interface IAttrTagDatalist extends IAttr {
	item?: string | string[];
}

const convert = (attr: IAttrTagDatalist) => {
	if (attr.item && !attr.elem) {
		if (!Array.isArray(attr.item)) {
			attr.item = [attr.item];
		}

		attr.elem = attr.item.map((i) => {
			return new option({ value: i });
		});
	}

	delete attr.item;

	return attr;
};

export class datalist extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagDatalist);
	constructor(attr: IAttrTagDatalist, elem: IElem);
	constructor(...arg: any[]) {
		super("datalist", convert(tagConsArg<IAttrTagDatalist>("elem", arg)));
	}
}
