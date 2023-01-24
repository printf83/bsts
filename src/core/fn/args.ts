import { isTag } from "../base/tag.js";

const isArgMatchRule = (rule: string | string[], argType: string[]): boolean => {
	if (argType) {
		let tRule: string[] = Array.isArray(rule) ? rule : [rule];

		//make sure rule setting is same with arg
		if (tRule.length === argType.length) {
			let result = Array.from({ length: tRule.length }, () => false);

			//check if each rule apply to arg
			for (let i = 0; i < tRule.length; i++) {
				if (tRule[i].indexOf("|") >= 0) {
					//multiple
					let c = tRule[i].split("|");

					for (let j = 0; j < c.length; j++) {
						if (c[j] === argType[i] || c[j] === "any") {
							result[i] = true;
							break;
						}
					}
				} else {
					//single
					if (rule[i] === argType[i] || rule[i] === "any") {
						result[i] = true;
					}
				}
			}

			//if all result is true
			//then return true
			if (result.indexOf(false) > -1) {
				return false;
			} else {
				return true;
			}
		}
	}

	return false;
};

const getRuleIndex = (rules: (string | string[])[], argType: string[]): number => {
	let index: number = -1;
	if (rules.length > 0) {
		for (var i = 0; i < rules.length; i++) {
			if (isArgMatchRule(rules[i], argType)) {
				index = i;
				break;
			}
		}
	}

	return index;
};

const checkArgType = (obj: any): string => {
	if (obj === undefined) {
		return "undefined";
	}

	if (obj === null) {
		return "null";
	}

	if (Array.isArray(obj)) {
		if (obj.length > 0) {
			return `${checkArgType(obj[0])}[]`;
		} else {
			return "any[]";
		}
	} else {
		let t = typeof obj;
		if (t === "object") {
			if (isTag(obj)) {
				if (obj.hasOwnProperty("debug") && obj.debug === true) {
					return "debug";
				} else {
					return "tag";
				}
			} else {
				return t;
			}
		} else {
			return t;
		}
	}
};

const getArgType = (obj: any[]): string[] => {
	if (obj && obj.length > 0) {
		let result: string[] = [];
		obj.forEach((i: any) => {
			result.push(checkArgType(i));
		});
		return result;
	} else {
		return ["null"];
	}
};

export const args = (caller: string, obj: any[], rules: (string | string[])[]): number | never => {
	let argType = getArgType(obj);
	let index: number = -1;

	if (argType) {
		index = getRuleIndex(rules, argType);
		if (index === -1) {
			throw Error(`"${caller}" argument "${argType.join(", ")}" is not supported by any rules`);
		}
	}

	return index;
};
