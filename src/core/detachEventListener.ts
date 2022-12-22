export const detachEventListener = (elem:ChildNode):void => {
	let c = elem?.childNodes;
	if (c?.length > 0) {
		c.forEach((item) => {
			detachEventListener(item);
			if (typeof item["detachEventListener"] === "function") {
				Object.keys(item["detachEventListener"]).forEach((i) => {
					item["detachEventListener"][i]();
				});
			}
		});	
	}
}