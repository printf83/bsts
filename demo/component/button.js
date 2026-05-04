import { core, b, h } from "@printf83/bsts";

export const button = () => {
	return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"].map((i) => {
		return new b.button({ color: i }, core.uppercaseFirst(i));
	});
};

export const buttonDisabled = () => {
	return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"].map((i) => {
		return new b.button({ color: i, disabled: true }, core.uppercaseFirst(i));
	});
};

export const buttonOutline = () => {
	return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"].map((i) => {
		return new b.button({ color: i, outline: true }, core.uppercaseFirst(i));
	});
};

export const buttonSizing = () => {
	return [
		new b.button({ weight: "lg" }, "Large button"),
		new b.button("Default button"),
		new b.button({ weight: "sm" }, "Small button"),
	];
};

export const buttonBlock = () => {
	return new h.div({ display: "grid", gap: 2 }, [new b.button("Button"), new b.button("Button")]);
};

export const buttonGroup = () => {
	return new b.btngroup({ label: "Basic example", role: "group" }, [
		new b.button("Left"),
		new b.button("Middle"),
		new b.button("Right"),
	]);
};

export const buttonCheckbox = () => {
	return new b.btngroup({ label: "Basic checkbox toggle button group", role: "group" }, [
		new b.input({ type: "checkbox", toggle: true, id: "btncheck1" }),
		new b.label({ for: "btncheck1", color: "primary", outline: true }, "Checkbox 1"),
		new b.input({ type: "checkbox", toggle: true, id: "btncheck2" }),
		new b.label({ for: "btncheck2", color: "primary", outline: true }, "Checkbox 2"),
		new b.input({ type: "checkbox", toggle: true, id: "btncheck3" }),
		new b.label({ for: "btncheck3", color: "primary", outline: true }, "Checkbox 3"),
	]);
};

export const buttonRadio = () => {
	return new b.btngroup({ label: "Basic checkbox toggle button group", role: "group" }, [
		new b.input({
			type: "radio",
			toggle: true,
			id: "btnradio1",
			name: "btnradio",
			checked: true,
		}),
		new b.label({ for: "btnradio1", color: "primary", outline: true }, "Radio 1"),
		new b.input({
			type: "radio",
			toggle: true,
			id: "btnradio2",
			name: "btnradio",
		}),
		new b.label({ for: "btnradio2", color: "primary", outline: true }, "Radio 2"),
		new b.input({
			type: "radio",
			toggle: true,
			id: "btnradio3",
			name: "btnradio",
		}),
		new b.label({ for: "btnradio3", color: "primary", outline: true }, "Radio 3"),
	]);
};

export const buttonToolbar = () => {
	return new b.btngroup({ label: "Toolbar with button groups", role: "toolbar" }, [
		new b.btngroup(
			{ label: "First group", marginEnd: 2 },
			["1", "2", "3", "4"].map((i) => new b.button(i))
		),
		new b.btngroup(
			{ label: "Second group", marginEnd: 2 },
			["5", "6", "7"].map((i) => new b.button({ color: "secondary" }, i))
		),
		new b.btngroup(
			{ label: "Third group" },
			["8"].map((i) => new b.button({ color: "info" }, i))
		),
	]);
};

export const buttonVertical = () => {
	return new b.btngroup({ label: "Vertical button group", vertical: true }, [
		new b.button("Button"),
		new b.button("Button"),
		new b.btngroup([
			new b.dropdown.button({}, "Dropdown"),
			new b.dropdown.menu([
				new b.dropdown.item({ href: "#" }, "Dropdown link 1"),
				new b.dropdown.item({ href: "#" }, "Dropdown link 2"),
			]),
		]),
		new b.button("Button"),
		new b.button("Button"),
		new b.btngroup([
			new b.dropdown.button({}, "Dropdown"),
			new b.dropdown.menu([
				new b.dropdown.item({ href: "#" }, "Dropdown link 1"),
				new b.dropdown.item({ href: "#" }, "Dropdown link 2"),
			]),
		]),
		new b.btngroup([
			new b.dropdown.button({}, "Dropdown"),
			new b.dropdown.menu([
				new b.dropdown.item({ href: "#" }, "Dropdown link 1"),
				new b.dropdown.item({ href: "#" }, "Dropdown link 2"),
			]),
		]),
		new b.btngroup([
			new b.dropdown.button({}, "Dropdown"),
			new b.dropdown.menu([
				new b.dropdown.item({ href: "#" }, "Dropdown link 1"),
				new b.dropdown.item({ href: "#" }, "Dropdown link 2"),
			]),
		]),
	]);
};

export const buttonDropdown = () => {
	return ["primary", "secondary", "success", "info", "warning", "danger"].map((i) => {
		return new b.dropdown.container([
			new b.dropdown.button({ color: i }, core.uppercaseFirst(i)),
			new b.dropdown.menu([
				new b.dropdown.item({ href: "#" }, "Action"),
				new b.dropdown.item({ href: "#" }, "Another action"),
				new b.dropdown.item({ href: "#" }, "Something else here"),
				new b.dropdown.divider(),
				new b.dropdown.item({ href: "#" }, "Separated link"),
			]),
		]);
	});
};

export const buttonSplit = () => {
	return ["primary", "secondary", "success", "info", "warning", "danger"].map((i) => {
		return new b.dropdown.container([
			new b.button({ color: i }, core.uppercaseFirst(i)),
			new b.dropdown.button({
				color: i,
				split: true,
			}),
			new b.dropdown.menu([
				new b.dropdown.item({ href: "#" }, "Action"),
				new b.dropdown.item({ href: "#" }, "Another action"),
				new b.dropdown.item({ href: "#" }, "Something else here"),
				new b.dropdown.divider(),
				new b.dropdown.item({ href: "#" }, "Separated link"),
			]),
		]);
	});
};
