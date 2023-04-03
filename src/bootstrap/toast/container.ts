import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { div } from "../../html/div.js";
import { item } from "./item.js";
import { appendChild, build, node } from "../../core/builder.js";
import { UUID } from "../../core/uuid.js";

const convert = (attr: IAttr) => {
	attr = mergeObject({ class: "toast-container", padding: 3, position: "fixed" }, attr);
	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg("elem", convert, arg));
	}

	static show = (attr: IAttr, i: item) => {
		//make container
		const con = node(new container(attr)) as HTMLElement;
		const conClass = "." + Array.from(con.classList).join(".");
		if (conClass) {
			let conInBody: HTMLElement = document.querySelector(conClass) as HTMLElement;
			if (!conInBody) {
				let body = document.getElementById("main") as HTMLElement;
				appendChild(body, new container(attr));
				conInBody = document.querySelector(conClass) as HTMLElement;
			}

			if (conInBody) {
				if (!i.attr) {
					i.attr = {};
				}

				i.attr.id ??= UUID();

				appendChild(conInBody, i);

				const toastElem = document.getElementById(i.attr.id);
				const toastBootstrap = window.bootstrap.Toast.getOrCreateInstance(toastElem as Element);
				toastBootstrap.show();
			}
		}
	};
}
