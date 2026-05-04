import { core, b, h } from "@printf83/bsts";

export const card = () => {
	return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i, ix) => {
		return new b.card.container(
			{
				textBgColor: i,
				marginTop: ix !== 0 ? 3 : undefined,
				style: { width: "18rem" },
			},
			[
				new b.card.header("Header"),
				new b.card.body([
					new b.card.title(`${core.uppercaseFirst(i)} card title`),
					new b.card.text(
						"Some quick example text to build on the card title and make up the bulk of the card's content."
					),
				]),
			]
		);
	});
};

export const cardOutline = () => {
	return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i, ix) => {
		return new b.card.container(
			{
				borderColor: i,
				marginTop: ix !== 0 ? 3 : undefined,
				style: { width: "18rem" },
			},
			[
				new b.card.header("Header"),
				new b.card.body({ textColor: i }, [
					new b.card.title(`${core.uppercaseFirst(i)} card title`),
					new b.card.text(
						"Some quick example text to build on the card title and make up the bulk of the card's content."
					),
				]),
			]
		);
	});
};

export const cardExample1 = () => {
	return new b.card.container({ style: { width: "18rem" } }, [
		new b.card.header("Header"),
		new b.card.body([new b.card.title("Card title"), new b.card.subtitle("Card subtitle.")]),
		new b.card.img({
			src: "https://picsum.photos/seed/bsts_0/286/180.webp",
			alt: "Image cap",
		}),
		new b.card.body([
			new b.card.text(
				"Some quick example text to build on the card title and make up the bulk of the card's content."
			),
		]),
		new b.list.container({ flush: true }, [
			new b.list.item("An item"),
			new b.list.item("A second item"),
			new b.list.item("A third item"),
		]),
		new b.card.body([new b.card.link({ href: "#" }, "Card link"), new b.card.link({ href: "#" }, "Another link")]),
		new b.card.footer("2 days ago"),
	]);
};

export const cardExample2 = () => {
	return new b.card.container(
		{ style: { width: "18rem" } },
		new b.card.body([
			new b.card.title("Card title"),
			new b.card.subtitle("Card subtitle"),
			new b.card.text(
				"Some quick example text to build on the card title and make up the bulk of the card's content."
			),
			new b.card.link({ href: "#" }, "Card link"),
			new b.card.link({ href: "#" }, "Another link"),
		])
	);
};

export const accordion = () => {
	return new b.accordion.container({
		item: [
			{
				title: "Accordion Item #1",
				elem: "{{b::This is the first item's accordion body}}. It is shown by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.",
				show: true,
			},
			{
				title: "Accordion Item #2",
				elem: "{{b::This is the second item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.",
			},
			{
				title: "Accordion Item #3",
				elem: "{{b::This is the third item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that Bootstrap use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding Bootstrap default variables. It's also worth noting that just about any HTML can go within the {{b.accordion.body}}, though the transition does limit overflow.",
			},
		],
	});
};
