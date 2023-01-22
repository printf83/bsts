import { genBootstrapClass } from "../core/attach/attachBootstrap.js";
import { bootstrapAttachRule, bootstrapBase, bootstrapRuleDB, bootstrapType } from "../core/base/bootstrap.js";
import { IElem, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { IAttrTagButton } from "../tag/button.js";

export interface IAttrBSButton extends IAttrTagButton {
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

const convert = (attr: IAttrBSButton): IAttrBSButton => {
	//add btn class
	//weight,role,toggle
	attr = mergeObject(attr, {
		class: ["btn", attr.weight ? `btn-${attr.weight}` : ""],
		role: attr.href ? "button" : undefined,
		data: {
			"bs-toggle": attr.toggle ? "button" : undefined,
		},
	});

	//color & outline
	if (!attr.color) {
		attr.color = "primary";
	}

	if (attr.outline === true) {
		attr.class = mergeClass(attr.class, genBootstrapClass("btnOutlineColor", rules.btnOutlineColor, attr.color));
	} else {
		attr.class = mergeClass(attr.class, genBootstrapClass("btnColor", rules.btnColor, attr.color));
	}

	delete attr.color;
	delete attr.outline;
	delete attr.weight;
	delete attr.toggle;

	// dont delete
	// delete a.href;
	// delete a.role;

	return attr;
};

export class button extends tag {
	constructor(); //#1
	constructor(elem: IElem); //#2
	constructor(attr: IAttrBSButton, elem: IElem); //#3
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super("button", convert({}), "Button");
		} else if (arg.length === 1) {
			//#2
			super("button", convert({}), arg[0]);
		} else if (arg.length === 2) {
			//#3
			super(arg[0].href ? "a" : "button", convert(arg[0]), arg[1]);
		}
	}
}
