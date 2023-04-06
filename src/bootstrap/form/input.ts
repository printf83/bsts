import { bootstrapType } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { IAttr, isTag } from "../../core/tag.js";
import { UUID } from "../../core/uuid.js";
import { IAttrTagDatalist, datalist } from "../../html/datalist.js";
import { div } from "../../html/div.js";
import { IAttrBSInput, input as TInput } from "../input.js";
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
	floatingLabel?: true;

	col1?: bootstrapType.col[number];
	col2?: bootstrapType.col[number];
	col3?: false | bootstrapType.col[number];
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

	if (attr.floatingLabel) {
		attr.placeholder ??= attr.label;
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

	let tAttr = Object.assign({}, attr);
	delete tAttr.datalist;
	delete tAttr.label;
	delete tAttr.hideLabel;
	delete tAttr.floatingLabel;
	delete tAttr.description;
	delete tAttr.container;
	delete tAttr.col1;
	delete tAttr.col2;
	delete tAttr.col3;

	let tElem = new TInput(tAttr as IAttrBSInput);

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
		attr.floatingLabel = undefined;

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

	if (attr.floatingLabel) {
		container = mergeObject(
			{
				class: "form-floating",
			},
			container
		);
	}

	if (attr.floatingLabel) {
		return new div(container || {}, [tElem, tDatalist, tDescription, tLabel]);
	} else {
		return new div(container || {}, [tLabel, tElem, tDatalist, tDescription]);
	}
};
