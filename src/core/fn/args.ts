import { setting } from "./setting.js";

export type IArgRule = null | undefined | string | (null | undefined | string)[];

const isArgMatchRule = (rule: string[], argType: string[]): boolean => {
	if (argType === null) {
		if (rule === null) {
			return true;
		}
	} else {
		if (rule) {
			//make sure rule setting is same with arg
			if (rule.length === argType.length) {
				let result = Array.from({ length: rule.length }, () => false);

				//check if each rule apply to arg
				for (let i = 0; i < rule.length; i++) {
					if (rule[i].indexOf("|") >= 0) {
						//multiple
						let c = rule[i].split("|");

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
	}

	return false;
};

const getRuleIndex = (rule: string | string[], argType: string[]): number => {
	let res: number = -1;
	let d: string[] = [];
	if (Array.isArray(rule)) {
		d = rule;
	} else {
		d = [rule];
	}

	if (rule.length > 0) {
		for (var i = 0; i < rule.length; i++) {
			if (isArgMatchRule(d, argType)) {
				res = i;
				break;
			}
		}
	}

	return res;
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
			if (obj.hasOwnProperty("isbsts")) {
				return "tag";
			} else if (obj.debug === true) {
				return "debug";
			} else {
				return t;
			}
		} else {
			return t;
		}
	}
};

const getArgType = (obj: any): string[] | null => {
	if (obj && obj.length > 0) {
		let result: string[] = [];
		obj.forEach((i: any) => {
			result.push(checkArgType(i));
		});
		return result;
	} else {
		return null;
	}
};

export const args = (
	caller: string,
	obj: any[],
	rules: null | undefined | string | (null | undefined | string)[]
): number => {
	let argType = getArgType(obj);
	let index: number = -1;

	if (argType) {
		index = getRuleIndex(rules, argType);
		if (index === -1) {
			if (setting.DEBUG === true) {
				console.error(`"${caller}" argument "${argType.join(", ")}" is not supported by any rules`);
			}
		}
	}

	return index;
};
