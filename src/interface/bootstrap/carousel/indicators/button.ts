import { IElem } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { button as TButton, Button as IButton } from "../../../html/button.js";
import { mergeObject } from "../../../core/mergeObject.js";

export interface Button extends IButton {
	active?: boolean;
	slide?: number;
	target?: string;
}

const convert = (attr: Button) => {
	attr = mergeObject(
		{
			class: [attr.active ? "active" : undefined],
			aria: {
				current: attr.active ? "true" : undefined,
			},
			data: {
				"bs-target": attr.target,
				"bs-slide-to": attr.slide?.toString(),
			},
		},
		attr
	);

	delete attr.active;
	delete attr.slide;
	delete attr.target;

	return attr;
};

export class button extends TButton {
	constructor();
	constructor(attr: Button);
	constructor(elem: IElem);
	constructor(attr: Button, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Button>("elem", arg)));
	}
}
