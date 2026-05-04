// import "./node_modules/bootstrap/dist/js/bootstrap.esm.js";
// import "./node_modules/@popperjs/core/dist/esm/popper.js";
import { core, b, h } from "./build/esm/index.js";

const x = () => {
	return [
		new h.div({ style: { display: "flex", flexDirection: "column", maxWidth: "50rem", gap: "1rem" } }, [
			new h.p("This is example p tag X"),
			new h.p({ lead: true, data: { test: "test-data" } }, "This is example p tag with attribute"),
			new b.button({ id: "btn1", color: "primary", on: { click: () => alert("Button clicked") } }, "Button"),
			new h.code("() => console.log('Hello World')"),
			new b.card.container({ style: { width: "18rem" } }, [
				new b.card.img({
					location: "top",
					src: "https://picsum.photos/seed/bsts_0/286/180.webp",
					alt: "Image cap",
				}),
				new b.card.body([
					new b.card.title("Card title"),
					new b.card.text(
						"Some quick example text to build on the card title and make up the bulk of the card's content."
					),
					new b.button({ on: { click: () => alert("Button clicked") } }, "Go somewhere"),
				]),
			]),
		]),
	];
};

core.documentReady(() => {
	const body = document.getElementById("main");
	if (!body) return;

	core.replaceChild(body, x());
});
