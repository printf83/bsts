import { bsConstArg } from "../core/base/bootstrap.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { UUID } from "../core/fn/uuid.js";
import { IAttrTagInput, input as TInput } from "../html/input.js";

export interface IAttrBSInput extends IAttrTagInput {
	weight?: "sm" | "lg";
	toggle?: true;
	switch?: true;
	role?: string;
}

const convert = (attr: IAttrBSInput) => {
	//set default value
	attr.type = attr.type || "text";

	//set to checkbox if swithc
	if (attr.switch) {
		attr.type = "checkbox";
		attr.role = "switch";
	}

	//autocomplete off if toggle
	if (attr.toggle) attr.autocomplete = "off";

	attr = mergeObject(
		{
			id: attr.id || UUID(),
			type: attr.type,
			class: [
				["range", "radio", "checkbox"].indexOf(attr.type) === -1 && attr.readonly !== true
					? "form-control"
					: undefined,
				["radio", "checkbox"].indexOf(attr.type) > -1
					? attr.toggle === true
						? "btn-check"
						: "form-check-input"
					: undefined,
				attr.type === "color" ? "form-control-color" : undefined,
				attr.type === "range" ? "form-range" : undefined,
				attr.readonly ? "form-control-plaintext" : undefined,
				attr.weight ? `form-control-${attr.weight}` : undefined,
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
		super(bsConstArg<IAttrBSInput>("value", convert, arg));
	}
}
