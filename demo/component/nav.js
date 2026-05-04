import { core, b, h, t } from "@printf83/bsts";

export const navTabs = () => {
	const content = (title) =>
		`This is some placeholder content the {{b::${title} tab's}} associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other {{type:'tab|pill|underline'}}powered navigation.`;
	return b.nav.tab({
		item: [
			{ label: "Home", active: true, elem: content("Home") },
			{ label: "Profile", elem: content("Profile") },
			{ label: "Contact", elem: content("Contact") },
			{ label: "Disabled", disabled: true, elem: content("Disabled") },
		],
	});
};

export const navPills = () => {
	const content = (title) =>
		`This is some placeholder content the {{b::${title} tab's}} associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other {{type:'tab|pill|underline'}}powered navigation.`;
	return b.nav.tab({
		type: "pill",
		item: [
			{ label: "Home", active: true, elem: content("Home") },
			{ label: "Profile", elem: content("Profile") },
			{ label: "Contact", elem: content("Contact") },
			{ label: "Disabled", disabled: true, elem: content("Disabled") },
		],
	});
};

export const breadcrumb = () => {
	return [["Home"], ["Home", "Library"], ["Home", "Library", "Data"]].map((i) => {
		return new b.breadcrumb.container(
			{ label: "breadcrumb" },
			i.map((j, jx) => {
				return new b.breadcrumb.item({ active: jx === i.length - 1, href: "#" }, j);
			})
		);
	});
};

export const pagination = () => {
	return [
		new b.pagination.container({
			total: 1284,
			limit: 10,
			maxBtnCount: 3,
			nextPrev: false,
		}),
		new b.pagination.container({
			weight: "lg",
			total: 1284,
			limit: 10,
			maxBtnCount: 3,
			firstLast: false,
		}),
		new b.pagination.container({
			weight: "sm",
			total: 1284,
			limit: 10,
			maxBtnCount: 5,
		}),
	];
};
