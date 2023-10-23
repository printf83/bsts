import { bsConstructor } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/util/mergeObject.js";
import { button as Button } from "../../interface/bootstrap/offcanvas/button.js";
import { elem } from "../../interface/core/elem.js";
import { button as BButton } from "../button.js";

export class button extends BButton {
	constructor();
	constructor(attr: Button);
	constructor(elem: elem | elem[]);
	constructor(attr: Button, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Button>("elem", arg));
	}

	convert(attr: Button) {
		attr = mergeObject(
			{
				data: {
					"bs-toggle": "offcanvas",
					"bs-target": attr.link ? undefined : attr.target,
				},
				aria: { expanded: "false" },
				role: attr.link ? "button" : undefined,
				href: attr.link ? attr.target : undefined,
			},
			attr
		);

		delete attr.link;
		delete attr.target;
		return super.convert(attr);
	}
}
