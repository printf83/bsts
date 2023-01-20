import { genBootstrapClass } from "../core/attach/attachBootstrap.js";
import { bootstrapAttachRule, bootstrapBase, bootstrapRuleDB, bootstrapType } from "../core/base/bootstrap.js";
import { IAttr, IElem } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "../tag/div.js";

export interface IAttrBSAlert extends IAttr {
	color?: bootstrapType.color[number];
}

const rules: bootstrapRuleDB = {
	alertColor: new bootstrapAttachRule("alert-$1", bootstrapBase.btnColor.concat()),
};

const convert = (attr: IAttrBSAlert): IAttrBSAlert => {
	//add alert class
	attr = mergeObject(attr, {
		class: "alert",
	});

	//color
	if (attr.color) {
		attr.class = mergeClass(attr.class, genBootstrapClass("alertColor", rules.alertColor, attr.color));
	}

	delete attr.color;

	return attr;
};

export class alert extends div {
	constructor(); //#1
	constructor(elem: IElem); //#2
	constructor(attr: IAttrBSAlert, elem: IElem); //#3
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super({ class: "alert alert-primary" }, "Button");
		} else if (arg.length === 1) {
			//#2
			super({ class: "alert alert-primary" }, arg[0]);
		} else if (arg.length === 2) {
			//#3
			super(convert(arg[0]), arg[1]);
		}
	}
}
