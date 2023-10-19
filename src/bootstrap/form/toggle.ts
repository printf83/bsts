import { mergeObject } from "../../core/util/mergeObject.js";
import { UUID } from "../../core/util/uuid.js";
import { input as BInput } from "../input.js";
import { label } from "../label.js";
import { input as IInput } from "../../interface/bootstrap/input.js";
import { toggle as IToggle } from "../../interface/bootstrap/form/toggle.js";

export const Toggle = (attr: IToggle) => {
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

	let tElem = new BInput(attr as IInput);

	return [tElem, tLabel];
};
