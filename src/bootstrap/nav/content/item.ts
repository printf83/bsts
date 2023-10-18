import { IElem } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/mergeClass.js";
import { div } from "../../../html/div.js";
import { item as Item } from "../../../interface/bootstrap/nav/content/item.js";

const convert = (attr: Item) => {
	attr.role ??= "tabpanel";
	attr.tabindex ??= "0";
	attr.animation ??= true;

	attr.class = mergeClass(attr.class, [
		"tab-pane",
		attr.active ? "active" : undefined,
		attr.active ? "show" : undefined,
		attr.animation ? "fade" : undefined,
	]);

	delete attr.active;

	return attr;
};

export class item extends div {
	constructor();
	constructor(attr: Item);
	constructor(elem: IElem);
	constructor(attr: Item, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Item>("elem", arg)));
	}
}
