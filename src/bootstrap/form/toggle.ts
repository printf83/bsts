import { mergeObject } from "../../core/mergeObject.js";
import { UUID } from "../../core/uuid.js";
import { IBsInput, input as TInput } from "../input.js";
import { IBsLabel, label } from "../label.js";

export interface IBsFormToggle extends Omit<IBsInput, "container"> {
	type?: "checkbox" | "radio";
	container?: IBsLabel;
}

export const Toggle = (attr: IBsFormToggle) => {
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

	let tElem = new TInput(attr as IBsInput);

	return [tElem, tLabel];
};
