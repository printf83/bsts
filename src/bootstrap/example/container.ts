import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConsNoElemArg } from "../../core/base/bootstrap.js";
import { div } from "../../html/div.js";
import { card } from "../card/_index.js";
import { list } from "../list/_index.js";
import { UUID } from "../../core/fn/uuid.js";
// import { htmlContainer } from "./htmlContainer.js";
// import { scriptContainer } from "./scriptContainer.js";
import { replaceChild } from "../../core/fn/builder.js";
import { code } from "./code.js";

export interface IAttrBSExampleContainer extends IAttr {
	lib?: string | string[];
	output?: Function;
}

const itemHeader = (targetId: string, title: string) => {
	return new list.item(
		{
			bgColor: "light-subtle",
			data: {
				"bs-toggle": targetId ? "collapse" : undefined,
				"bs-target": targetId ? `#${targetId}` : undefined,
			},
			aria: {
				expended: targetId ? "false" : undefined,
				controls: targetId ? `${targetId}` : undefined,
			},
		},
		title
	);
};

declare var PR: {
	prettyPrint: () => void;
};

const getOutputHTML = (target: HTMLElement): void => {
	let html = target.closest(".example")?.getElementsByClassName("example-output")[0].innerHTML;
	replaceChild(target, new code({ type: "html" }, html ? html : ""));
	PR.prettyPrint();
};

const itemContent = (id: string, elem: IElem, onshow?: (target: HTMLElement) => void) => {
	return new list.item(
		{
			bgColor: "light-subtle",
			class: [id ? "collapse" : undefined],
			id: id ? `${id}` : undefined,
			on: {
				"show.bs.collapse":
					id && onshow
						? (e) => {
								let target = e.target as HTMLElement;
								onshow(target);
						  }
						: undefined,
			},
		},
		elem
	);
};

const outputContent = (str: string) => {
	return new list.item({ class: `example-output`, padding: 3, display: "flex", gap: 2 }, str);
};

const convert = (attr: IAttrBSExampleContainer) => {
	let ts = attr.output ? attr.output.toString() : "";
	let id = UUID();

	let elem: IElem = [
		new card.container({ id: id, class: "example" }, [
			new list.container({ flush: true }, [
				attr.output ? outputContent(attr.output()) : "",
				attr.output ? itemHeader(`${id}_html`, "HTML") : "",
				attr.output ? itemContent(`${id}_html`, "Loading...", getOutputHTML) : "",
				attr.output ? itemHeader("", "Typescript") : "",
				attr.output ? itemContent("", new code({ type: "ts" }, ts)) : "",
			]),
		]),
	];

	attr.elem = elem;

	delete attr.lib;
	delete attr.output;

	return attr;
};

export class container extends div {
	constructor();
	constructor(attr: IAttrBSExampleContainer);
	constructor(...arg: any[]) {
		super(bsConsNoElemArg<IAttrBSExampleContainer>(convert, arg));
	}
}
