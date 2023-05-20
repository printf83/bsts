import { addEvent } from "./eventManager.js";

const isIcon = (cn: DOMTokenList) => {
	let result = false;
	["bi", "fas", "fab", "far", "fad"].forEach((i) => {
		if (cn.contains(i)) {
			result = true;
			return;
		}
	});

	return result;
};

export const svgBubbleManager = () => {
	addEvent("click", document.body, (event) => {
		const target = event.target as Element;
		if (target && target.tagName === "I") {
			if (isIcon(target.classList)) {
				const a = target.closest("a");
				if (a) {
					a.click();
				} else {
					const button = target.closest("button");
					if (button) {
						button.click();
					}
				}
			}
		}
	});
};
