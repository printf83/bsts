import { core, b, h, t } from "@printf83/bsts";

export const form = () => {
	return new h.form(
		new h.fieldset([
			new h.legend("Legend"),
			b.form.input({
				container: { marginBottom: 3 },
				value: "email@example.com",
				label: "Email",
				plaintext: true,
				col1: "sm-2",
				col2: "sm-10",
			}),
			b.form.input({
				container: { marginBottom: 3 },
				label: "Email address",
				type: "email",
				placeholder: "Enter email",
				description: "We'll never share your email with anyone else.",
			}),
			b.form.input({
				label: "Password",
				type: "password",
				placeholder: "Password",
				autocomplete: "off",
			}),
		])
	);
};

export const select = () => {
	return [
		b.form.select({
			container: { marginBottom: 3 },
			label: "Example select",
			item: [
				{ selected: true, value: "1", elem: "One" },
				{ value: "2", elem: "Two" },
				{ value: "3", elem: "Three" },
				{ value: "4", elem: "Four" },
				{ value: "5", elem: "Five" },
			],
		}),
		b.form.select({
			disabled: true,
			container: { marginBottom: 3 },
			label: "Example disable select",
			item: [
				{ selected: true, value: "1", elem: "One" },
				{ value: "2", elem: "Two" },
				{ value: "3", elem: "Three" },
				{ value: "4", elem: "Four" },
				{ value: "5", elem: "Five" },
			],
		}),
		b.form.select({
			multiple: true,
			label: "Example multiple select",
			item: [
				{ value: "1", elem: "One" },
				{ value: "2", elem: "Two" },
				{ value: "3", elem: "Three" },
				{ value: "4", elem: "Four" },
				{ value: "5", elem: "Five" },
			],
		}),
	];
};

export const textarea = () => {
	return b.form.textarea({
		label: "Example textarea",
	});
};

export const fileInput = () => {
	return b.form.input({
		label: "Default file input exampe",
		type: "file",
	});
};

export const formRadio = () => {
	return [
		b.form.check({
			label: "Option one is this and that—be sure to include why it's great",
			type: "radio",
			name: "btnradio2",
			checked: true,
		}),
		b.form.check({
			label: "Option two can be something else and selecting it will deselect option one",
			type: "radio",
			name: "btnradio2",
		}),
		b.form.check({
			label: "Option three is disabled",
			type: "radio",
			name: "btnradio2",
			disabled: true,
		}),
	];
};

export const formCheckbox = () => {
	return [
		b.form.check({
			label: "Default checkbox",
		}),
		b.form.check({
			label: "Checked checkbox",
			checked: true,
		}),
		b.form.check({
			label: "Indeterminate checkbox",
			indeterminate: true,
		}),
		b.form.check({
			label: "Disabled checkbox",
			disabled: true,
		}),
	];
};

export const formSwitch = () => {
	return [
		b.form.check({
			label: "Default switch checkbox",
			switch: true,
		}),
		b.form.check({
			label: "Checked switch checkbox",
			switch: true,
			checked: true,
		}),
		b.form.check({
			label: "Disabled switch checkbox",
			switch: true,
			disabled: true,
		}),
	];
};

export const formRange = () => {
	return [
		b.form.input({
			container: { marginBottom: 3 },
			label: "Example range",
			type: "range",
		}),
		b.form.input({
			container: { marginBottom: 3 },
			label: "Example range",
			type: "range",
			disabled: true,
		}),
		b.form.input({
			label: "Example range",
			type: "range",
			min: 0,
			max: 5,
			step: 0.5,
			value: 2.5,
		}),
	];
};

export const formButton = () => {
	return [
		new b.button({ type: "submit" }, "Submit"),
		new b.button({ type: "reset" }, "Reset"),
		new b.button({ type: "button" }, "Button"),
	];
};

export const formDisabled = () => {
	return [
		b.form.input({
			container: { marginBottom: 3 },
			label: "Disabled input",
			placeholder: "Disabled input here...",
			disabled: true,
		}),
		b.form.input({
			label: "Readonly input",
			placeholder: "Readonly input here...",
			readonly: true,
		}),
	];
};

export const formValidation = () => {
	return [
		b.form.input({
			container: { marginBottom: 3 },
			label: "Valid input",
			value: "corrent value",
			validFeedback: "Success! You've done it.",
			isvalid: true,
		}),
		b.form.input({
			label: "Invalid input",
			value: "wrong value",
			invalidFeedback: "Sorry, that username's taken. Try another?",
			isvalid: false,
		}),
	];
};

export const formWeight = () => {
	return [
		b.form.input({
			container: { marginBottom: 3 },
			label: "Large input",
			placeholder: "weight: 'lg'",
			weight: "lg",
		}),
		b.form.input({
			container: { marginBottom: 3 },
			label: "Default input",
		}),
		b.form.input({
			label: "Small input",
			placeholder: "weight: 'sm'",
			weight: "sm",
		}),
	];
};

export const formInputAddon = () => {
	return [
		b.form.input({
			container: { marginBottom: 3 },
			before: "$",
			after: "0.00",
		}),
		b.form.input({
			placeholder: "Recipient's username",
			after: new b.button("Button"),
		}),
	];
};

export const formFloatingLabel = () => {
	return new h.form([
		b.form.floatinglabel.input({
			container: { marginBottom: 3 },
			label: "Email address",
			type: "email",
		}),
		b.form.floatinglabel.input({
			label: "Password",
			type: "password",
			autocomplete: "off",
		}),
	]);
};
