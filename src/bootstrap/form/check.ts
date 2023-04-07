import { mergeObject } from "../../core/mergeObject.js";
import { IAttr } from "../../core/tag.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";
import { IAttrBSInput, input as TInput } from "../input.js";
import { label } from "../label.js";

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
	let tDescription = attr.description
		? new div({ id: `${attr.id}-description`, class: "form-text" }, attr.description)
		: "";
	let tValidFeedback = attr.validFeedback
		? new div({ id: `${attr.id}-valid-feedback`, class: "valid-feedback" }, attr.validFeedback)
		: "";
	let tInvalidFeedback = attr.invalidFeedback
		? new div({ id: `${attr.id}-invalid-feedback`, class: "invalid-feedback" }, attr.invalidFeedback)
		: "";

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
	}

	if (!attr.hideLabel) {
		delete attr.label;
	}

	delete attr.hideLabel;
	delete attr.container;
	delete attr.inline;
	delete attr.reverse;
	delete attr.description;
	delete attr.invalidFeedback;
	delete attr.validFeedback;

	let tElem = new TInput(attr as IAttrBSInput);

	return new div(container || {}, [tElem, tLabel ? tLabel : "", tValidFeedback, tInvalidFeedback]);
};
