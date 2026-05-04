import { core, b, h, t } from "@printf83/bsts";
export const containerCol = (level, title, elem) => {
	return [
		new h.div({ display: "flex", flex: "column", gap: 1 }, [
			title
				? level === 1
					? new h.h3({ border: "bottom", fontWeight: "bold" }, title)
					: new h.h5({ border: "bottom", textColor: "secondary" }, title)
				: "",
			new h.div({ display: "flex", flex: "column", gap: 1 }, elem),
		]),
	];
};

export const containerRow = (level, title, elem) => {
	return [
		new h.div({ display: "flex", flex: "column", gap: 1 }, [
			title
				? level === 1
					? new h.h3({ border: "bottom", fontWeight: "bold" }, title)
					: new h.h5({ border: "bottom", textColor: "secondary" }, title)
				: "",
			new h.div({ display: "flex", flex: "row", gap: 1 }, elem),
		]),
	];
};
