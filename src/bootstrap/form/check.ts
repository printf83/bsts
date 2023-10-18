import { attr } from "../../interface/core/attr.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";
import { input as TInput } from "../input.js";
import { label } from "../label.js";
import {
	genDescription,
	genValidFeedback,
	genInvalidFeedback,
	descriptionSetup,
	genInvalidTooltip,
	genValidTooltip,
} from "./_fn.js";

import { input as BInput } from "../../interface/bootstrap/input.js";
import { check as ICheck } from "../../interface/bootstrap/form/check.js";

export const Check = (attr: ICheck) => {
	attr.type ??= "checkbox";
	attr.id ??= UUID();
	attr.label ??= attr.id;
	attr.describedby = descriptionSetup(
		attr.id,
		attr.describedby,
		attr.description,
		attr.validFeedback,
		attr.invalidFeedback,
		attr.validTooltip,
		attr.invalidTooltip
	);

	let tContainer: attr = {
		class: [
			attr.hideLabel ? undefined : "form-check",
			attr.switch ? "form-switch" : undefined,
			attr.inline ? "form-check-inline" : undefined,
			attr.reverse ? "form-check-reverse" : undefined,
		],
		position: attr.validTooltip || attr.invalidTooltip ? "relative" : undefined,
	};

	let tDescription = genDescription(attr.id, attr.description);
	let tValidFeedback = genValidFeedback(attr.id, attr.validFeedback);
	let tInvalidFeedback = genInvalidFeedback(attr.id, attr.invalidFeedback);
	let tValidTooltip = genValidTooltip(attr.id, attr.validTooltip);
	let tInvalidTooltip = genInvalidTooltip(attr.id, attr.invalidTooltip);

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
	delete tAttr.validTooltip;
	delete tAttr.invalidTooltip;
	let tElem = new TInput(tAttr as BInput);

	//put in container
	if (attr.container) {
		return new div(
			attr.container,
			new div(tContainer, [
				tElem,
				tLabel ? tLabel : "",
				tDescription,
				tValidFeedback,
				tInvalidFeedback,
				tValidTooltip,
				tInvalidTooltip,
			])
		);
	} else {
		return new div(tContainer, [
			tElem,
			tLabel ? tLabel : "",
			tDescription,
			tValidFeedback,
			tInvalidFeedback,
			tValidTooltip,
			tInvalidTooltip,
		]);
	}
};
