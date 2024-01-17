import { bsConstructor } from "../core/bootstrap.js";
import { mergeObject } from "../core/util/mergeObject.js";
import { UUID } from "../core/util/uuid.js";
import { input as HInput } from "../html/input.js";
import { input as Input } from "../interface/bootstrap/input.js";

/**
 * Converts the Input attribute object by setting defaults
 * and mapping properties to appropriate HTML attributes.
 * Handles specifics around input types like checkbox, radio,
 * plaintext, etc.
 */
export class input extends HInput {
	constructor();
	constructor(value: string);
	constructor(attr: Input);
	constructor(attr: Input, value: string);
	constructor(...arg: any[]) {
		super(bsConstructor<Input>("value", arg));
	}

	convert(attr: Input) {
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
		return super.convert(attr);
	}
}
