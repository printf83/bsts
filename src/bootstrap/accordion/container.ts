import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { UUID } from "../../core/fn/uuid.js";
import { div } from "../../html/div.js";
import { item } from "./item.js";
import { header } from "./header.js";
import { body } from "./body.js";

export interface IAttrBSAccordionContainerItem {
	title: IElem;
	elem: IElem;
	show?: boolean;
}

export interface IAttrBSAccordionContainer extends IAttr {
	flush?: boolean;
	alwaysOpen?: boolean;
	item?: IAttrBSAccordionContainerItem | IAttrBSAccordionContainerItem[];
}

const convert = (attr: IAttrBSAccordionContainer) => {
	attr.id = attr.id || UUID();

	attr.class = mergeClass(attr.class, ["accordion", attr.flush ? "accordion-flush" : undefined]);

	//generate item
	if (attr.item && !attr.elem) {
		attr.item = Array.isArray(attr.item) ? attr.item : [attr.item];
		attr.elem = attr.item.map((i) => {
			let itemID = UUID();
			return new item([
				new header(
					{
						id: `heading-${itemID}`,
						target: `#collapse-${itemID}`,
						control: `collapse-${itemID}`,
						expanded: i.show,
					},
					i.title
				),
				new body(
					{
						id: `collapse-${itemID}`,
						parent: attr.alwaysOpen ? undefined : `#${attr.id}`,
						show: i.show,
					},
					i.elem
				),
			]);
		});
	}

	delete attr.flush;
	delete attr.item;
	delete attr.alwaysOpen;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttrBSAccordionContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSAccordionContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSAccordionContainer>("elem", convert, arg));
	}
}
