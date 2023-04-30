export interface IDEventDB {
	[key: string]: EventListener;
}

export class ElementWithEventDB extends HTMLElement {
	constructor(public eventDB: IDEventDB) {
		super();
	}
}

const removeEvent = (elem: ElementWithEventDB) => {
	Object.keys(elem.eventDB).forEach((k) => {
		elem.removeEventListener(k, elem.eventDB[k], false);
		delete elem.eventDB[k];
	});
};

export const addEvent = (name: string, elem: ElementWithEventDB, fn: EventListener) => {
	//create detachEventListener db
	if (typeof elem.eventDB === "undefined") {
		elem.eventDB = {};
	}

	//keep fn in detectEventLIstener db
	elem.eventDB[name] = fn;

	//add event to element
	elem.addEventListener(name, fn, false);
};

export const deleteEvent = (elem: ElementWithEventDB) => {
	if (elem) {
		let c = elem?.childNodes;

		//remove event from child
		if (c?.length > 0) {
			let d = Array.from(c).map((i) => i as ElementWithEventDB);

			d.forEach((e) => {
				deleteEvent(e);
				if ("eventDB" in e) {
					removeEvent(e);
				}
			});
		}

		//detach event from elem
		if ("eventDB" in elem) {
			removeEvent(elem);
		}
	}
};
