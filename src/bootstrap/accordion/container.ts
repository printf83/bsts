import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";
import { item } from "./item.js";
import { header } from "./header.js";
import { body } from "./body.js";

export interface IBsAccordionContainerItem {
	title: IElem;
	elem: IElem;
	show?: boolean;
}

export interface IBsAccordionContainer extends IAttr {
	flush?: boolean;
	alwaysOpen?: boolean;
	item?: IBsAccordionContainerItem | IBsAccordionContainerItem[];
}

const convert = (attr: IBsAccordionContainer) => {
	attr.id ??= UUID();

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
						controlfor: `collapse-${itemID}`,
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
	constructor(attr: IBsAccordionContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsAccordionContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsAccordionContainer>("elem", arg)));
	}
}

export const Container = (AttrOrElem?: IBsAccordionContainer | IElem, Elem?: IElem) =>
	genTagClass<container, IBsAccordionContainer>(container, AttrOrElem, Elem);
