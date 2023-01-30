import { genBootstrapClass } from "../../core/attach/attachBootstrap.js";
import { bootstrapAttachRule, bootstrapBase, bootstrapRuleDB, bootstrapType } from "../../core/base/bootstrap.js";
import { IAttr, IElem, isAttr } from "../../core/base/tag.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { div } from "../../tag/div.js";
import { btnclose } from "../btnclose.js";

export interface IAttrBSAlertContainer extends IAttr {
	color?: bootstrapType.color[number];
	role?: string;
	dismissible?: true;
}

const rules: bootstrapRuleDB = {
	alertColor: new bootstrapAttachRule("alert-$1", bootstrapBase.btnColor.concat()),
};

const convert = (attr: IAttrBSAlertContainer): IAttrBSAlertContainer => {
	//add default value
	if (!attr.role) attr.role = "alert";
	if (!attr.color) attr.color = "primary";

	//add alert class
	attr = mergeObject(
		{
			class: [
				"alert",
				attr.dismissible ? "alert-dismissible" : "",
				attr.dismissible ? "fade" : "",
				attr.dismissible ? "show" : "",
			],
			role: attr.role,
		},
		attr
	);

	attr.class = mergeClass(genBootstrapClass("alertColor", rules.alertColor, attr.color!), attr.class);

	if (attr.dismissible) {
		if (!attr.elem) attr.elem = [];
		if (!Array.isArray(attr.elem)) attr.elem = [attr.elem];

		attr.elem.push(new btnclose({ data: { "bs-dismiss": "alert" } }));
	}

	delete attr.color;
	delete attr.dismissible;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttrBSAlertContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSAlertContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}), "Alert");
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSAlertContainer>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({}), arg[0]);
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(mergeObject({ elem: arg[1] }, arg[0])));
		}
	}
}
