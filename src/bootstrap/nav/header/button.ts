import { IElem, genTagClass } from "../../../core/tag.js";
import { bsConstArg } from "../../../core/bootstrap.js";
import { mergeObject } from "../../../core/mergeObject.js";
import { UUID } from "../../../core/uuid.js";
import { button as TButton, Button as IButton } from "../../../html/button.js";

export interface Button extends IButton {
	role?: "tab" | "button";
	toggle?: "dropdown" | "pill" | "tab";
	target?: string;
	active?: boolean;
}

const convert = (attr: Button) => {
	switch (attr.toggle) {
		case "dropdown":
			attr.role ??= "button";
			break;
		case "pill":
		case "tab":
			attr.role ??= "tab";
			break;
		default:
		// attr.role ??= "tab";
		// attr.toggle ??= "tab";
	}

	attr = mergeObject(
		{
			id: attr.id || UUID(),
			class: [
				"nav-link",
				attr.active ? "active" : undefined,
				attr.toggle === "dropdown" ? "dropdown-toggle" : undefined,
			],
			aria: {
				selected: attr.active ? "true" : "false",
			},
			role: attr.role,
			data: {
				"bs-target": attr.target,
				"bs-toggle": attr.toggle,
			},
		},
		attr
	);

	delete attr.active;
	delete attr.toggle;
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

export const Button = (AttrOrElem?: Button | IElem, Elem?: IElem) =>
	genTagClass<button, Button>(button, AttrOrElem, Elem);
