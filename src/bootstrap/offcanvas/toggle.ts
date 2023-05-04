import { genTagClass, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { button, Button } from "../button.js";

export interface Toggle extends Button {
	link?: true;
	target?: string;
}

const convert = (attr: Toggle) => {
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

	return attr;
};

export class toggle extends button {
	constructor();
	constructor(attr: Toggle);
	constructor(elem: IElem);
	constructor(attr: Toggle, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Toggle>("elem", arg)));
	}
}

export const Toggle = (AttrOrElem?: Toggle | IElem, Elem?: IElem) =>
	genTagClass<toggle, Toggle>(toggle, AttrOrElem, Elem);
