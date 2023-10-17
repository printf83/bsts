import { mergeObject } from "../../core/mergeObject.js";
import { UUID } from "../../core/uuid.js";
import { input, input as TInput } from "../input.js";
import { Label, label } from "../label.js";

export interface Toggle extends Omit<input, "container"> {
	type?: "checkbox" | "radio";
	container?: Label;
}

export const Toggle = (attr: Toggle) => {
	attr.id ??= UUID();
	attr.label ??= attr.id;

	let tLabel = new label(
		mergeObject(
			{
				for: attr.id,
			},
			attr.container
		),
		attr.label
	);

	attr.toggle = true;

	delete attr.container;

	let tElem = new TInput(attr as input);

	return [tElem, tLabel];
};
