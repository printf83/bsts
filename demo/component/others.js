import { core, b, h, c } from "@printf83/bsts";

export const calendar = () => {
	const shareProp = {
		border: true,
		rounded: true,
		padding: 3,
		paddingBottom: 0,
		view: new Date(),
		on: {
			"change.bs.calendar": (e) => {
				const target = e.target;
				const detail = e.detail;

				const consoleEl = target.closest(".demo-container").querySelector(".demo-console");
				if (consoleEl) {
					consoleEl.textContent = `${detail.startDate.toLocaleDateString()}${detail.endDate ? ` until ${detail.endDate.toLocaleDateString()}` : ""}`;
				}
			},
		},
	};

	const containerProp = {
		display: "flex",
		flex: "column",
		justifyContent: "center",
		gap: 3,
	};

	return new h.div(
		{
			display: "flex",
			flex: "wrap",
			justifyContent: "center",
			gap: 3,
		},
		[
			new h.div({ ...containerProp }, new b.calendar({ ...shareProp })),
			new h.div(
				{ ...containerProp },
				new b.calendar({
					...shareProp,
					startDate: new Date(),
				})
			),
			new h.div(
				{ ...containerProp },
				new b.calendar({
					...shareProp,
					multiple: true,
					startDate: new Date(new Date().setDate(new Date().getDate() - 7)),
					endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
				})
			),
		]
	);
};
