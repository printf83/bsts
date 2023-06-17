import { IElem, tag, strHtml } from "../../core/tag.js";
import { Datalist, datalist as TDatalist } from "../../html/datalist.js";
import { div } from "../../html/div.js";
import { input } from "../input.js";
import { label as TLabel } from "../label.js";
import { text } from "../inputgroup/text.js";
import { bootstrapType } from "../../core/bootstrap.js";

export const genDatalist = (id: string, datalist?: Datalist["item"]) => {
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

export const genValidTooltip = (id: string, feedback?: string) => {
	return feedback ? new div({ id: `${id}-valid-tooltip`, class: "valid-tooltip" }, feedback) : "";
};

export const genInvalidTooltip = (id: string, feedback?: string) => {
	return feedback ? new div({ id: `${id}-invalid-tooltip`, class: "invalid-tooltip" }, feedback) : "";
};

export const genGroupItem = (id: string, item?: IElem) => {
	let result: (number | string | tag | strHtml)[] = [];

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
	if (label && !hideLabel) {
		return new TLabel(
			{
				for: id,
			},
			label
		);
	} else {
		return "";
	}
};
export const colSetup = (
	validfeedback?: string,
	invalidfeedback?: string,
	description?: string,
	col1?: bootstrapType.col,
	col2?: bootstrapType.col,
	col3?: false | bootstrapType.col
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
export const descriptionSetup = (
	id: string,
	describedby?: string,
	description?: string,
	validFeedback?: string,
	invalidFeedback?: string,
	validTooltip?: string,
	invalidTooltip?: string
) => {
	if (describedby) {
		switch (describedby) {
			case "[description]":
				if (description) {
					return `${id}-description`;
				}
				break;
			case "[valid]":
				if (validFeedback) {
					return `${id}-valid-feedback`;
				} else if (validTooltip) {
					return `${id}-valid-tooltip`;
				} else if (description) {
					return `${id}-description`;
				}
				break;
			case "[invalid]":
				if (invalidFeedback) {
					return `${id}-invalid-feedback`;
				} else if (invalidTooltip) {
					return `${id}-invalid-tooltip`;
				} else if (description) {
					return `${id}-description`;
				}
				break;
			default:
				return describedby;
		}
	} else {
		if (description) {
			return `${id}-description`;
		}
	}

	return undefined;
};

export const labelFloatingFeedbackManager = (e: Event) => {
	const target = e.target as HTMLInputElement;
	const validity = target.validity;
	const container = target.closest(".form-floating");
	if (container) {
		if (validity.valid) {
			target.classList.remove("is-invalid");
			target.classList.add("is-valid");
			container.classList.remove("is-invalid");
			container.classList.add("is-valid");
		} else {
			target.classList.remove("is-valid");
			target.classList.add("is-invalid");
			container.classList.remove("is-valid");
			container.classList.add("is-invalid");
		}
	}
};
