import { core, b, h } from "@printf83/bsts";

export const title = (text) => {
	return new h.h3({ marginTop: 5 }, text);
};

export const container = ({ direction, title, elem, backgroundColor, showConsole }) => {
	const cardProps = {
		class: "demo-container",
		marginBottom: 2,
		shadow: "sm",
		...(backgroundColor ? { style: { backgroundColor } } : {}),
	};

	return new h.div([
		title ? new h.h5({ marginTop: 3 }, title) : "",
		new b.card.container(cardProps, [
			new b.card.body([
				new h.div({ display: "flex", flex: direction === "row" ? "row" : ["column", "wrap"], gap: 1 }, elem),
			]),
			showConsole
				? new h.div(
						{ class: "demo-console", marginTop: 2, padding: 2, bgColor: "light", rounded: true },
						"Console output will appear here"
					)
				: "",
		]),
	]);
};
