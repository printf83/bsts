import { IAttr, IElem } from "../../../core/tag.js";
import { UUID } from "../../../core/uuid.js";
import { IAttrTagDatalist } from "../../../html/datalist.js";
import { div } from "../../../html/div.js";
import { IAttrBSInput, input as TInput } from "../../input.js";
import { container as TInputGroupContainer } from "../../inputgroup/container.js";
import { label } from "../../label.js";
import { formfloating } from "../../formfloating.js";
import { genDatalist, genDescription, genValidFeedback, genInvalidFeedback, genGroupItem } from "../_fn.js";

export interface IAttrBSFormFloatingLabelInput extends Omit<IAttrBSInput, "container"> {
	type?:
		| "button"
		| "color"
		| "date"
		| "datetime-local"
		| "email"
		| "file"
		| "hidden"
		| "image"
		| "month"
		| "number"
		| "password"
		| "range"
		| "reset"
		| "search"
		| "submit"
		| "tel"
		| "text"
		| "time"
		| "url"
		| "week";
	description?: string;
	datalist?: IAttrTagDatalist["item"];
	container?: IAttr;

	before?: IElem;
	after?: IElem;

	invalidFeedback?: string;
	validFeedback?: string;
}

export const input = (attr: IAttrBSFormFloatingLabelInput) => {
	let container = attr.container;

	attr.type ??= "text";
	attr.id ??= UUID();
	attr.describedby = attr.description ? `${attr.id}-description` : undefined;
	attr.placeholder ??= attr.label;
	if (attr.datalist) {
		attr.list = `${attr.id}-datalist`;
	}

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
	let tDatalist = genDatalist(attr.id, attr.datalist);
	let tDescription = genDescription(attr.id, attr.description);
	let tValidFeedback = genValidFeedback(attr.id, attr.validFeedback);
	let tInvalidFeedback = genInvalidFeedback(attr.id, attr.invalidFeedback);
	let tElemGroupBefore = genGroupItem(attr.id, attr.before);
	let tElemGroupAfter = genGroupItem(attr.id, attr.after);

	//setup main control
	let tAttr = Object.assign({}, attr);
	delete tAttr.datalist;
	delete tAttr.label;
	delete tAttr.description;
	delete tAttr.container;
	delete tAttr.before;
	delete tAttr.after;
	delete tAttr.validFeedback;
	delete tAttr.invalidFeedback;
	let tElem = new TInput(tAttr as IAttrBSInput);

	//put into tElem
	if (tElemGroupBefore || tElemGroupAfter) {
		return new div(container || {}, [
			new TInputGroupContainer(
				{
					weight: attr.weight,
					class: attr.invalidFeedback || attr.validFeedback ? "has-validation" : "undefined",
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
						[tElem, tDatalist, tLabel]
					),
					...tElemGroupAfter,
					tValidFeedback,
					tInvalidFeedback,
				]
			),
			tDescription,
		]);
	} else {
		return new div(container || {}, [tElem, tDatalist, tDescription, tLabel]);
	}
};
