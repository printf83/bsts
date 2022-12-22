export const codeMarker = (container: HTMLElement): void => {
	let com = container.getElementsByClassName("com");
	if (com && com.length > 0) {
		Array.prototype.forEach.call(com, (i:HTMLElement) => {
			if (i.innerText === "/*marker*/") {
				i.innerHTML = `<span class="nocode marker inline"></span>`;
			} else if (i.innerText === "") {
				i.innerHTML = `<span class="nocode marker inline-end"></span>`;
			} else if (i.innerText === "//marker") {
				i.innerHTML = `<span class="nocode marker downline"></span>`;
			} else if (i.innerText === "//-") {
				i.innerHTML = `<span class="nocode marker downline-end"></span>`;
			}
		});
	}
};
