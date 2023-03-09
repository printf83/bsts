import { IAttr, IElem, isAttr } from "../../core/base/tag.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { UUID } from "../../core/fn/uuid.js";
import { div } from "../../ht/div.js";

export interface IAttrBSAccordionContainer extends IAttr {
	flush?: boolean;
}

const convert = (
	attr: IAttrBSAccordionContainer
): IAttrBSAccordionContainer => {
	attr.id = attr.id || UUID();

	attr.class = mergeClass(attr.class, [
		"accordion",
		attr.flush ? "accordion-flush" : "",
	]);

	delete attr.flush;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttrBSAccordionContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSAccordionContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({ elem: "Alert" }));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSAccordionContainer>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(mergeObject({ elem: arg[1] }, arg[0])));
		}
	}
}
