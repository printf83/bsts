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
