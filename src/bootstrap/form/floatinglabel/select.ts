import { UUID } from "../../../core/util/uuid.js";
import { div } from "../../../html/div.js";
import { label } from "../../label.js";
import { select as TSelect } from "../../select.js";
import { container as TInputGroupContainer } from "../../inputgroup/container.js";
import { formfloating } from "../../formfloating.js";
import {
	genDescription,
	genValidFeedback,
	genInvalidFeedback,
	genGroupItem,
	descriptionSetup,
	genValidTooltip,
	genInvalidTooltip,
	labelFloatingFeedbackManager,
} from "../_fn.js";
import { mergeObject } from "../../../core/util/mergeObject.js";
import { select as BSelect } from "../../../interface/bootstrap/form/floatinglabel/select.js";
import { select as ISelect } from "../../../interface/bootstrap/select.js";

export const Select = (attr: BSelect) => {
	let container = attr.container;

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
	let tValidTooltip = genValidTooltip(attr.id, attr.validTooltip);
	let tInvalidTooltip = genInvalidTooltip(attr.id, attr.invalidTooltip);
	let tElemGroupBefore = genGroupItem(attr.id, attr.before);
	let tElemGroupAfter = genGroupItem(attr.id, attr.after);

	//setup main control
	let tAttr: ISelect | BSelect = Object.assign({}, attr);
	delete tAttr.label;
	delete tAttr.description;
	delete tAttr.container;
	delete tAttr.before;
	delete tAttr.after;
	delete tAttr.validFeedback;
	delete tAttr.invalidFeedback;
	delete tAttr.validTooltip;
	delete tAttr.invalidTooltip;

	tAttr = tAttr as ISelect;
	if (attr.validFeedback || attr.invalidFeedback || attr.validTooltip || attr.invalidTooltip) {
		tAttr = mergeObject(
			{ on: { input: labelFloatingFeedbackManager, invalid: labelFloatingFeedbackManager } },
			tAttr
		);
	}

	let tElem = new TSelect(tAttr as ISelect);

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
						[tElem, tLabel]
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
		return new div(container || {}, [tElem, tDescription, tLabel]);
	}
};
