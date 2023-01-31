import { genBootstrapClass } from "../core/attach/attachBootstrap.js";
import { bootstrapAttachRule, bootstrapBase, bootstrapRuleDB, bootstrapType } from "../core/base/bootstrap.js";
import { IElem, isAttr, tag } from "../core/base/tag.js";
import { mergeClass } from "../core/fn/mergeClass.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { IAttrTagButton } from "../tag/button.js";

export interface IAttrBSButton extends IAttrTagButton {
	color?: bootstrapType.color[number] | "link";
	outline?: boolean;
	weight?: "lg" | "sm";
	toggle?: boolean;
	href?: string;
	role?: "button";
}

const rules: bootstrapRuleDB = {
	btnColor: new bootstrapAttachRule({
		format: "btn-$1",
		value: bootstrapBase.btnColor.concat(),
	}),
	btnOutlineColor: new bootstrapAttachRule({
		format: "btn-outline-$1",
		value: bootstrapBase.btnOutlineColor.concat(),
	}),
};

const convert = (attr: IAttrBSButton): IAttrBSButton => {
	//add btn class
	//weight,role,toggle
	attr = mergeObject(
		{
			class: ["btn", attr.weight ? `btn-${attr.weight}` : ""],
			role: attr.href ? "button" : undefined,
			data: {
				"bs-toggle": attr.toggle ? "button" : undefined,
			},
		},
		attr
	);

	//color & outline
	if (!attr.color) {
		attr.color = "primary";
	}

	if (attr.outline === true) {
		attr.class = mergeClass(genBootstrapClass("btnOutlineColor", rules.btnOutlineColor, attr.color), attr.class);
	} else {
		attr.class = mergeClass(genBootstrapClass("btnColor", rules.btnColor, attr.color), attr.class);
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
	constructor(attr: IAttrBSButton); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSButton, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super("button", convert({}), "Button");
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSButton>(arg[0])) {
				//#2
				super(arg[0].href ? "a" : "button", convert(arg[0]));
			} else {
				//#3
				super("button", convert({}), arg[0]);
			}
		} else if (arg.length === 2) {
			//#4
			super(arg[0].href ? "a" : "button", convert(arg[0]), arg[1]);
		}
	}
}
