import { setting } from "./setting.js";

export interface IMultipleConstructor {
	rule: string[];
	fn: Function;
}

const compareRulesAndArg = (ruleSetting: string[], argType: string[]): boolean => {
	if (argType === null) {
		if (ruleSetting === null) {
			return true;
		}
	} else {
		if (ruleSetting) {
			//make sure rule setting is same with arg
			if (ruleSetting.length === argType.length) {
				let result = Array.from({ length: ruleSetting.length }, () => false);

				//check if each rule apply to arg
				for (let i = 0; i < ruleSetting.length; i++) {
					if (ruleSetting[i].indexOf("|") >= 0) {
						//multiple
						let c = ruleSetting[i].split("|");

						for (let j = 0; j < c.length; j++) {
							if (c[j] === argType[i] || c[j] === "any") {
								result[i] = true;
								break;
							}
						}
					} else {
						//single
						if (ruleSetting[i] === argType[i] || ruleSetting[i] === "any") {
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

const getFunction = (ruleSetting: IMultipleConstructor[], argType: string[]): Function | null => {
	if (ruleSetting.length > 0) {
		for (var i = 0; i < ruleSetting.length; i++) {
			if (compareRulesAndArg(ruleSetting[i].rule, argType)) {
				return ruleSetting[i].fn;
			}
		}
	}

	return null;
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
			// if (obj.hasOwnProperty("isbsts")) {
			if ("isbsts" in obj) {
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

export const multipleConstructorClass = (rules: IMultipleConstructor[], caller: string, obj: any[]) => {
	let argType = getArgType(obj);

	if (argType) {
		let fn = getFunction(rules, argType);
		if (fn) {
			return fn(obj);
		} else {
			if ((setting.DEBUG = true)) {
				console.error(`"${caller}" argument "${argType.join(", ")}" is not supported by any rules`, {
					type: argType,
					rule: rules
						? rules.map((i) => {
								return i?.rule?.join(", ");
						  })
						: null,
					// obj: obj,
				});
			}
		}
	}

	return null;
};
