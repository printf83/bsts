import { bsConstArg } from "../core/bootstrap.js";
import { mergeObject } from "../core/mergeObject.js";

import { UUID } from "../core/uuid.js";
import { Input as IInput, input as TInput } from "../html/input.js";

export interface Input extends IInput {
	weight?: "sm" | "lg";
	toggle?: true;
	switch?: true;
	plaintext?: true;
	isvalid?: boolean;
}

const convert = (attr: Input) => {
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
	constructor();
	constructor(value: string);
	constructor(attr: Input);
	constructor(attr: Input, value: string);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Input>("value", arg)));
	}
}
