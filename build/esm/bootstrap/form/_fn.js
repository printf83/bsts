import { datalist as TDatalist } from "../../html/datalist.js";
import { div } from "../../html/div.js";
import { input } from "../input.js";
import { label as TLabel } from "../label.js";
import { text } from "../inputgroup/text.js";
export const genDatalist = (id, datalist) => {
    return datalist ? new TDatalist({ id: `${id}-datalist`, item: datalist }) : "";
};
export const genDescription = (id, description) => {
    return description ? new div({ id: `${id}-description`, class: "form-text" }, description) : "";
};
export const genValidFeedback = (id, feedback) => {
    return feedback ? new div({ id: `${id}-valid-feedback`, class: "valid-feedback" }, feedback) : "";
};
export const genInvalidFeedback = (id, feedback) => {
    return feedback ? new div({ id: `${id}-invalid-feedback`, class: "invalid-feedback" }, feedback) : "";
};
export const genValidTooltip = (id, feedback) => {
    return feedback ? new div({ id: `${id}-valid-tooltip`, class: "valid-tooltip" }, feedback) : "";
};
export const genInvalidTooltip = (id, feedback) => {
    return feedback ? new div({ id: `${id}-invalid-tooltip`, class: "invalid-tooltip" }, feedback) : "";
};
export const genGroupItem = (id, item) => {
    let result = [];
    if (item) {
        if (!Array.isArray(item)) {
            item = [item];
        }
        item.forEach((i, ix) => {
            if (typeof i === "string") {
                switch (i) {
                    case "[checkbox]":
                        result.push(new text(new input({
                            marginTop: 0,
                            type: "checkbox",
                            id: `${id}-checkbox-${ix}`,
                        })));
                        break;
                    case "[radio]":
                        result.push(new text(new input({
                            marginTop: 0,
                            type: "radio",
                            id: `${id}-radio-${ix}`,
                        })));
                        break;
                    default:
                        result.push(new text(i));
                }
            }
            else {
                result.push(i);
            }
        });
    }
    return result;
};
export const genLabel = (id, label, hideLabel) => {
    if (label && !hideLabel) {
        return new TLabel({
            for: id,
        }, label);
    }
    else {
        return "";
    }
};
export const colSetup = (validfeedback, invalidfeedback, description, col1, col2, col3) => {
    //setup col if provided
    if (col1) {
        col2 ??= "auto";
        if ((description || validfeedback || invalidfeedback) && col3 !== false) {
            col3 ??= "auto";
        }
        else {
            col3 = false;
        }
    }
    if (col2) {
        col1 ??= "auto";
        if ((description || validfeedback || invalidfeedback) && col3 !== false) {
            col3 ??= "auto";
        }
        else {
            col3 = false;
        }
    }
    if (col3) {
        col1 ??= "auto";
        col2 ??= "auto";
    }
    return { col1, col2, col3 };
};
export const descriptionSetup = (id, describedby, description, validFeedback, invalidFeedback, validTooltip, invalidTooltip) => {
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
                }
                else if (validTooltip) {
                    return `${id}-valid-tooltip`;
                }
                else if (description) {
                    return `${id}-description`;
                }
                break;
            case "[invalid]":
                if (invalidFeedback) {
                    return `${id}-invalid-feedback`;
                }
                else if (invalidTooltip) {
                    return `${id}-invalid-tooltip`;
                }
                else if (description) {
                    return `${id}-description`;
                }
                break;
            default:
                return describedby;
        }
    }
    else {
        if (description) {
            return `${id}-description`;
        }
    }
    return undefined;
};
export const labelFloatingFeedbackManager = (e) => {
    const target = e.target;
    const validity = target.validity;
    const container = target.closest(".form-floating");
    if (container) {
        if (validity.valid) {
            target.classList.remove("is-invalid");
            target.classList.add("is-valid");
            container.classList.remove("is-invalid");
            container.classList.add("is-valid");
        }
        else {
            target.classList.remove("is-valid");
            target.classList.add("is-invalid");
            container.classList.remove("is-valid");
            container.classList.add("is-invalid");
        }
    }
};
