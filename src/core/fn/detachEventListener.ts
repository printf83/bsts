export const detachEventListener = (elem: ChildNode): void => {
	if (elem) {
		let c = elem?.childNodes;

		//detach event from child
		if (c?.length > 0) {
			c.forEach((item) => {
				detachEventListener(item);
				if ("detachEventListener" in item) {
					Object.keys(item["detachEventListener"]).forEach((i) => {
						item["detachEventListener"][i]();
					});
				}
			});
		}

		//detach event from elem
		if ("detachEventListener" in elem) {
			Object.keys(elem["detachEventListener"]).forEach((i) => {
				elem["detachEventListener"][i]();
			});
		}
	}
};
