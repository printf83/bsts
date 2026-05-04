import { core, b, h } from "@printf83/bsts";

export const title = (text) => {
	return new h.h3({ marginTop: 5 }, text);
};

export const container = (direction, title, elem, backgroundColor) => {
	if (backgroundColor) {
		return new h.div([
			title ? new h.h5({ marginTop: 3 }, title) : "",
			new b.card.container({ marginBottom: 2, shadow: "sm", style: { backgroundColor: backgroundColor } }, [
				new b.card.body([
					new h.div({ flex: direction === "column" ? "column" : ["row", "wrap"], gap: 1 }, elem),
				]),
			]),
		]);
	} else {
		return new h.div([
			title ? new h.h5({ marginTop: 3 }, title) : "",
			new b.card.container({ marginBottom: 2, shadow: "sm" }, [
				new b.card.body([
					new h.div({ flex: direction === "column" ? "column" : ["row", "wrap"], gap: 1 }, elem),
				]),
			]),
		]);
	}
};
