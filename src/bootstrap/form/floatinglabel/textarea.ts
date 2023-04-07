import { IAttr, IElem } from "../../../core/tag.js";
import { UUID } from "../../../core/uuid.js";
import { div } from "../../../html/div.js";
import { label } from "../../label.js";
import { IAttrBSTextarea, textarea as TTextarea } from "../../textarea.js";
import { container as TInputGroupContainer } from "../../inputgroup/container.js";
import { formfloating } from "../../formfloating.js";
import { genDescription, genValidFeedback, genInvalidFeedback, genGroupItem } from "../_fn.js";

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

	//setup label
	let tLabel = attr.label
		? new label(
				{
					for: attr.id,
					class: "form-label",
				},
				attr.label
		  )
		: "";

	//setup element
	let tDescription = genDescription(attr.id, attr.description);
	let tValidFeedback = genValidFeedback(attr.id, attr.validFeedback);
	let tInvalidFeedback = genInvalidFeedback(attr.id, attr.invalidFeedback);
	let tElemGroupBefore = genGroupItem(attr.id, attr.before);
	let tElemGroupAfter = genGroupItem(attr.id, attr.after);

	//setup main control
	let tAttr = Object.assign({}, attr);
	delete tAttr.label;
	delete tAttr.description;
	delete tAttr.container;
	delete tAttr.before;
	delete tAttr.after;
	delete tAttr.validFeedback;
	delete tAttr.invalidFeedback;
	let tElem = new TTextarea(tAttr as IAttrBSTextarea);

	//put into tElem
	if (tElemGroupBefore || tElemGroupAfter) {
		return new div(container || {}, [
			new TInputGroupContainer(
				{
					weight: attr.weight,
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
