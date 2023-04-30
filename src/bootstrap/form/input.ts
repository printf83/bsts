import { bootstrapType } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { IAttr, IElem, isTag } from "../../core/tag.js";
import { UUID } from "../../core/uuid.js";
import { Datalist } from "../../html/datalist.js";
import { div } from "../../html/div.js";
import { Input as IInput, input as TInput } from "../input.js";
import { container as TInputGroupContainer } from "../inputgroup/container.js";
import { label } from "../label.js";
import {
	colSetup,
	descriptionSetup,
	genDatalist,
	genDescription,
	genGroupItem,
	genInvalidFeedback,
	genInvalidTooltip,
	genLabel,
	genValidFeedback,
	genValidTooltip,
} from "./_fn.js";

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
	if (attr.datalist) {
		attr.list = `${attr.id}-datalist`;
	}

	//setup element
	let tDatalist = genDatalist(attr.id, attr.datalist);
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

	let tAttr = Object.assign({}, attr);
	if (!tAttr.hideLabel) {
		delete tAttr.label;
	}

	delete tAttr.datalist;
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

	let tElem = new TInput(tAttr as IInput);

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
			tElem = new div({ col: attr.col2 }, [tElem, tDatalist]);
			tDescription = new div({ col: attr.col3 }, tDescription);
		} else {
			tElem = new div({ col: attr.col2 }, [tElem, tDatalist, tDescription]);
			tDescription = "";
		}
		tDatalist = "";
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
		tDatalist,
		tDescription,
		tValidFeedback,
		tInvalidFeedback,
		tValidTooltip,
		tInvalidTooltip,
	]);
};
