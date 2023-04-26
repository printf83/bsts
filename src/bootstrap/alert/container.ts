import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bootstrapType, bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { div } from "../../html/div.js";
import { btnclose } from "../btnclose.js";

export interface IBsAlertContainer extends IAttr {
	callout?: boolean;
	animation?: boolean;
	color?: bootstrapType.alertColor;
	dismissible?: bootstrapType.alertDismissible;
}

const convert = (attr: IBsAlertContainer) => {
	//add default value
	attr.role ??= "alert";
	attr.color ??= "primary";
	attr.animation ??= true;

	//add alert class
	attr = mergeObject(
		{
			class: [
				"alert",
				attr.color ? `alert-${attr.color}` : undefined,
				attr.dismissible ? "alert-dismissible" : undefined,
				attr.dismissible ? (attr.animation ? "fade" : undefined) : undefined,
				attr.dismissible ? "show" : undefined,
			],
			role: attr.role,
			border: attr.callout ? [false, "start"] : attr.border,
			borderWidth: attr.callout ? 4 : attr.borderWidth,
			borderColor: attr.callout ? attr.color : attr.borderColor,
			rounded: attr.callout ? false : attr.rounded,
		},
		attr
	);

	if (attr.dismissible) {
		attr.elem ??= [];
		if (!Array.isArray(attr.elem)) attr.elem = [attr.elem];

		attr.elem.push(new btnclose({ data: { "bs-dismiss": "alert" } }));
	}

	delete attr.animation;
	delete attr.callout;
	delete attr.color;
	delete attr.dismissible;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IBsAlertContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsAlertContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<IBsAlertContainer>("elem", arg)));
	}
}

export const Container = (AttrOrElem?: IBsAlertContainer | IElem, Elem?: IElem) =>
	genTagClass<container, IBsAlertContainer>(container, AttrOrElem, Elem);
