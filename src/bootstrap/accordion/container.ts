import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeClass } from "../../core/mergeClass.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";
import { item } from "./item.js";
import { header } from "./header.js";
import { body } from "./body.js";

export interface ContainerItem {
	title: IElem;
	elem: IElem;
	show?: boolean;
}

export interface Container extends IAttr {
	flush?: boolean;
	alwaysOpen?: boolean;
	item?: ContainerItem | ContainerItem[];
}

const convert = (attr: Container) => {
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
	constructor();
	constructor(attr: Container);
	constructor(elem: IElem);
	constructor(attr: Container, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}
