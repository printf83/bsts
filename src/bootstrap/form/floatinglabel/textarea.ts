import { mergeObject } from "../../../core/mergeObject.js";
import { IAttr, IElem, isTag, tag } from "../../../core/tag.js";
import { UUID } from "../../../core/uuid.js";
import { div } from "../../../html/div.js";
import { label } from "../../label.js";
import { IAttrBSTextarea, textarea as TTextarea } from "../../textarea.js";
import { text as TInputGroupText } from "../../inputgroup/text.js";
import { container as TInputGroupContainer } from "../../inputgroup/container.js";
import { formfloating } from "../../formfloating.js";

export interface IAttrBSFormFloatingLabelTextarea extends Omit<IAttrBSTextarea, "container"> {
	description?: string;
	container?: IAttr;

	before?: IElem;
	after?: IElem;

	invalidFeedback?: string;
	validFeedback?: string;
}

export const textarea = (attr: IAttrBSFormFloatingLabelTextarea) => {
	let container = attr.container;

	attr.id ??= UUID();
	attr.describedby = attr.description ? `${attr.id}-description` : undefined;

	attr.placeholder ??= attr.label;

	let tLabel = attr.label
		? new label(
				{
					for: attr.id,
				},
				attr.label
		  )
		: "";

	let tDescription = attr.description
		? new div({ id: `${attr.id}-description`, class: "form-text" }, attr.description)
		: "";
	let tValidFeedback = attr.validFeedback
		? new div({ id: `${attr.id}-valid-feedback`, class: "valid-feedback" }, attr.validFeedback)
		: "";
	let tInvalidFeedback = attr.invalidFeedback
		? new div({ id: `${attr.id}-invalid-feedback`, class: "invalid-feedback" }, attr.invalidFeedback)
		: "";

	let tAttr = Object.assign({}, attr);
	delete tAttr.label;
	delete tAttr.description;
	delete tAttr.container;
	delete tAttr.before;
	delete tAttr.after;
	delete tAttr.validFeedback;
	delete tAttr.invalidFeedback;

	let tElem = new TTextarea(tAttr as IAttrBSTextarea);

	//manage input group
	let tElemGroupBefore: (string | tag)[] = [];

	if (attr.before) {
		if (!Array.isArray(attr.before)) {
			attr.before = [attr.before];
		}

		attr.before.forEach((i) => {
			if (typeof i === "string") {
				tElemGroupBefore.push(new TInputGroupText(i));
			} else {
				tElemGroupBefore.push(i);
			}
		});
	}

	let tElemGroupAfter: (string | tag)[] = [];

	if (attr.after) {
		if (!Array.isArray(attr.after)) {
			attr.after = [attr.after];
		}

		attr.after.forEach((i) => {
			if (typeof i === "string") {
				tElemGroupAfter.push(new TInputGroupText(i));
			} else {
				tElemGroupAfter.push(i);
			}
		});
	}

	if (isTag<label>(tLabel)) {
		tLabel.attr = mergeObject({ class: "form-label" }, tLabel.attr);
	}

	//put into tElem
	if (tElemGroupBefore || tElemGroupAfter) {
		return new div(container || {}, [
			new TInputGroupContainer(
				{
					class: attr.invalidFeedback || attr.validFeedback ? "has-validation" : undefined,
					noWarp: !attr.invalidFeedback && !attr.validFeedback ? true : undefined,
				},
				[
					...tElemGroupBefore,
					new formfloating(
						{
							class: [
								attr.isvalid === true ? "is-valid" : undefined,
								attr.isvalid === false ? "is-invalid" : undefined,
							],
						},
						[tElem, tLabel]
					),
					...tElemGroupAfter,
					tValidFeedback,
					tInvalidFeedback,
				]
			),
			tDescription,
		]);
	} else {
		return new div(container || {}, [tElem, tDescription, tLabel]);
	}
};
