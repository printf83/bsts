import { bootstrapType } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { IAttr, IElem, isTag } from "../../core/tag.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";
import { label } from "../label.js";
import { IAttrBSSelect, select as TSelect } from "../select.js";
import { container as TInputGroupContainer } from "../inputgroup/container.js";
import { genLabel, genDescription, genValidFeedback, genInvalidFeedback, genGroupItem, colSetup } from "./_fn.js";

export interface IAttrBSFormSelect extends Omit<IAttrBSSelect, "container"> {
	description?: string;
	container?: IAttr;

	hideLabel?: true;

	before?: IElem;
	after?: IElem;

	col1?: bootstrapType.col[number];
	col2?: bootstrapType.col[number];
	col3?: false | bootstrapType.col[number];

	invalidFeedback?: string;
	validFeedback?: string;
}

export const select = (attr: IAttrBSFormSelect) => {
	let container = attr.container;

	attr.id ??= UUID();
	attr.describedby = attr.description ? `${attr.id}-description` : undefined;

	//setup element
	let tLabel = genLabel(attr.id, attr.label, attr.hideLabel);
	let tDescription = genDescription(attr.id, attr.description);
	let tValidFeedback = genValidFeedback(attr.id, attr.validFeedback);
	let tInvalidFeedback = genInvalidFeedback(attr.id, attr.invalidFeedback);
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

	let tElem = new TSelect(tAttr as IAttrBSSelect);

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
				class: attr.invalidFeedback || attr.validFeedback ? "has-validation" : undefined,
				noWarp: !attr.invalidFeedback && !attr.validFeedback ? true : undefined,
			},
			[...tElemGroupBefore, tElem, ...tElemGroupAfter, tValidFeedback, tInvalidFeedback]
		);
	}

	return new div(container || {}, [tLabel, tElem, tDescription]);
};
