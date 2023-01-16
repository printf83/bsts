import { genBootstrapClass } from "../core/attach/attachBootstrap.js";
import { bootstrapAttachRule, bootstrapBase, bootstrapRuleDB, bootstrapType } from "../core/base/bootstrap.js";
import { IAttr, IElem, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "../tag/div.js";

export interface IAttrBSAlert extends IAttr {
	color?: bootstrapType.color[number];
}

const rules: bootstrapRuleDB = {
	alertColor: new bootstrapAttachRule("alert-$1", bootstrapBase.btnColor.concat()),
};

const convert = (a: IAttrBSAlert): IAttrBSAlert => {
	//add alert class
	a = mergeObject(a, {
		class: "alert",
	});

	//color
	if (a.color) {
		a.class = mergeClass(a.class, genBootstrapClass("alertColor", rules.alertColor, a.color));
	}

	delete a.color;

	return a;
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
