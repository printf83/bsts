import { mergeObject } from "../../core/mergeObject.js";
import { IAttr } from "../../core/tag.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";
import { IAttrBSInput, input as TInput } from "../input.js";
import { label } from "../label.js";
import { genDescription, genValidFeedback, genInvalidFeedback } from "./_fn.js";

export interface IAttrBSFormCheck extends Omit<IAttrBSInput, "container"> {
	type?: "checkbox" | "radio";
	container?: IAttr;
	hideLabel?: true;
	inline?: true;
	reverse?: true;
	description?: string;

	invalidFeedback?: string;
	validFeedback?: string;
}

export const check = (attr: IAttrBSFormCheck) => {
	let container = attr.container;

	attr.type ??= "checkbox";
	attr.id ??= UUID();
	attr.label ??= attr.id;

	if (!container) {
		container = {};
	}

	container = mergeObject(
		{
			class: [
				attr.hideLabel ? undefined : "form-check",
				attr.switch ? "form-switch" : undefined,
				attr.inline ? "form-check-inline" : undefined,
				attr.reverse ? "form-check-reverse" : undefined,
			],
		},
		container
	);
	let tDescription = genDescription(attr.id, attr.description);
	let tValidFeedback = genValidFeedback(attr.id, attr.validFeedback);
	let tInvalidFeedback = genInvalidFeedback(attr.id, attr.invalidFeedback);

	//setup label
	let tLabel: label | null = null;
	if (!attr.hideLabel) {
		tLabel = new label(
			{
				for: attr.id,
				visually: attr.hideLabel ? "hidden" : undefined,
				class: "form-check-label",
			},
			attr.label
		);
		delete attr.label;
	}

	//setup main control
	let tAttr = Object.assign({}, attr);
	if (!tAttr.hideLabel) {
		delete tAttr.label;
	}
	delete tAttr.hideLabel;
	delete tAttr.container;
	delete tAttr.inline;
	delete tAttr.reverse;
	delete tAttr.description;
	delete tAttr.invalidFeedback;
	delete tAttr.validFeedback;
	let tElem = new TInput(tAttr as IAttrBSInput);

	//put in container
	return new div(container || {}, [tElem, tLabel ? tLabel : "", tDescription, tValidFeedback, tInvalidFeedback]);
};
