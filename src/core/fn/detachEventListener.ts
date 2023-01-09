export const detachEventListener = (elem: ChildNode): void => {
	if (elem) {
		let c = elem?.childNodes;

		//detach event from child
		if (c?.length > 0) {
			c.forEach((i) => {
				detachEventListener(i);
				if ("detachEventListener" in i) {
					Object.keys(i["detachEventListener"]).forEach((i) => {
						i["detachEventListener"][i]();
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
