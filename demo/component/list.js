import { core, b, h } from "@printf83/bsts";

export const list = () => {
	return new b.list.container([
		new b.list.item("An item"),
		new b.list.item("A second item"),
		new b.list.item("A third item"),
		new b.list.item("A fourth item"),
		new b.list.item("And a fifth one"),
	]);
};

export const listWithBadges = () => {
	return new b.list.container(
		[
			{ label: "A list item", counter: 14 },
			{ label: "A second list item", counter: 2 },
			{ label: "A third list item", counter: 1 },
		].map((i) => {
			return new b.list.item(
				{
					display: "flex",
					justifyContent: "between",
					alignItem: "center",
				},
				[i.label, new b.badge({ bgColor: "primary", rounded: "pill" }, i.counter.toString())]
			);
		})
	);
};

export const listColor = () => {
	return new b.list.container(
		["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
			return new b.list.item(
				{
					color: i,
					display: "flex",
					justifyContent: "between",
					alignItem: "center",
				},
				[
					core.uppercaseFirst(i),
					new b.badge(
						{
							textBgColor: i,
							rounded: "pill",
						},
						core.rndBetween(1, 20).toString()
					),
				]
			);
		})
	);
};

export const listActive = () => {
	return new b.list.container(
		["An item", "A second item", "A third item", "A fourth item", "And a fifth one"].map((i, ix) => {
			return new b.list.item({ action: true, handleActive: true, active: ix === 0 }, i);
		})
	);
};

export const listCustom = () => {
	return new b.tabList.container(
		{ style: { maxWidth: "400px" } },
		[
			{ label: "And some small print", active: true },
			{ label: "And some muted small print" },
			{ label: "And some muted small print" },
		].map((i) => {
			return new b.tabList.item({ href: "#", action: true, active: i.active }, [
				new h.div(
					{
						display: "flex",
						width: 100,
						justifyContent: "between",
					},
					[
						new h.h5({ marginBottom: 1 }, "List group item heading"),
						new h.small(
							{
								textColor: !i.active ? "body-secondary" : undefined,
							},
							"3 days ago"
						),
					]
				),
				new h.p({ marginBottom: 1 }, "Some placeholder content in a paragraph."),
				new h.small({ textColor: !i.active ? "body-secondary" : undefined }, i.label),
			]);
		})
	);
};
