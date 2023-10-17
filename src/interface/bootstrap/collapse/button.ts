import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { button as Tbutton, Button as TButton } from "../button.js";

export interface Button extends TButton {
	link?: true;
	target?: string;
	expanded?: boolean;
	icon?: boolean;
}

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

export class button extends Tbutton {
	constructor();
	constructor(attr: Button);
	constructor(elem: IElem);
	constructor(attr: Button, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Button>("elem", arg)));
	}
}
