import { IElem, tag } from "../../core/tag.js";
import { IAttrTagDatalist, datalist as TDatalist } from "../../html/datalist.js";
import { div } from "../../html/div.js";
import { input } from "../input.js";
import { text } from "../inputgroup/text.js";

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

export const genGroupItem = (id: string, item: IElem) => {
	let result: (string | tag)[] = [];

	if (item) {
		if (!Array.isArray(item)) {
			item = [item];
		}

		item.forEach((i, ix) => {
			if (typeof i === "string") {
				switch (i) {
					case "{{checkbox}}":
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
					case "{{radio}}":
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
					case "{{switch}}":
						result.push(
							new text(
								new input({
									marginTop: 0,
									type: "checkbox",
									switch: true,
									id: `${id}-switch-${ix}`,
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
// let tDescription = attr.description
// 	? new div({ id: `${attr.id}-description`, class: "form-text" }, attr.description)
// 	: "";
// let tValidFeedback = attr.validFeedback
// 	? new div({ id: `${attr.id}-valid-feedback`, class: "valid-feedback" }, attr.validFeedback)
// 	: "";
// let tInvalidFeedback = attr.invalidFeedback
// 	? new div({ id: `${attr.id}-invalid-feedback`, class: "invalid-feedback" }, attr.invalidFeedback)
// 	: "";
