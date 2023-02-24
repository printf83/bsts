import { IElem, isAttr } from "../../core/base/tag.js";
import { mergeClass } from "../../core/fn/mergeClass.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { IAttrTagUl, ul } from "../../ht/ul.js";
import {
	bootstrapAttachRule,
	bootstrapBase,
	bootstrapRuleDB,
	bootstrapType,
} from "../../core/base/bootstrap.js";
import { genBootstrapClass } from "../../core/attach/attachBootstrap.js";
import { div } from "../../ht/div.js";

export interface IAttrBSDropdownMenu extends IAttr {
	positionView?:
		| bootstrapType.positionView[number]
		| bootstrapType.positionView[number][];
	dark?: true;
}

const rules: bootstrapRuleDB = {
	dropdownMenuPositionView: new bootstrapAttachRule({
		format: "dropdown-menu-$1",
		value: bootstrapBase.positionView.concat(),
	}),
};

const convert = (attr: IAttrBSDropdownMenu): IAttrBSDropdownMenu => {
	attr.class = mergeClass(attr.class, [
		"dropdown-menu",
		attr.dark ? "dropdown-menu-dark" : "",
	]);

	if (attr.positionView) {
		attr.class = mergeClass(
			attr.class,
			genBootstrapClass(
				"dropdownMenuPositionView",
				rules.dropdownMenuPositionView,
				attr.positionView
			)
		);
	}

	delete attr.dark;
	delete attr.positionView;

	return attr;
};

export class menu extends div {
	constructor(); //#1
	constructor(attr: IAttrBSDropdownMenu); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSDropdownMenu, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSDropdownMenu>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(mergeObject({ elem: arg[1] }, arg[0])));
		}
	}
}
