import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { div } from "../../html/div.js";
import { item } from "./item.js";
import { appendChild } from "../../core/builder.js";
import { UUID } from "../../core/uuid.js";
import { removeElement } from "../../core/removeElement.js";
import { addEvent, HTMLElementWithEventDB } from "../../core/eventManager.js";

export type IAttrBSToastContainerPlacement =
	| "top-start"
	| "top-center"
	| "top-end"
	| "middle-start"
	| "middle-center"
	| "middle-end"
	| "bottom-start"
	| "bottom-center"
	| "bottom-end";

export interface IAttrBSToastContainer extends IAttr {
	placement?: IAttrBSToastContainerPlacement;
}

const convert = (attr: IAttrBSToastContainer) => {
	attr.placement ??= "top-end";

	switch (attr.placement) {
		case "top-start":
			attr = mergeObject({ class: "toast-container", padding: 3, position: "fixed", top: 0, start: 0 }, attr);
			break;
		case "top-center":
			attr = mergeObject(
				{ class: "toast-container", padding: 3, position: "fixed", top: 0, start: 50, tMiddle: "x" },
				attr
			);
			break;
		case "top-end":
			attr = mergeObject({ class: "toast-container", padding: 3, position: "fixed", top: 0, end: 0 }, attr);
			break;

		case "middle-start":
			attr = mergeObject(
				{ class: "toast-container", padding: 3, position: "fixed", top: 50, start: 0, tMiddle: "y" },
				attr
			);
			break;
		case "middle-center":
			attr = mergeObject(
				{ class: "toast-container", padding: 3, position: "fixed", top: 50, start: 50, tMiddle: true },
				attr
			);
			break;
		case "middle-end":
			attr = mergeObject(
				{ class: "toast-container", padding: 3, position: "fixed", top: 50, end: 0, tMiddle: "y" },
				attr
			);
			break;

		case "bottom-start":
			attr = mergeObject({ class: "toast-container", padding: 3, position: "fixed", bottom: 0, start: 0 }, attr);
			break;
		case "bottom-center":
			attr = mergeObject(
				{ class: "toast-container", padding: 3, position: "fixed", bottom: 0, start: 50, tMiddle: "x" },
				attr
			);
			break;
		case "bottom-end":
			attr = mergeObject({ class: "toast-container", padding: 3, position: "fixed", bottom: 0, end: 0 }, attr);
			break;
	}

	delete attr.placement;
	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttrBSToastContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSToastContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSToastContainer>("elem", convert, arg));
	}

	static show = (placement: IAttrBSToastContainerPlacement, i: item) => {
		//make container
		let containerClassName: string = ".toast-container.top-0.start-0";
		switch (placement) {
			case "top-start":
				containerClassName = ".toast-container.top-0.start-0";
				break;
			case "top-center":
				containerClassName = ".toast-container.top-0.start-50.translate-middle-x";
				break;
			case "top-end":
				containerClassName = ".toast-container.top-0.end-0";
				break;
			case "middle-start":
				containerClassName = ".toast-container.top-50.start-0.translate-middle-y";
				break;
			case "middle-center":
				containerClassName = ".toast-container.top-50.start-50.translate-middle";
				break;
			case "middle-end":
				containerClassName = ".toast-container.top-50.end-0.translate-middle-y";
				break;
			case "bottom-start":
				containerClassName = ".toast-container.bottom-0.start-0";
				break;
			case "bottom-center":
				containerClassName = ".toast-container.bottom-0.start-50.translate-middle-x";
				break;
			case "bottom-end":
				containerClassName = ".toast-container.bottom-0.end-0";
				break;
			default:
				containerClassName = ".toast-container.top-0.start-0";
		}

		let containerDOM: HTMLElement = document.querySelector(containerClassName) as HTMLElement;
		if (!containerDOM) {
			let body = document.getElementById("main") as HTMLElement;
			appendChild(body, new container({ placement: placement }));
			containerDOM = document.querySelector(containerClassName) as HTMLElement;
		}

		if (containerDOM) {
			if (!i.attr) {
				i.attr = {};
			}

			i.attr.id ??= UUID();

			appendChild(containerDOM, i);
			let tst = document.getElementById(i.attr.id);
			if (tst) {
				addEvent("hidden.bs.toast", tst as HTMLElementWithEventDB, (e) => {
					window.bootstrap.Modal.getInstance(e.target as Element)?.dispose();
					removeElement(e.target as HTMLElement);
				});

				window.bootstrap.Toast.getOrCreateInstance(tst as Element).show();
			}
		}
	};
}
