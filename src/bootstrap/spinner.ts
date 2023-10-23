import { tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { bsConstructor, bsConstructorMultiTag } from "../core/bootstrap.js";
import { mergeClass } from "../core/util/mergeClass.js";

import { visuallyhidden } from "./visuallyhidden.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { spinner as Spinner } from "../interface/bootstrap/spinner.js";

export class spinner extends tag {
	constructor();
	constructor(attr: Spinner);
	constructor(elem: elem | elem[]);
	constructor(attr: Spinner, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(
			bsConstructorMultiTag<Spinner>(
				"elem",
				"span",
				"div",
				(i) => (i.elem === "" ? false : i.elem ? false : true),
				arg
			),
			bsConstructor<Spinner>("elem", arg)
		);
	}

	convert(attr: Spinner) {
		attr.role ??= "status";
		attr.type ??= "border";
		attr.textColor ??= attr.color || attr.textColor;
		attr.elem ??= "Loading...";

		attr.class = mergeClass(attr.class, [
			`spinner-${attr.type}`,
			attr.small && attr.type ? `spinner-${attr.type}-sm` : undefined,
		]);

		if (attr.elem === "") {
			attr = mergeObject({ aria: { hidden: "true" } }, attr);
		} else {
			if (attr.elem) {
				attr.elem = new visuallyhidden(attr.elem);
			}
		}

		delete attr.small;
		delete attr.type;
		delete attr.color;
		return super.convert(attr);
	}
}
