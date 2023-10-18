import { elem } from "../../interface/core/elem.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { button as BButton } from "../button.js";
import { button as IButton } from "../../interface/bootstrap/collapse/button.js";

const convert = (attr: IButton) => {
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
	constructor(attr: IButton);
	constructor(elem: elem);
	constructor(attr: IButton, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IButton>("elem", arg)));
	}
}
