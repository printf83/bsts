import { bootstrapType } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { IAttr } from "../../core/tag.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";
import { label } from "../label.js";
import { IAttrBSTextarea, textarea as TTextarea } from "../textarea.js";

export interface IAttrBSFormTextarea extends Omit<IAttrBSTextarea, "container"> {
	description?: string;
	container?: IAttr;

	col1?: bootstrapType.col[number];
	col2?: bootstrapType.col[number];
	col3?: false | bootstrapType.col[number];
}

export const textarea = (attr: IAttrBSFormTextarea) => {
	let container = attr.container;

	attr.id ??= UUID();
	attr.describedby = attr.description ? `${attr.id}-description` : undefined;

	let tLabel = attr.label
		? new label(
				{
					for: attr.id,
					class: ["form-label"],
				},
				attr.label
		  )
		: "";

	let tDescription = attr.description
		? new div({ id: `${attr.id}-description`, class: "form-text" }, attr.description)
		: "";

	let tElem = new TTextarea(attr as IAttrBSTextarea);

	//setup col if provided
	if (attr.col1) {
		attr.col2 ??= "auto";

		if (attr.col3 !== false) {
			attr.col3 ??= "auto";
		}
	}

	if (attr.col2) {
		attr.col1 ??= "auto";

		if (attr.col3 !== false) {
			attr.col3 ??= "auto";
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

		tLabel = new div({ col: attr.col1 }, tLabel);

		if (attr.col3 !== false) {
			tElem = new div({ col: attr.col2 }, tElem);
			tDescription = new div({ col: attr.col3 }, tDescription);
		} else {
			tElem = new div({ col: attr.col2 }, [tElem, tDescription]);
			tDescription = "";
		}
	}

	delete attr.label;
	delete attr.description;
	delete attr.container;
	delete attr.col1;
	delete attr.col2;
	delete attr.col3;

	return new div(container || {}, [tLabel, tElem, tDescription]);
};
