import { IAttr, IElem } from "../../core/base/tag.js";
import { conElem } from "../../core/fn/arg.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { UUID } from "../../core/fn/uuid.js";
import { div } from "../../ht/div.js";

export interface IAttrBSAccordionContainer extends IAttr {
	flush?: boolean;
}

const convert = (attr: IAttrBSAccordionContainer): IAttr => {
	attr.id = attr.id || UUID();

	attr.class = mergeClass(attr.class, ["accordion", attr.flush ? "accordion-flush" : ""]);

	delete attr.flush;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttrBSAccordionContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSAccordionContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(conElem<IAttrBSAccordionContainer>(convert, arg));
	}
}