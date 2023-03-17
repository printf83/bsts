import { IAttr, tag } from "../../core/base/tag.js";
import { bsConsNoElemArg } from "../../core/base/bootstrap.js";
import { div } from "../../html/div.js";
import { card } from "../card/_index.js";
import { list } from "../list/_index.js";
import { UUID } from "../../core/fn/uuid.js";
import { replaceChild } from "../../core/fn/builder.js";
import { preview } from "./preview.js";
import { item } from "../list/item.js";
import { small } from "../../html/small.js";
import { a } from "../../html/a.js";
import { icon } from "../icon.js";
import { tooltip } from "../tooltip.js";

export interface IAttrBSExampleExt {
	name?: string;
	output?: Function;
}

export interface IAttrBSExampleContainer extends IAttr {
	lib?: string | string[];
	css?: string;
	extention?: IAttrBSExampleExt | IAttrBSExampleExt[];
	output?: Function;
	manager?: Function;

	showOutput?: boolean;
	showScript?: boolean;
	showManager?: boolean;
	showHTML?: boolean;
}

declare var PR: {
	prettyPrint: () => void;
};

const getOutputHTML = (target: HTMLElement): void => {
	let html = target.closest(".example")?.getElementsByClassName("example-output")[0].innerHTML;
	replaceChild(target, new preview({ type: "html" }, html ? html : ""));
	PR.prettyPrint();
};

function itemCodeCopy(e: Event) {
	e.stopPropagation();
	e.preventDefault();

	return false;
}

const itemCode = (
	header: boolean,
	collapseable: boolean,
	title: string,
	elem: string | tag | (string | tag)[],
	onshow?: (target: HTMLElement) => void
): item[] => {
	let id = UUID();

	let res: item[] = [];

	if (header) {
		res.push(
			new list.item(
				{
					display: "flex",
					verticalAlign: "middle",
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
				[
					new small(
						{
							marginEnd: "auto",
							display: "inline-block",
							monospace: true,
							textTransform: "uppercase",
							textColor: "secondary",
						},
						title
					),

					!collapseable
						? new tooltip(
								{ content: "Copy to clipboard" },
								new small(new a({ href: "#", on: { click: itemCodeCopy } }, icon.reg("clipboard")))
						  )
						: "",
				]
			)
		);
	} else {
		if (!collapseable) {
			if (!Array.isArray(elem)) {
				elem = [elem];
			}

			elem.unshift(
				new small(
					{ position: "relative", float: "end" },
					new tooltip(
						{ content: "Copy to clipboard" },
						new a({ href: "#", on: { click: itemCodeCopy } }, icon.reg("clipboard"))
					)
				)
			);
		}
	}

	res.push(
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
		)
	);

	return res;
};

const itemOutput = (manager: boolean, str: string) => {
	if (manager) {
		return new list.item({ class: `example-output`, padding: 0, overflow: "hidden" }, str);
	} else {
		return new list.item({ class: `example-output`, padding: 4, overflow: "hidden", display: "flex", gap: 2 }, str);
	}
};

const convert = (attr: IAttrBSExampleContainer) => {
	let id = UUID();

	attr.showOutput = attr.showOutput === undefined ? true : attr.showOutput;
	attr.showScript = attr.showScript === undefined ? true : attr.showScript;
	attr.showHTML = attr.showHTML === undefined ? true : attr.showHTML;
	attr.showManager = attr.showManager === undefined ? true : attr.showManager;

	let e: tag[] = [];

	if (attr.output && attr.showOutput) {
		if (attr.manager) {
			e.push(itemOutput(true, attr.manager(attr.output())));
		} else {
			e.push(itemOutput(false, attr.output()));
		}
	}

	if (attr.output && attr.showOutput && attr.showHTML) {
		e.push(...itemCode(e.length > 0, true, "HTML", "Loading...", getOutputHTML));
	}

	if (attr.css) {
		e.push(...itemCode(e.length > 0, true, "CSS", new preview({ type: "css" }, attr.css)));
	}

	if (attr.extention) {
		let f: IAttrBSExampleExt[] = [];
		if (Array.isArray(attr.extention)) {
			f = attr.extention;
		} else {
			f = [attr.extention];
		}

		f.forEach((i) => {
			if (i && i.name && i.output) {
				e.push(...itemCode(e.length > 0, true, i.name, i.output.toString()));
			}
		});
	}

	if (attr.output && attr.showScript && attr.manager && attr.showManager) {
		e.push(...itemCode(e.length > 0, true, "Manager", new preview({ type: "js" }, attr.manager.toString())));
	}

	if (attr.output && attr.showScript) {
		e.push(...itemCode(e.length > 0, false, "JS", new preview({ type: "js" }, attr.output.toString())));
	}

	attr.elem = [new card.container({ id: id, class: "example" }, [new list.container({ flush: true }, e)])];

	delete attr.lib;
	delete attr.css;
	delete attr.extention;
	delete attr.output;

	delete attr.showHTML;
	delete attr.showScript;
	delete attr.showOutput;

	return attr;
};

export class code extends div {
	constructor();
	constructor(attr: IAttrBSExampleContainer);
	constructor(...arg: any[]) {
		super(bsConsNoElemArg<IAttrBSExampleContainer>(convert, arg));
	}
}
