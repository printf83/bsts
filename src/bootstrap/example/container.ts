import { IAttr, IElem, tag } from "../../core/base/tag.js";
import { bsConsNoElemArg } from "../../core/base/bootstrap.js";
import { div } from "../../html/div.js";
import { card } from "../card/_index.js";
import { list } from "../list/_index.js";
import { UUID } from "../../core/fn/uuid.js";
import { replaceChild } from "../../core/fn/builder.js";
import { code } from "./code.js";
import { item } from "../list/item.js";
import { small } from "../../html/small.js";

export interface IAttrBSExampleExt {
	name?: string;
	output?: Function;
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

const itemCode = (
	collapseable: boolean,
	title: string,
	elem: IElem,
	onshow?: (target: HTMLElement) => void
): item[] => {
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
			new small({ monospace: true, textTransform: "uppercase", textColor: "secondary" }, title)
		),
		new list.item(
			{
				bgColor: "body-tertiary",
				class: [collapseable ? "collapse" : undefined],
				id: collapseable ? id : undefined,
				data: { loaded: "false" },
				on: {
					"show.bs.collapse": onshow
						? (e) => {
								let target = e.target as HTMLElement;
								if (target.getAttribute("data-loaded") === "false") {
									target.setAttribute("data-loaded", "true");
									onshow(target);
									console.log("load");
								}
						  }
						: undefined,
				},
			},
			elem
		),
	];
};

const itemOutput = (str: string) => {
	return new list.item({ class: `example-output`, padding: 3, display: "flex", gap: 2 }, str);
};

const convert = (attr: IAttrBSExampleContainer) => {
	let id = UUID();

	attr.showExtention = attr.showExtention || true;
	attr.showOutput = attr.showOutput || true;
	attr.showScript = attr.showScript || true;
	attr.showHTML = attr.showHTML || true;
	attr.showCSS = attr.showCSS || true;

	let e: tag[] = [];

	if (attr.output && attr.showOutput) {
		e.push(itemOutput(attr.output()));
	}

	if (attr.output && attr.showOutput && attr.showHTML) {
		e.push(...itemCode(true, "HTML", "Loading...", getOutputHTML));
	}

	if (attr.css && attr.showCSS) {
		e.push(...itemCode(true, "CSS", new code({ type: "css" }, attr.css)));
	}

	if (attr.extention && attr.showExtention) {
		let f: IAttrBSExampleExt[] = [];
		if (Array.isArray(attr.extention)) {
			f = attr.extention;
		} else {
			f = [attr.extention];
		}

		f.forEach((i) => {
			if (i && i.name && i.output) {
				e.push(...itemCode(true, i.name, i.output.toString()));
			}
		});
	}

	if (attr.output && attr.showScript) {
		e.push(...itemCode(false, "Typescript", new code({ type: "ts" }, attr.output.toString())));
	}

	attr.elem = [new card.container({ id: id, class: "example" }, [new list.container({ flush: true }, e)])];

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
