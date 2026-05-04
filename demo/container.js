import { core, b, h } from "@printf83/bsts";

export const title = (text) => {
	return new h.h3({ border: "bottom", fontWeight: "bold" }, text);
};

export const container = (direction, title, elem) => {
	return new b.card.container([
		title ? new b.card.header(title) : "",
		new b.card.body([
			new h.div({ display: "flex", flex: direction === "column" ? "column" : ["row", "wrap"], gap: 1 }, elem),
		]),
	]);
};
