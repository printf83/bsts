import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";
import { UUID } from "../core/uuid.js";
import { IAttrTagInput, input as TInput } from "../html/input.js";

export interface IAttrBSInput extends IAttrTagInput {
	weight?: "sm" | "lg";
	toggle?: true;
	switch?: true;
	plaintext?: true;
	role?: string;
	isvalid?: boolean;
}

const convert = (attr: IAttrBSInput) => {
	//set default value
	attr.type ??= "text";

	//set to checkbox if swithc
	if (attr.switch) {
		attr.type = "checkbox";
		attr.role = "switch";
	}

	//readonly if plaintext
	if (attr.plaintext) {
		attr.readonly = true;
	}

	//autocomplete off if toggle
	if (attr.toggle) attr.autocomplete = "off";

	attr = mergeObject(
		{
			id: attr.id || UUID(),
			type: attr.type,
			class: [
				["range", "radio", "checkbox"].indexOf(attr.type) === -1 && !attr.plaintext
					? "form-control"
					: undefined,
				["radio", "checkbox"].indexOf(attr.type) > -1
					? attr.toggle === true
						? "btn-check"
						: "form-check-input"
					: undefined,
				attr.type === "color" ? "form-control-color" : undefined,
				attr.type === "range" ? "form-range" : undefined,
				attr.plaintext ? "form-control-plaintext" : undefined,
				attr.weight ? `form-control-${attr.weight}` : undefined,
				attr.isvalid !== undefined ? (attr.isvalid ? "is-valid" : "is-invalid") : undefined,
			],
		},
		attr
	);

	delete attr.weight;
	delete attr.toggle;
	delete attr.switch;
	delete attr.plaintext;
	delete attr.isvalid;

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
