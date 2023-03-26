import { IAttr, IElem, tag } from "../../../src/core/base/tag.js";
import { mergeObject } from "../../../src/core/fn/mergeObject.js";
import { bsConstArg } from "../../../src/core/base/bootstrap.js";
import { b, h } from "../../../src/index.js";

export interface IAttrBSExamplePagetitle extends IAttr {
	sourceUrl?: string;
	sourceWeb?: string;
	addedVersion?: string;
}

const convert = (attr: IAttrBSExamplePagetitle) => {
	attr = mergeObject(
		{
			class: "example-pagetitle",

			display: "md-flex",
			flex: "md-row-reverse",
			alignItem: "center",
			justifyContent: "between",
		},
		attr
	);

	let tElem: tag[] = [];
	if (attr.sourceUrl || attr.addedVersion) {
		tElem.push(
			new h.div({ marginBottom: [3, "md-0"], display: "flex" }, [
				attr.addedVersion
					? new h.small(
							{
								display: "inline-flex",
								paddingX: 2,
								paddingY: 1,
								verticalAlign: "baseline",
								fontWeight: "semibold",
								textColor: "success",
								bgColor: "success",
								bgOpacity: 10,
								roundedSize: 2,
								marginEnd: 2,
								border: true,
								borderColor: "success",
								borderOpacity: 10,
							},
							new h.span(`Added in v${attr.addedVersion}`)
					  )
					: "",
				attr.sourceUrl
					? new b.button(
							{
								href: attr.sourceUrl,
								weight: "sm",
								color: "secondary",
								outline: true,
								title: `View and edit this file on ${attr.sourceWeb ? attr.sourceWeb : "Github"}`,
								target: "_blank",
							},
							`View on ${attr.sourceWeb ? attr.sourceWeb : "Github"}`
					  )
					: "",
			])
		);
	}

	if (attr.elem) {
		tElem.push(new h.h(1, { fontDisplay: 5, fontWeight: "normal", marginBottom: 0 }, attr.elem));
	}

	if (tElem) {
		attr.elem = tElem;
	}

	delete attr.sourceUrl;
	delete attr.sourceWeb;
	delete attr.addedVersion;

	return attr;
};

export class pagetitle extends h.div {
	constructor(); //#1
	constructor(attr: IAttrBSExamplePagetitle); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSExamplePagetitle, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSExamplePagetitle>("elem", convert, arg));
	}
}
