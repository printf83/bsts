import { appendChild, init } from "../../core/builder.js";
import { addEvent, HTMLElementWithEventDB } from "../../core/eventManager.js";
import { removeElement } from "../../core/removeElement.js";
import { UUID } from "../../core/uuid.js";
import { container, IAttrBSToastContainerPlacement } from "./container.js";
import { item } from "./item.js";

export const show = (placement: IAttrBSToastContainerPlacement, i: item) => {
	//make container
	let containerClassName: string = ".toast-container.top-0.start-0:not(.debug)";
	switch (placement) {
		case "top-start":
			containerClassName = ".toast-container.top-0.start-0:not(.debug)";
			break;
		case "top-center":
			containerClassName = ".toast-container.top-0.start-50.translate-middle-x:not(.debug)";
			break;
		case "top-end":
			containerClassName = ".toast-container.top-0.end-0:not(.debug)";
			break;
		case "middle-start":
			containerClassName = ".toast-container.top-50.start-0.translate-middle-y:not(.debug)";
			break;
		case "middle-center":
			containerClassName = ".toast-container.top-50.start-50.translate-middle:not(.debug)";
			break;
		case "middle-end":
			containerClassName = ".toast-container.top-50.end-0.translate-middle-y:not(.debug)";
			break;
		case "bottom-start":
			containerClassName = ".toast-container.bottom-0.start-0:not(.debug)";
			break;
		case "bottom-center":
			containerClassName = ".toast-container.bottom-0.start-50.translate-middle-x:not(.debug)";
			break;
		case "bottom-end":
			containerClassName = ".toast-container.bottom-0.end-0:not(.debug)";
			break;
		default:
			containerClassName = ".toast-container.top-0.start-0:not(.debug)";
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
			init(tst);
		}
	}
};
