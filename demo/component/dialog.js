import { core, b, h } from "@printf83/bsts";

export const modal = () => {
	return new b.modal.container({ debug: true }, [
		new b.modal.header({ close: true }, new b.modal.title("Modal title")),
		new b.modal.body(new h.p("Modal body text gose here")),
		new b.modal.footer([
			new b.button({ dismiss: "modal", color: "secondary" }, "Close"),
			new b.button({ color: "primary" }, "Save changes"),
		]),
	]);
};

export const offcanvas = () => {
	return [
		new b.offcanvas.button(
			{
				href: "#offcanvasExample",
				controlfor: "offcanvasExample",
				marginEnd: 2,
			},
			"Link with href"
		),
		new b.offcanvas.button(
			{ target: "#offcanvasExample", controlfor: "offcanvasExample" },
			"Button with data-bs-target"
		),
		new b.offcanvas.container({ id: "offcanvasExample", labelledby: "offcanvasExampleLabel" }, [
			new b.offcanvas.header([
				new b.offcanvas.title({ id: "offcanvasExampleLabel" }, "Offcanvas"),
				new b.offcanvas.btnclose(),
			]),
			new b.offcanvas.body([
				new h.div(
					"Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc."
				),
				new b.dropdown.container({ marginTop: 3 }, [
					new b.dropdown.button({ color: "secondary" }, "Dropdown button"),
					new b.dropdown.menu([
						new b.dropdown.item({ href: "#" }, "Action"),
						new b.dropdown.item({ href: "#" }, "Another action"),
						new b.dropdown.item({ href: "#" }, "Something else here"),
					]),
				]),
			]),
		]),
	];
};

export const popover = () => {
	return ["top", "right", "bottom", "left"].map((i) => {
		return new b.popover(
			{
				placement: i,
				content: `${core.uppercaseFirst(i)} popover`,
			},
			new b.button({ color: "secondary" }, `Popover on ${i}`)
		);
	});
};

export const tooltip = () => {
	return ["top", "right", "bottom", "left"].map((i) => {
		return new b.tooltip(
			{
				placement: i,
				content: `Tooltip on ${i}`,
			},
			new b.button({ color: "secondary" }, `Tooltip on ${i}`)
		);
	});
};

export const toast = () => {
	return new b.toast.item({ debug: true, live: "assertive", atomic: true }, [
		new b.toast.header([
			new h.div({
				bgColor: "primary",
				rounded: true,
				marginEnd: 2,
				style: { width: "20px", height: "20px" },
			}),
			new h.strong({ marginEnd: "auto" }, "Bootstrap"),
			new b.toast.timer(),
			new b.toast.btnclose(),
		]),
		new b.toast.body("Hello, world! This is a toast message."),
	]);
};
