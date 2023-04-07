import { bootstrapType } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { IAttr, IElem, isTag, tag } from "../../core/tag.js";
import { UUID } from "../../core/uuid.js";
import { IAttrTagDatalist, datalist } from "../../html/datalist.js";
import { div } from "../../html/div.js";
import { IAttrBSInput, input as TInput } from "../input.js";
import { text as TInputGroupText } from "../inputgroup/text.js";
import { container as TInputGroupContainer } from "../inputgroup/container.js";
import { label } from "../label.js";

export interface IAttrBSFormInput extends Omit<IAttrBSInput, "container"> {
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

	hideLabel?: true;

	before?: IElem;
	after?: IElem;

	col1?: bootstrapType.col[number];
	col2?: bootstrapType.col[number];
	col3?: false | bootstrapType.col[number];

	invalidFeedback?: string;
	validFeedback?: string;
}

export const input = (attr: IAttrBSFormInput) => {
	let container = attr.container;

	attr.id ??= UUID();
	attr.describedby = attr.description ? `${attr.id}-description` : undefined;

	//setup element

	let tDatalist = attr.datalist ? new datalist({ id: `${attr.id}-datalist`, item: attr.datalist }) : "";
	if (attr.datalist) {
		attr.list = `${attr.id}-datalist`;
	}

	let tLabel = attr.label
		? new label(
				{
					for: attr.id,
					visually: attr.hideLabel ? "hidden" : undefined,
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
	delete tAttr.datalist;
	delete tAttr.label;
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

	let tElem = new TInput(tAttr as IAttrBSInput);

	//manage input group
	let tElemGroupBefore: (string | tag)[] = [];

	if (attr.before) {
		if (!Array.isArray(attr.before)) {
			attr.before = [attr.before];
		}

		attr.before.forEach((i, ix) => {
			if (typeof i === "string") {
				switch (i) {
					case "checkbox":
						tElemGroupBefore.push(
							new TInputGroupText(
								new TInput({
									marginTop: 0,
									type: "checkbox",
									id: `${attr.id}-checkbox-${ix}`,
									aria: { label: "Checkbox for following input" },
								})
							)
						);
						break;
					case "radio":
						tElemGroupBefore.push(
							new TInputGroupText(
								new TInput({
									marginTop: 0,
									type: "radio",
									id: `${attr.id}-radio-${ix}`,
									aria: { label: "Radio for following input" },
								})
							)
						);
						break;
					case "switch":
						tElemGroupBefore.push(
							new TInputGroupText(
								new TInput({
									marginTop: 0,
									type: "checkbox",
									switch: true,
									id: `${attr.id}-switch-${ix}`,
									aria: { label: "Switch for following input" },
								})
							)
						);
						break;
					default:
						tElemGroupBefore.push(new TInputGroupText(i));
				}
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

		attr.after.forEach((i, ix) => {
			if (typeof i === "string") {
				switch (i) {
					case "checkbox":
						tElemGroupAfter.push(
							new TInputGroupText(
								new TInput({
									marginTop: 0,
									type: "checkbox",
									id: `${attr.id}-checkbox-${ix}`,
									aria: { label: "Checkbox for last input" },
								})
							)
						);
						break;
					case "radio":
						tElemGroupAfter.push(
							new TInputGroupText(
								new TInput({
									marginTop: 0,
									type: "radio",
									id: `${attr.id}-radio-${ix}`,
									aria: { label: "Radio for last input" },
								})
							)
						);
						break;
					case "switch":
						tElemGroupAfter.push(
							new TInputGroupText(
								new TInput({
									marginTop: 0,
									type: "checkbox",
									switch: true,
									id: `${attr.id}-switch-${ix}`,
									aria: { label: "Switch for last input" },
								})
							)
						);
						break;
					default:
						tElemGroupAfter.push(new TInputGroupText(i));
				}
			} else {
				tElemGroupAfter.push(i);
			}
		});
	}

	//setup col if provided
	if (attr.col1) {
		attr.col2 ??= "auto";

		if (attr.description && attr.col3 !== false) {
			attr.col3 ??= "auto";
		} else {
			attr.col3 = false;
		}
	}

	if (attr.col2) {
		attr.col1 ??= "auto";

		if (attr.description && attr.col3 !== false) {
			attr.col3 ??= "auto";
		} else {
			attr.col3 = false;
		}
	}

	if (attr.col3) {
		attr.col1 ??= "auto";
		attr.col2 ??= "auto";
	}

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
			tLabel.attr = mergeObject({ col: attr.col1, class: "col-form-label" }, tLabel.attr);
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
				class: attr.invalidFeedback || attr.validFeedback ? "has-validation" : undefined,
				noWarp: !attr.invalidFeedback && !attr.validFeedback ? true : undefined,
			},
			[...tElemGroupBefore, tElem, ...tElemGroupAfter, tValidFeedback, tInvalidFeedback]
		);
	}

	return new div(container || {}, [tLabel, tElem, tDatalist, tDescription]);
};
