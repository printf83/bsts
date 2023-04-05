import { mergeObject } from "../../core/mergeObject.js";
import { IAttr } from "../../core/tag.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";
import { IAttrBSInput, input as TInput } from "../input.js";
import { label } from "../label.js";

export interface IAttrBSFormInput extends Omit<IAttrBSInput, "container"> {
	description?: string;
	container?: IAttr;
}

export const input = (attr: IAttrBSFormInput) => {
	let container = attr.container;

	attr.id ??= UUID();
	attr.describedby = attr.description ? `${attr.id}-description` : undefined;

	if (attr.type === "checkbox" || attr.type === "radio") {
		if (!container) {
			container = {};
		}

		container = mergeObject(
			{
				class: ["form-check", attr.switch ? "form-switch" : undefined],
			},
			container
		);
	}

	const tLabel = attr.label
		? new label(
				{
					for: attr.id,
					class: [attr.type === "checkbox" || attr.type === "radio" ? "form-check-label" : "form-label"],
				},
				attr.label
		  )
		: "";
	const tDescription = attr.description
		? new div({ id: `${attr.id}-description`, class: "form-text" }, attr.description)
		: "";

	delete attr.label;
	delete attr.description;
	delete attr.container;

	if (attr.type === "checkbox" || attr.type === "radio") {
		return new div(container || {}, [new TInput(attr as IAttrBSInput), tLabel, tDescription]);
	} else {
		return new div(container || {}, [tLabel, new TInput(attr as IAttrBSInput), tDescription]);
	}
};
