import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/util/mergeObject.js";
import { button as BButton } from "../button.js";
import { button as Button } from "../../interface/bootstrap/collapse/button.js";

const convert = (attr: Button) => {
	attr = mergeObject(
		{
			class: [attr.expanded ? undefined : "collapsed", attr.icon ? "btn-toggle" : undefined],
			data: {
				"bs-toggle": "collapse",
				"bs-target": attr.link ? undefined : attr.target,
			},
			aria: { expanded: attr.expanded ? "true" : "false" },
			role: attr.link ? "button" : undefined,
			href: attr.link ? attr.target : undefined,
		},
		attr
	);

	delete attr.link;
	delete attr.target;
	delete attr.expanded;

	return attr;
};

export class button extends BButton {
	constructor();
	constructor(attr: Button);
	constructor(elem: elem | elem[]);
	constructor(attr: Button, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(convert(bsConstructor<Button>("elem", arg)));
	}

	convert(attr: Button) {
		return super.convert(attr);
	}
}
