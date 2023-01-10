import { HTMLElementWithDetachEventListener } from "./setupEventListenerRemover";
export const detachEventListener = (elem: HTMLElement): void => {
	if (elem) {
		let c = elem?.childNodes;

		//detach event from child
		if (c?.length > 0) {
			let d = Array.from(c).map((i) => i as HTMLElement);

			d.forEach((i) => {
				detachEventListener(i);
				if ("detachEventListener" in i) {
					let j = i as HTMLElementWithDetachEventListener;
					Object.keys(j.detachEventListener).forEach((k) => {
						j.detachEventListener[k]!();
					});
				}
			});
		}

		//detach event from elem
		if ("detachEventListener" in elem) {
			let j = elem as HTMLElementWithDetachEventListener;
			Object.keys(j.detachEventListener).forEach((i) => {
				j.detachEventListener[i]!();
			});
		}
	}
};
