import { IAttr, IElem } from "../../core/base/tag.js";
import { conProp } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { UUID } from "../../core/fn/uuid.js";
import { div } from "../../ht/div.js";

export interface IAttrBSCollapseContainer extends IAttr {
	horizontal?: true;
}

const convert = (attr: IAttrBSCollapseContainer): IAttr => {
	attr.id = attr.id || UUID();
	attr.class = mergeClass(attr.class, ["collapse", attr.horizontal ? "collapse-horizontal" : ""]);

	delete attr.horizontal;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttrBSCollapseContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSCollapseContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(conProp<IAttrBSCollapseContainer>("elem", convert, arg));
	}
}
