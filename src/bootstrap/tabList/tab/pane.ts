import { elem } from "../../../interface/core/elem.js";
import { bsConstructor } from "../../../core/bootstrap.js";
import { mergeClass } from "../../../core/util/mergeClass.js";
import { div } from "../../../html/div.js";
import { pane as Pane } from "../../../interface/bootstrap/tabList/tab/pane.js";

const convert = (attr: Pane) => {
	attr.animation ??= true;
	attr.role ??= "tabpanel";

	attr.class = mergeClass(attr.class, [
		"tab-pane",
		attr.animation ? "fade" : undefined,
		attr.active ? "show" : undefined,
		attr.active ? "active" : undefined,
	]);

	delete attr.animation;
	delete attr.active;

	return attr;
};

export class pane extends div {
	constructor();
	constructor(attr: Pane);
	constructor(elem: elem | elem[]);
	constructor(attr: Pane, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstructor<Pane>("elem", arg)));
	}
}
