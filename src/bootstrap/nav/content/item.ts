import { elem } from "../../../interface/core/elem.js";
import { bsConstructor } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/util/mergeClass.js";
import { div } from "../../../html/div.js";
import { item as Item } from "../../../interface/bootstrap/nav/content/item.js";

export class item extends div {
	constructor();
	constructor(attr: Item);
	constructor(elem: elem | elem[]);
	constructor(attr: Item, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Item>("elem", arg));
	}

	convert(attr: Item) {
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
		return super.convert(attr);
	}
}
