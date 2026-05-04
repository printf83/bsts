import { core, b, h } from "@printf83/bsts";

export const alert = () => {
	return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
		return new b.alert.container({ dismissible: true, color: i }, `A simple ${i} alert—check it out!`);
	});
};

export const callout = () => {
	return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
		return new b.alert.container({ callout: true, color: i }, `A simple ${i} alert—check it out!`);
	});
};

export const badge = () => {
	return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
		return new b.badge({ textBgColor: i }, core.uppercaseFirst(i));
	});
};

export const badgePill = () => {
	return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
		return new b.badge(
			{
				textBgColor: i,
				rounded: "pill",
			},
			core.uppercaseFirst(i)
		);
	});
};
