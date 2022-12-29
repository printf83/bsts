import { bs } from "../base/attachBootstrap";
import { genClassList } from "./genClassList";
import { setting } from "./setting";

const bsClass = (value:string|number|boolean, rules:bs.rule):string[] => {
	let i = [];

	if (rules.hasOwnProperty("formatValue")) {
		i = [...i, ...genClassList(rules.formatValue)];
	}

	if (value === true) {
		if (rules.hasOwnProperty("formatTrue")) {
			i = [...i, ...genClassList(rules.formatTrue)];
		}
	} else if (value === false) {
		if (rules.hasOwnProperty("formatFalse")) {
			i = [...i, ...genClassList(rules.formatFalse)];
		}
	} else {
		if (rules.hasOwnProperty("format")) {
			i = [...i, ...genClassList(rules.format.replace(/\$1/g, value.toString()))];
		}
	}

	return i && i.length > 0 ? i : null;
}

export const multiClass = (value:string|number|boolean, rules:bs.rule):string[] =>{
	if (value !== null && value !== undefined) {
		if (rules.hasOwnProperty("value")) {
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
}