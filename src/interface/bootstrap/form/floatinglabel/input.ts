import { IAttr, IElem } from "../../../core/tag.js";
import { UUID } from "../../../core/uuid.js";
import { Datalist } from "../../../html/datalist.js";
import { div } from "../../../html/div.js";
import { Input as IInput, input as TInput } from "../../input.js";
import { container as TInputGroupContainer } from "../../inputgroup/container.js";
import { label } from "../../label.js";
import { formfloating } from "../../formfloating.js";
import {
	genDatalist,
	genDescription,
	genValidFeedback,
	genInvalidFeedback,
	genGroupItem,
	descriptionSetup,
	genValidTooltip,
	genInvalidTooltip,
	labelFloatingFeedbackManager,
} from "../_fn.js";
import { mergeObject } from "../../../core/mergeObject.js";

export interface Input extends Omit<IInput, "container"> {
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
	datalist?: Datalist["item"];
	container?: IAttr;

	before?: IElem;
	after?: IElem;

	invalidFeedback?: string;
	validFeedback?: string;
	invalidTooltip?: string;
	validTooltip?: string;
}

export const Input = (attr: Input) => {
	let container = attr.container;

	attr.type ??= "text";
	attr.id ??= UUID();
	attr.describedby = descriptionSetup(
		attr.id,
		attr.describedby,
		attr.description,
		attr.validFeedback,
		attr.invalidFeedback,
		attr.validTooltip,
		attr.invalidTooltip
	);
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
	let tValidTooltip = genValidTooltip(attr.id, attr.validTooltip);
	let tInvalidTooltip = genInvalidTooltip(attr.id, attr.invalidTooltip);
	let tElemGroupBefore = genGroupItem(attr.id, attr.before);
	let tElemGroupAfter = genGroupItem(attr.id, attr.after);

	//setup main control
	let tAttr: IInput | Input = Object.assign({}, attr);
	delete tAttr.datalist;
	delete tAttr.label;
	delete tAttr.description;
	delete tAttr.container;
	delete tAttr.before;
	delete tAttr.after;
	delete tAttr.validFeedback;
	delete tAttr.invalidFeedback;
	delete tAttr.validTooltip;
	delete tAttr.invalidTooltip;

	tAttr = tAttr as IInput;
	if (attr.validFeedback || attr.invalidFeedback || attr.validTooltip || attr.invalidTooltip) {
		tAttr = mergeObject(
			{ on: { input: labelFloatingFeedbackManager, invalid: labelFloatingFeedbackManager } },
			tAttr
		);
	}

	let tElem = new TInput(tAttr as IInput);

	//put into tElem
	if (tElemGroupBefore || tElemGroupAfter) {
		return new div(container || {}, [
			new TInputGroupContainer(
				{
					weight: attr.weight,
					class:
						attr.invalidFeedback || attr.validFeedback || attr.invalidTooltip || attr.validTooltip
							? "has-validation"
							: undefined,
					noWarp:
						!attr.invalidFeedback && !attr.validFeedback && !attr.invalidTooltip && !attr.validTooltip
							? true
							: undefined,
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
					tValidTooltip,
					tInvalidTooltip,
				]
			),
			tDescription,
		]);
	} else {
		return new div(container || {}, [tElem, tDatalist, tDescription, tLabel]);
	}
};
