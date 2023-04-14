import { mergeAttr } from "../core/mergeAttr.js";
import { mergeClass } from "../core/mergeClass.js";
import { tagConsArg, IAttr, IElem, tag } from "../core/tag.js";

export interface IAttrTagFigcaption extends IAttr {
	blockquoteFooter?: boolean;
}

const convert = (attr: IAttrTagFigcaption) => {
	if (attr.blockquoteFooter) {
		attr.class = mergeClass(attr.class, "blockquote-footer");
	}

	delete attr.blockquoteFooter;

	return attr;
};

export class figcaption extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagFigcaption);
	constructor(attr: IAttrTagFigcaption, elem: IElem);
	constructor(...arg: any[]) {
		super("figcaption", convert(tagConsArg<IAttrTagFigcaption>("elem", arg)));
	}
}
