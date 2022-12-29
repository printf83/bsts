import { IBase } from './../base/base.interface';
export const build = (container:HTMLElement|null, arg:IBase|IBase[]) => {
	if (arg) {
		arg = Array.isArray(arg) ? arg : [arg];

		if (arg.length > 0) {
			let hasContainer = container ? true : false;
			container = container || document.createElement("div");

			arg.forEach((e) => {
				if ((e !== null) & (e.data !== null)) {
					let element = e.data.tag ? document.createElement(e.data.tag) : container;
					// element = attachAttr(element, e.data.attr); //V1
					element = attachAttr(element, e.data); //V2

					if (e.data.elem) {
						e.data.elem = Array.isArray(e.data.elem) ? e.data.elem : [e.data.elem];
						e.data.elem.forEach((i) => {
							if (i) {
								let iType = typeof i;
								if (iType === "string" || iType === "number" || iType === "boolean") {
									if (e.data.tag !== "pre" && isHTML(i)) {
										element.insertAdjacentHTML("beforeend", i);
									} else if (Array.isArray(i)) {
										console.error(
											"i is array. This happen when you set elem: [[tag],tag]. It should be elem:[tag,tag]",
											i
										);
									} else {
										element.appendChild(document.createTextNode(i));
									}
								} else if (i.hasOwnProperty("cl")) {
									let t = build(element, i);
									element = t ? t : element;
								} else {
									console.error("i is not elem or [elem] or string or number or boolean", i);
								}
							}
						});
					}

					//add to data dom
					e.dom = element;

					if (e.data.tag) container.appendChild(element);
				}
			});

			if (hasContainer) {
				return container;
			} else {
				let result = container.childNodes;
				container = null;
				return result;
			}
		}
	}
	return null;
}