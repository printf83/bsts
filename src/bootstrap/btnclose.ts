import { bsConsNoElemArg } from "../core/bootstrap.js";
import { mergeClass } from "../core/mergeClass.js";
import { button, IAttrTagButton } from "../html/button.js";

interface IAttrBSBtnclose extends IAttrTagButton {
	white?: boolean;
}

const convert = (attr: IAttrBSBtnclose) => {
	//default value
	attr.label = attr.label || "Close";
	attr.type = attr.type || "button";

	//add btn-close class
	//white
	attr.class = mergeClass(attr.class, ["btn-close", attr.white ? "btn-close-white" : undefined]);

	delete attr.white;

	return attr;
};

class btnclose extends button {
	constructor(); //#1
	constructor(attr: IAttrBSBtnclose); //#2
	constructor(...arg: any[]) {
		super(bsConsNoElemArg(convert, arg));
	}
}

export { btnclose, IAttrBSBtnclose };
