import { mergeObject } from "../core/fn/mergeObject.js";
import { UUID } from "../core/fn/uuid.js";
import { IAttrTagInput, input as TInput } from "../tag/input.js";

export interface IAttrBSInput extends IAttrTagInput {
	weight?: "sm" | "lg";
	toggle?: true;
}

const convert = (attr: IAttrBSInput) => {
	//set default type (to make sure type is not undefind)
	if (!attr.type) attr.type = "text";

	//autocomplete off if toggle
	if (attr.toggle) attr.autocomplete = "off";

	attr = mergeObject(
		{
			id: attr.id || UUID(),
			type: attr.type,
			class: [
				["range", "radio", "checkbox"].indexOf(attr.type) === -1 && attr.readonly !== true
					? "form-control"
					: "",
				["radio", "checkbox"].indexOf(attr.type) > -1
					? attr.toggle === true
						? "btn-check"
						: "form-check-input"
					: "",
				attr.type === "color" ? "form-control-color" : "",
				attr.type === "range" ? "form-range" : "",
				attr.readonly ? "form-control-plaintext" : "",
				attr.weight ? `form-control-${attr.weight}` : "",
			],
		},
		attr
	);

	delete attr.weight;
	delete attr.toggle;

	return attr;
};

export class input extends TInput {
	constructor(); //#1
	constructor(value: string); //#2
	constructor(attr: IAttrBSInput); //#3
	constructor(attr: IAttrBSInput, value: string); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (typeof arg[0] === "string") {
				//#2
				super(convert({ value: arg[0] }));
			} else {
				//#3
				super(convert(arg[0]));
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(mergeObject({ value: arg[1] }, arg[0])));
		}
	}
}
