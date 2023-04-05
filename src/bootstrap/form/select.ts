import { IAttr } from "../../core/tag.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";
import { label } from "../label.js";
import { IAttrBSSelect, select as TSelect } from "../select.js";

export interface IAttrBSFormSelect extends Omit<IAttrBSSelect, "container"> {
	description?: string;
	container?: IAttr;
}

export const select = (attr: IAttrBSFormSelect) => {
	let container = attr.container;

	attr.id ??= UUID();
	attr.describedby = attr.description ? `${attr.id}-description` : undefined;

	const tLabel = attr.label
		? new label(
				{
					for: attr.id,
					class: ["form-label"],
				},
				attr.label
		  )
		: "";

	const tDescription = attr.description
		? new div({ id: `${attr.id}-description`, class: "form-text" }, attr.description)
		: "";

	delete attr.label;
	delete attr.description;
	delete attr.container;

	return new div(container || {}, [tLabel, new TSelect(attr as IAttrBSSelect), tDescription]);
};
