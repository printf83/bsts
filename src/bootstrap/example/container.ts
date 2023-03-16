import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConsNoElemArg } from "../../core/base/bootstrap.js";
import { div } from "../../html/div.js";
import { card } from "../card/_index.js";
import { list } from "../list/_index.js";
import { UUID } from "../../core/fn/uuid.js";
import { replaceChild } from "../../core/fn/builder.js";
import { code } from "./code.js";
import { label } from "../label.js";
import { item as listItem } from "../list/item.js";
import { IAttrBSIcon, icon } from "../icon.js";

export interface IAttrBSExampleExt {
	name: string;
	output: Function;
}

export interface IAttrBSExampleContainer extends IAttr {
	lib?: string | string[];
	css?: string;
	extention?: IAttrBSExampleExt | IAttrBSExampleExt[];
	output?: Function;

	showExtention?: boolean;
	showOutput?: boolean;
	showScript?: boolean;
	showHTML?: boolean;
	showCSS?: boolean;
}

declare var PR: {
	prettyPrint: () => void;
};

const getOutputHTML = (target: HTMLElement): void => {
	let html = target.closest(".example")?.getElementsByClassName("example-output")[0].innerHTML;
	replaceChild(target, new code({ type: "html" }, html ? html : ""));
	PR.prettyPrint();
};

const item = (
	collapseable: boolean,
	ico: string | IAttrBSIcon | icon,
	title: string,
	elem: IElem,
	onshow?: (target: HTMLElement) => void
): listItem[] => {
	let id = UUID();

	return [
		new list.item(
			{
				bgColor: "body-tertiary",
				data: {
					"bs-toggle": collapseable ? "collapse" : undefined,
					"bs-target": collapseable ? `#${id}` : undefined,
				},
				aria: {
					expended: collapseable ? "false" : undefined,
					controls: collapseable ? id : undefined,
				},
			},
			new label({ icon: ico }, title)
		),
		new list.item(
			{
				bgColor: "body-tertiary",
				class: [collapseable ? "collapse" : undefined],
				id: collapseable ? id : undefined,
				on: {
					"show.bs.collapse": onshow
						? (e) => {
								let target = e.target as HTMLElement;
								onshow(target);
						  }
						: undefined,
				},
			},
			elem
		),
	];
};

const getExt = (ext: IAttrBSExampleExt | IAttrBSExampleExt[]): listItem[] => {
	let e: IAttrBSExampleExt[] = [];
	if (Array.isArray(ext)) {
		e = ext;
	} else {
		e = [ext];
	}

	let res: listItem[] = [];
	e.forEach((i) => {
		res.push(...item(true, "link", i!.name, i!.output.toString()));
	});

	return res;
};

const outputContent = (str: string) => {
	return new list.item({ class: `example-output`, padding: 3, display: "flex", gap: 2 }, str);
};

const convert = (attr: IAttrBSExampleContainer) => {
	let id = UUID();

	attr.showExtention = attr.showExtention || true;
	attr.showOutput = attr.showOutput || true;
	attr.showScript = attr.showScript || true;
	attr.showHTML = attr.showHTML || true;
	attr.showCSS = attr.showCSS || true;

	let elem: IElem = [
		new card.container({ id: id, class: "example" }, [
			new list.container({ flush: true }, [
				attr.output && attr.showOutput ? outputContent(attr.output()) : "",
				...(attr.output && attr.showOutput && attr.showHTML
					? item(true, "code", "HTML", "Loading...", getOutputHTML)
					: []),

				...(attr.css && attr.showCSS
					? item(true, { type: "fab", icon: "square-js" }, "CSS", new code({ type: "css" }, attr.css))
					: []),

				...(attr.extention && attr.showExtention ? getExt(attr.extention) : []),

				...(attr.output && attr.showScript
					? item(
							false,
							{ type: "fab", icon: "square-js" },
							"Typescript",
							new code({ type: "ts" }, attr.output.toString())
					  )
					: []),
			]),
		]),
	];

	attr.elem = elem;

	delete attr.lib;
	delete attr.css;
	delete attr.extention;
	delete attr.output;
	delete attr.showHTML;
	delete attr.showScript;
	delete attr.showOutput;
	delete attr.showCSS;
	delete attr.showExtention;

	return attr;
};

export class container extends div {
	constructor();
	constructor(attr: IAttrBSExampleContainer);
	constructor(...arg: any[]) {
		super(bsConsNoElemArg<IAttrBSExampleContainer>(convert, arg));
	}
}
