import { IElem, tag } from "../../core/tag.js";
import { IAttrTagDatalist, datalist as TDatalist } from "../../html/datalist.js";
import { div } from "../../html/div.js";
import { input } from "../input.js";
import { label as TLabel } from "../label.js";
import { text } from "../inputgroup/text.js";
import { bootstrapType } from "../../core/bootstrap.js";

export const genDatalist = (id: string, datalist?: IAttrTagDatalist["item"]) => {
	return datalist ? new TDatalist({ id: `${id}-datalist`, item: datalist }) : "";
};

export const genDescription = (id: string, description?: string) => {
	return description ? new div({ id: `${id}-description`, class: "form-text" }, description) : "";
};

export const genValidFeedback = (id: string, feedback?: string) => {
	return feedback ? new div({ id: `${id}-valid-feedback`, class: "valid-feedback" }, feedback) : "";
};

export const genInvalidFeedback = (id: string, feedback?: string) => {
	return feedback ? new div({ id: `${id}-invalid-feedback`, class: "invalid-feedback" }, feedback) : "";
};

export const genGroupItem = (id: string, item?: IElem) => {
	let result: (string | tag)[] = [];

	if (item) {
		if (!Array.isArray(item)) {
			item = [item];
		}

		item.forEach((i, ix) => {
			if (typeof i === "string") {
				switch (i) {
					case "[checkbox]":
						result.push(
							new text(
								new input({
									marginTop: 0,
									type: "checkbox",
									id: `${id}-checkbox-${ix}`,
								})
							)
						);
						break;
					case "[radio]":
						result.push(
							new text(
								new input({
									marginTop: 0,
									type: "radio",
									id: `${id}-radio-${ix}`,
								})
							)
						);
						break;

					default:
						result.push(new text(i));
				}
			} else {
				result.push(i);
			}
		});
	}

	return result;
};

export const genLabel = (id: string, label?: string, hideLabel?: boolean) => {
	return label
		? new TLabel(
				{
					for: id,
					visually: hideLabel ? "hidden" : undefined,
				},
				label
		  )
		: "";
};
export const colSetup = (
	validfeedback?: string,
	invalidfeedback?: string,
	description?: string,
	col1?: bootstrapType.col[number],
	col2?: bootstrapType.col[number],
	col3?: false | bootstrapType.col[number]
) => {
	//setup col if provided
	if (col1) {
		col2 ??= "auto";

		if ((description || validfeedback || invalidfeedback) && col3 !== false) {
			col3 ??= "auto";
		} else {
			col3 = false;
		}
	}

	if (col2) {
		col1 ??= "auto";

		if ((description || validfeedback || invalidfeedback) && col3 !== false) {
			col3 ??= "auto";
		} else {
			col3 = false;
		}
	}

	if (col3) {
		col1 ??= "auto";
		col2 ??= "auto";
	}

	return { col1, col2, col3 };
};
