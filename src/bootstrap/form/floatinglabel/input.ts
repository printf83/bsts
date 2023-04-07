import { mergeObject } from "../../../core/mergeObject.js";
import { IAttr, IElem, isTag, tag } from "../../../core/tag.js";
import { UUID } from "../../../core/uuid.js";
import { IAttrTagDatalist, datalist } from "../../../html/datalist.js";
import { div } from "../../../html/div.js";
import { IAttrBSInput, input as TInput } from "../../input.js";
import { text as TInputGroupText } from "../../inputgroup/text.js";
import { container as TInputGroupContainer } from "../../inputgroup/container.js";
import { label } from "../../label.js";

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
}

export const input = (attr: IAttrBSFormFloatingLabelInput) => {
	let container = attr.container;

	attr.id ??= UUID();
	attr.describedby = attr.description ? `${attr.id}-description` : undefined;

	//setup element

	let tDatalist = attr.datalist ? new datalist({ id: `${attr.id}-datalist`, item: attr.datalist }) : "";
	if (attr.datalist) {
		attr.list = `${attr.id}-datalist`;
	}

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

	let tAttr = Object.assign({}, attr);
	delete tAttr.datalist;
	delete tAttr.label;
	delete tAttr.description;
	delete tAttr.container;
	delete tAttr.before;
	delete tAttr.after;

	let tElem = new TInput(tAttr as IAttrBSInput);

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

	container = mergeObject(
		{
			class: "form-floating",
		},
		container
	);

	//put into tElem
	if (tElemGroupBefore || tElemGroupAfter) {
		return new div(container || {}, [
			new TInputGroupContainer({ noWarp: true }, [
				...tElemGroupBefore,
				new div(container || {}, [tElem, tDatalist, tLabel]),
				...tElemGroupAfter,
			]),
			tDescription,
		]);
	} else {
		return new div(container || {}, [tElem, tDatalist, tDescription, tLabel]);
	}
};
