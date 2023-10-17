import { bootstrapType } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { IAttr, IElem, isTag } from "../../core/tag.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";
import { label } from "../label.js";
import { Textarea as ITextarea, textarea as TTextarea } from "../textarea.js";
import { container as TInputGroupContainer } from "../inputgroup/container.js";
import {
	genLabel,
	genDescription,
	genValidFeedback,
	genInvalidFeedback,
	genGroupItem,
	colSetup,
	descriptionSetup,
	genInvalidTooltip,
	genValidTooltip,
} from "./_fn.js";

export interface Textarea extends Omit<ITextarea, "container"> {
	description?: string;
	container?: IAttr;

	hideLabel?: true;

	before?: IElem;
	after?: IElem;

	col1?: bootstrapType.col;
	col2?: bootstrapType.col;
	col3?: false | bootstrapType.col;

	invalidFeedback?: string;
	validFeedback?: string;
	invalidTooltip?: string;
	validTooltip?: string;
}

export const Textarea = (attr: Textarea) => {
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
	//setup element
	let tLabel = genLabel(attr.id, attr.label, attr.hideLabel);
	let tDescription = genDescription(attr.id, attr.description);
	let tValidFeedback = genValidFeedback(attr.id, attr.validFeedback);
	let tInvalidFeedback = genInvalidFeedback(attr.id, attr.invalidFeedback);
	let tValidTooltip = genValidTooltip(attr.id, attr.validTooltip);
	let tInvalidTooltip = genInvalidTooltip(attr.id, attr.invalidTooltip);
	let tElemGroupBefore = genGroupItem(attr.id, attr.before);
	let tElemGroupAfter = genGroupItem(attr.id, attr.after);
	let colSetting = colSetup(
		attr.validFeedback,
		attr.invalidFeedback,
		attr.description,
		attr.col1,
		attr.col2,
		attr.col3
	);
	attr.col1 = colSetting.col1;
	attr.col2 = colSetting.col2;
	attr.col3 = colSetting.col3;

	//setup main control
	let tAttr = Object.assign({}, attr);
	if (!tAttr.hideLabel) {
		delete tAttr.label;
	}

	delete tAttr.hideLabel;
	delete tAttr.description;
	delete tAttr.container;
	delete tAttr.before;
	delete tAttr.after;
	delete tAttr.col1;
	delete tAttr.col2;
	delete tAttr.col3;
	delete tAttr.validFeedback;
	delete tAttr.invalidFeedback;
	delete tAttr.validTooltip;
	delete tAttr.invalidTooltip;

	let tElem = new TTextarea(tAttr as ITextarea);

	//setup container if col provided
	if (attr.col1) {
		if (!container) {
			container = {};
		}

		container = mergeObject(
			{
				row: true,
			},
			container
		);

		if (isTag<label>(tLabel)) {
			tLabel.attr = mergeObject(
				{
					col: attr.col1,
					class: ["col-form-label", attr.weight ? `col-form-label-${attr.weight}` : undefined],
				},
				tLabel.attr
			);
		}

		if (attr.col3 !== false) {
			tElem = new div({ col: attr.col2 }, tElem);
			tDescription = new div({ col: attr.col3 }, tDescription);
		} else {
			tElem = new div({ col: attr.col2 }, [tElem, tDescription]);
			tDescription = "";
		}
	} else {
		if (isTag<label>(tLabel)) {
			tLabel.attr = mergeObject({ class: "form-label" }, tLabel.attr);
		}
	}

	//put into tElem
	if (tElemGroupBefore.length > 0 || tElemGroupAfter.length > 0) {
		tElem = new TInputGroupContainer(
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
				position: tInvalidTooltip || tValidTooltip ? "relative" : undefined,
			},
			[
				...tElemGroupBefore,
				tElem,
				...tElemGroupAfter,
				tValidFeedback,
				tInvalidFeedback,
				tValidTooltip,
				tInvalidTooltip,
			]
		);

		tValidFeedback = "";
		tInvalidFeedback = "";
		tValidTooltip = "";
		tInvalidTooltip = "";
	}

	if (tValidTooltip || tInvalidTooltip) {
		if (!container) {
			container = {};
		}

		container = mergeObject({ position: "relative" }, container);
	}

	return new div(container || {}, [
		tLabel,
		tElem,
		tDescription,
		tValidFeedback,
		tInvalidFeedback,
		tValidTooltip,
		tInvalidTooltip,
	]);
};
