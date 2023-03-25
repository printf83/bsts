import { IAttr, tag } from "../../../src/core/base/tag.js";
import { bsConsNoElemArg } from "../../../src/core/base/bootstrap.js";
import { div } from "../../../src/html/div.js";
import { card } from "../../../src/bootstrap/card/_index.js";
import { list } from "../../../src/bootstrap/list/_index.js";
import { UUID } from "../../../src/core/fn/uuid.js";
import { replaceChild } from "../../../src/core/fn/builder.js";
import { preview } from "./preview.js";
import { item } from "../../../src/bootstrap/list/item.js";
import { small } from "../../../src/html/small.js";
import { a } from "../../../src/html/a.js";
import { icon } from "../../../src/bootstrap/icon.js";
import { tooltip } from "../../../src/bootstrap/tooltip.js";
import { span } from "../../../src/html/span.js";
import { mergeAttr } from "../../../src/core/fn/mergeAttr.js";

export type IAttrPreviewTemplate = "none" | "row" | "col" | "grid" | "test";

export interface IAttrBSExampleExt {
	name?: string;
	output?: Function;
	strOutput?: string;
}

export interface IAttrBSExampleContainer extends IAttr {
	lib?: string | string[];
	css?: string;
	extention?: IAttrBSExampleExt | IAttrBSExampleExt[];
	output?: Function;
	manager?: Function;
	strOutput?: string;
	strManager?: string;

	showOutput?: boolean;
	showScript?: boolean;
	showManager?: boolean;
	showHTML?: boolean;

	previewTemplate?: IAttrPreviewTemplate;
	previewAttr?: IAttr;
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
					justifyContent: "between",
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
					new span(
						new small(
							{
								monospace: true,
								textTransform: "uppercase",
								textColor: "body-secondary",
							},
							title
						)
					),

					!collapseable
						? new tooltip(
								{ content: "Copy to clipboard" },
								new a(
									{ href: "#", color: "secondary", on: { click: itemCodeCopy } },
									icon.reg("clipboard")
								)
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
				new span(
					{ position: "absolute", end: 0, marginEnd: 3 },
					new tooltip(
						{ content: "Copy to clipboard" },
						new a({ href: "#", color: "secondary", on: { click: itemCodeCopy } }, icon.reg("clipboard"))
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
				data: { loaded: onshow ? "false" : undefined },
				on: {
					"show.bs.collapse": onshow
						? (e) => {
								let target = e.target as HTMLElement;
								if (target.getAttribute("data-loaded") === "false") {
									target.setAttribute("data-loaded", "true");
									onshow(target);
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

const itemOutput = (
	manager: boolean,
	previewTemplate: IAttrPreviewTemplate | undefined,
	previewAttr: IAttr | undefined,
	str: string
) => {
	if (manager) {
		return new list.item(mergeAttr({ class: `example-output`, padding: 4, overflow: "auto" }, previewAttr), str);
	} else {
		switch (previewTemplate) {
			case "none":
				return new list.item(mergeAttr({ class: `example-output` }, previewAttr), str);
			case "col":
				return new list.item(
					mergeAttr(
						{ class: `example-output`, padding: 4, overflow: "auto", display: "flex", gap: 2 },
						previewAttr
					),
					str
				);

			case "grid":
				return new list.item(
					mergeAttr(
						{ class: `example-output`, padding: 4, overflow: "auto", display: "grid", gap: 2 },
						previewAttr
					),
					str
				);
			default:
				return new list.item(
					mergeAttr({ class: `example-output`, padding: 4, overflow: "auto", gap: 2 }, previewAttr),
					str
				);
		}
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
			e.push(itemOutput(true, attr.previewTemplate, attr.previewAttr, attr.manager(attr.output())));
		} else {
			e.push(itemOutput(false, attr.previewTemplate, attr.previewAttr, attr.output()));
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
			if (i && i.name && (i.output || i.strOutput)) {
				e.push(...itemCode(e.length > 0, true, i.name, i.strOutput ? i.strOutput : i.output!.toString()));
			}
		});
	}

	if ((attr.output || attr.strOutput) && attr.showScript && (attr.manager || attr.strManager) && attr.showManager) {
		e.push(
			...itemCode(
				e.length > 0,
				true,
				"Manager",
				new preview(
					{ type: attr.strManager ? "ts" : "js" },
					attr.strManager ? attr.strManager : attr.manager!.toString()
				)
			)
		);
	}

	if ((attr.output || attr.strOutput) && attr.showScript) {
		e.push(
			...itemCode(
				e.length > 0,
				false,
				"Source",
				new preview(
					{ type: attr.strOutput ? "ts" : "js" },
					attr.strOutput ? attr.strOutput : attr.output!.toString()
				)
			)
		);
	}

	attr.elem = [
		new card.container(
			{ id: id, class: "example", marginY: 3 },
			new card.body({ padding: 0 }, [new list.container({ flush: true, rounded: 2 }, e)])
		),
	];

	delete attr.lib;
	delete attr.css;
	delete attr.extention;
	delete attr.manager;
	delete attr.strManager;
	delete attr.output;
	delete attr.strOutput;

	delete attr.showHTML;
	delete attr.showScript;
	delete attr.showOutput;
	delete attr.showManager;

	delete attr.previewTemplate;
	delete attr.previewAttr;

	return attr;
};

export class code extends div {
	constructor();
	constructor(attr: IAttrBSExampleContainer);
	constructor(...arg: any[]) {
		super(bsConsNoElemArg<IAttrBSExampleContainer>(convert, arg));
	}
}
