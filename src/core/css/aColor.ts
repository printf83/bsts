let aColorDB: string | undefined = undefined;
export const aColor = () => {
	if (aColorDB) {
		return aColorDB;
	} else {
		const col = [
			{ name: "primary", var: "--bs-primary-rgb" },
			{ name: "secondary", var: "--bs-secondary-rgb" },
			{ name: "success", var: "--bs-success-rgb" },
			{ name: "danger", var: "--bs-danger-rgb" },
			{ name: "warning", var: "--bs-warning-rgb" },
			{ name: "info", var: "--bs-info-rgb" },
			{ name: "light", var: "--bs-light-rgb" },
			{ name: "dark", var: "--bs-dark-rgb" },
			{ name: "black", var: "--bs-black-rgb" },
			{ name: "white", var: "--bs-white-rgb" },
			{ name: "body", var: "--bs-body-color-rgb" },
			{ name: "body-emphasis", var: "--bs-emphasis-color-rgb" },
			{ name: "body-secondary", var: "--bs-secondary-color-rgb" },
			{ name: "body-tertiary", var: "--bs-tertiary-color-rgb" },
		];

		const bg = [
			{ name: "primary", var: "--bs-primary-rgb" },
			{ name: "secondary", var: "--bs-secondary-rgb" },
			{ name: "success", var: "--bs-success-rgb" },
			{ name: "danger", var: "--bs-danger-rgb" },
			{ name: "warning", var: "--bs-warning-rgb" },
			{ name: "info", var: "--bs-info-rgb" },
			{ name: "light", var: "--bs-light-rgb" },
			{ name: "dark", var: "--bs-dark-rgb" },
			{ name: "black", var: "--bs-black-rgb" },
			{ name: "white", var: "--bs-white-rgb" },
			{ name: "body", var: "--bs-body-color-rgb" },
			{ name: "body-emphasis", var: "--bs-emphasis-bg-rgb" },
			{ name: "body-secondary", var: "--bs-secondary-bg-rgb" },
			{ name: "body-tertiary", var: "--bs-tertiary-bg-rgb" },
		];

		aColorDB = [
			`
			/* 
			src/core/css/aColor.ts 
			---------------------- */
			`,
			col
				.map((i) => {
					return `
.link-normal-${i.name} a *,
.link-hover-${i.name} a:hover *,
.link-active-${i.name} a.active *,
.link-normal-${i.name} a.nav-link,
.link-hover-${i.name} a.nav-link:hover,
.link-active-${i.name} a.active.nav-link {
	color:rgba(var(${i.var}), 1) !important;
}
`;
				})
				.join("\n"),
			bg
				.map((i) => {
					return `
.link-bg-${i.name} a,
.link-bg-${i.name} a.nav-link,
.link-active-bg-${i.name} a.active,
.link-active-bg-${i.name} a.nav-link.active,
.link-hover-bg-${i.name} a:hover,
.link-hover-bg-${i.name} a:hover.nav-link {
	background-color:rgba(var(${i.var}), 1) !important;
}
`;
				})
				.join("\n"),
		].join("\n");

		return aColorDB;
	}
};
