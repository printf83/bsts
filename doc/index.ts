import { IAttrBSButton } from "../lib/bootstrap/button.js";
import { b, core } from "../lib/index.js";

let themeToggle = (active: boolean, value: string, icon: string, label: string) => {
	let id = core.UUID();

	return [
		new b.input({
			type: "radio",
			name: "theme",
			toggle: true,
			checked: active,
			id: id,
			on: {
				change: () => {
					document.getElementsByTagName("HTML")[0].setAttribute("data-bs-theme", value);
				},
			},
		}),
		new b.label({ for: id, icon: icon, color: "primary" }, label),
	];
};

core.documentReady(() => {
	let body = document.getElementById("main") as HTMLElement;
	core.replaceChild(body, new b.row());

	core.appendChild(
		body,
		new b.row({ paddingY: 5, gap: 3 }, [
			new b.row(
				new b.col([
					new b.btngroup([
						...themeToggle(true, "auto", "circle-half-stroke", "Auto"),
						...themeToggle(false, "dark", "moon", "Dark"),
						...themeToggle(false, "light", "sun", "Light"),
					]),
				])
			),
		])
	);

	// core.appendChild(body,
	// 	new b.row({ paddingY: 5, gap: 3 }, [
	// 		// new b.row(new b.col([])),
	// 		// new b.row(new b.col([])),
	// 		// new b.row(new b.col([])),
	// 		// new b.row(new b.col([])),
	// 		// new b.row(new b.col([])),
	// 		// new b.row(new b.col([])),
	// 	]));

	core.appendChild(
		body,
		new b.row({ paddingY: 5, gap: 3 }, [
			new b.row(
				new b.col([
					new b.example.pagetitle("Flex"),
					new b.example.description(
						"Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary."
					),

					new b.example.title("Enable flex behaviors "),
					new b.example.text(
						"Apply display utilities to create a flexbox container and transform direct children elements into flex items. Flex containers and items are able to be modified further with additional flex properties."
					),

					new b.example.code({
						output: () => {
							return new b.table.container(
								{
									striped: "row",
									hoverable: true,
									small: true,
								},
								[
									new b.table.caption("Table title"),
									new b.table.thead({ color: "primary" }, [
										new b.table.tr([
											new b.table.th({ scope: "col" }, "#"),
											new b.table.th({ scope: "col" }, "First"),
											new b.table.th({ scope: "col" }, "Last"),
											new b.table.th({ scope: "col" }, "Handle"),
										]),
									]),
									new b.table.tbody({ divider: true }, [
										...[
											["1", "Mark", "Otto", "@mdo"],
											["2", "Jacob", "Thornton", "@fat"],
											["3", "Larry the Bird", "", "@twitter"],
											["4", "Hamzah", "Aziezs", "@printf83"],
											["5", "Ali", "", "@ali"],
											["6", "Siti", "Aminah", "@siti"],
											["7", "Raju", "", "@raju"],
											["8", "Chong", "", "@chong"],
										].map((i, ix) => {
											return new b.table.tr({ active: ix === 3 ? true : undefined }, [
												new b.table.th({ scope: "row" }, i[0]),
												new b.table.td({ colspan: i[2] === "" ? 2 : undefined }, i[1]),
												i[2] !== "" ? new b.table.td(i[2]) : "",
												new b.table.td(i[3]),
											]);
										}),
									]),
								]
							);
						},
					}),
				])
			),
			new b.row(
				new b.col([
					new b.example.subtitle("Subtitle"),
					new b.example.text(
						"Apply display utilities to create a flexbox container and transform direct children elements into flex items. Flex containers and items are able to be modified further with additional flex properties."
					),

					new b.example.code({
						showOutput: false,
						output: () => {
							let x: number = 1 + 2;
							return x;
						},
					}),
				])
			),

			new b.row(
				new b.col([
					new b.example.subtitle("Subtitle"),
					new b.example.text(
						"Apply display utilities to create a flexbox container and transform direct children elements into flex items. Flex containers and items are able to be modified further with additional flex properties."
					),
					new b.example.code({
						output: () => {
							return [
								"primary",
								"secondary",
								"success",
								"danger",
								"info",
								"warning",
								"light",
								"dark",
								"link",
							].map((i) => new b.button({ color: i as IAttrBSButton["color"] }, i));
						},
					}),
				])
			),
			// new b.row(new b.col([])),
			// new b.row(new b.col([])),
			// new b.row(new b.col([])),
			// new b.row(new b.col([])),
		])
	);

	core.init(body);
});
