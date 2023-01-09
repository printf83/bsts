import { bsRule } from "./../base/attachBootstrap";
import { genClassList } from "./genClassList.js";
import { setting } from "./setting.js";

const bsClass = (value: string | number | boolean, rules: bsRule): string[] => {
	let i = [];

	if (rules.formatValue) {
		i = [...i, ...genClassList(rules.formatValue)];
	}

	if (value === true) {
		if (rules.formatTrue) {
			i = [...i, ...genClassList(rules.formatTrue)];
		}
	} else if (value === false) {
		if (rules.formatFalse) {
			i = [...i, ...genClassList(rules.formatFalse)];
		}
	} else {
		if (rules.format) {
			i = [...i, ...genClassList(rules.format.replace(/\$1/g, value.toString()))];
		}
	}

	return i && i.length > 0 ? i : null;
};

export const multiClass = (value: string | number | boolean, rules: bsRule): string[] => {
	if (value !== null && value !== undefined) {
		if (rules.value) {
			if (rules.value.indexOf(value) > -1) {
				return bsClass(value, rules);
			} else {
				if (setting.DEBUG)
					console.warn(`"${value}" is not supported value for this rule`, { value: value, rules: rules });
			}
		} else {
			return bsClass(value, rules);
		}
	}

	return null;
};
