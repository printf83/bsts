import { appendChild, init } from "../../core/builder.js";
import { addEvent, HTMLElementWithEventDB } from "../../core/eventManager.js";
import { removeElement } from "../../core/removeElement.js";
import { UUID } from "../../core/uuid.js";
import { container } from "./container.js";

export const show = (i: container) => {
	if (!i.attr) {
		i.attr = {};
	}

	i.attr.id ??= UUID();

	let body = document.getElementById("main") as HTMLElement;
	appendChild(body, i);

	let mdl = document.getElementById(i.attr.id);
	if (mdl) {
		addEvent("hidden.bs.modal", mdl as HTMLElementWithEventDB, (e) => {
			window.bootstrap.Modal.getInstance(e.target as Element)?.dispose();
			removeElement(e.target as HTMLElement);
		});

		window.bootstrap.Modal.getOrCreateInstance(mdl as Element).show();
		init(mdl);
	}
};
