import { core, b, h, t } from "@printf83/bsts";

export const table = () => {
	return new b.table.container([
		new b.table.thead(
			new b.table.tr([
				new b.table.th({ scope: "col" }, "Class"),
				new b.table.th({ scope: "col" }, "Heading"),
				new b.table.th({ scope: "col" }, "Heading"),
			])
		),
		new b.table.tbody(
			[undefined, "primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map(
				(i) =>
					new b.table.tr({ color: i }, [
						new b.table.th({ scope: "row" }, i ? core.uppercaseFirst(i) : "Default"),
						new b.table.td("Cell"),
						new b.table.td("Cell"),
					])
			)
		),
	]);
};
