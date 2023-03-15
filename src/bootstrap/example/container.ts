import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConsNoElemArg } from "../../core/base/bootstrap.js";
import { div } from "../../html/div.js";
import { code } from "../../html/code.js";
import { card } from "../card/_index.js";
import { list } from "../list/_index.js";

export interface IAttrBSExampleContainer extends IAttr {
	lib?: string | string[];
	output?: Function;
}

const convert = (attr: IAttrBSExampleContainer) => {
	let ts = attr.output ? attr.output.toString() : "";
	// let elem: IElem = [new div(attr.output ? attr.output() : ""), new div([new code(ts ? ts : "")])];
	let elem: IElem = [
		new card.container([
			new list.container({ flush: true }, [
				new list.item({ padding: 3, display: "flex", gap: 2 }, attr.output ? attr.output() : ""),
				new list.item({ bgColor: "light-subtle" }, "TS"),
				new list.item(
					{ bgColor: "light-subtle" },
					new code({ style: { maxHeight: "200px" }, overflow: "auto" }, ts)
				),
			]),
		]),
	];

	attr.elem = elem;

	delete attr.lib;

	return attr;
};

export class container extends div {
	constructor();
	constructor(attr: IAttrBSExampleContainer);
	constructor(...arg: any[]) {
		super(bsConsNoElemArg<IAttrBSExampleContainer>(convert, arg));
	}
}
