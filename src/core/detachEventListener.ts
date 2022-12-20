export function detachEventListener(elem:ChildNode):void {
	if (elem) {
		let c = elem?.childNodes;
		if (c?.length > 0) {
			c.forEach((item) => {
				detachEventListener(item);

				if (item["detachEventListener"] === "function") {
					Object.keys(item["detachEventListener"]).forEach((i) => {
						item["detachEventListener"][i]();
					});
				}
			});
		}
		if (typeof elem["detachEventListener"] === "function") {
			Object.keys(elem["detachEventListener"]).forEach((i) => {
				elem["detachEventListener"][i]();
			});
		}
	}
}