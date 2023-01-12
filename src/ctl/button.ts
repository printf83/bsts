import { genBootstrapClass } from "../core/attach/attachBootstrap.js";
import { bootstrapAttachRule, bootstrapBase, bootstrapRuleDB, bootstrapType } from "../core/base/bootstrap.js";
import { IElem, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { IAttrTagButton } from "../tag/button.js";

export interface IAttrButton extends IAttrTagButton {
	color?: bootstrapType.color[number];
	outline?: boolean;
	weight?: "lg" | "sm";
	toggle?: boolean;
	href?: string;
	role?: "button";
}

const rules: bootstrapRuleDB = {
	btnColor: new bootstrapAttachRule("btn-$1", bootstrapBase.btnColor.concat()),
	btnOutlineColor: new bootstrapAttachRule("btn-outline-$1", bootstrapBase.btnOutlineColor.concat()),
};

const convert = (a: IAttrButton): IAttrButton => {
	//add btn class
	//weight,role,toggle
	a = mergeObject(a, {
		class: [`btn`, a.weight ? `btn-${a.weight}` : ``],
		role: a.href ? "button" : undefined,
		data: {
			"bs-toggle": a.toggle ? "button" : undefined,
		},
	});

	//color & outline
	if (a.color) {
		if (a.outline === true) {
			a.class = mergeClass(a.class, genBootstrapClass("btnOutlineColor", rules.btnOutlineColor, a.color));
		} else {
			a.class = mergeClass(a.class, genBootstrapClass("btnColor", rules.btnColor, a.color));
		}
	}

	delete a.color;
	delete a.outline;
	delete a.weight;
	delete a.toggle;

	// dont delete
	// delete a.href;
	// delete a.role;

	return a;
};

export class button extends tag {
	constructor(); //#1
	constructor(elem: IElem); //#2
	constructor(attr: IAttrButton, elem: IElem); //#3
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super("button", { class: "btn btn-primary" }, "Button");
		} else if (arg.length === 1) {
			//#2
			super("button", { class: "btn btn-primary" }, arg[0]);
		} else if (arg.length === 2) {
			//#3
			super(arg[0].href ? "a" : "button", convert(arg[0]), arg[1]);
		}
	}
}
