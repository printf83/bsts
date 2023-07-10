let aColorDB: string | undefined = undefined;
export const aColor = () => {
	if (aColorDB) {
		return aColorDB;
	} else {
		const color = [
			{ name: "primary", var: "rgba(var(--bs-primary-rgb), 1)" },
			{ name: "secondary", var: "rgba(var(--bs-secondary-rgb), 1)" },
			{ name: "success", var: "rgba(var(--bs-success-rgb), 1)" },
			{ name: "danger", var: "rgba(var(--bs-danger-rgb), 1)" },
			{ name: "warning", var: "rgba(var(--bs-warning-rgb), 1)" },
			{ name: "info", var: "rgba(var(--bs-info-rgb), 1)" },
			{ name: "link", var: "rgba(var(--bs-link-color-rgb), 1)" },
			{ name: "light", var: "rgba(var(--bs-light-rgb), 1)" },
			{ name: "dark", var: "rgba(var(--bs-dark-rgb), 1)" },
			{ name: "black", var: "rgba(var(--bs-black-rgb), 1)" },
			{ name: "white", var: "rgba(var(--bs-white-rgb), 1)" },
			{ name: "body", var: "rgba(var(--bs-body-color-rgb), 1)" },
			{ name: "body-emphasis", var: "rgba(var(--bs-emphasis-color-rgb), 1)" },
			{ name: "body-secondary", var: "rgba(var(--bs-secondary-color-rgb), 1)" },
			{ name: "body-tertiary", var: "rgba(var(--bs-tertiary-color-rgb), 1)" },
		];

		const bgcolor = [
			{ name: "primary", var: "rgba(var(--bs-primary-rgb), 1)" },
			{ name: "secondary", var: "rgba(var(--bs-secondary-rgb), 1)" },
			{ name: "success", var: "rgba(var(--bs-success-rgb), 1)" },
			{ name: "danger", var: "rgba(var(--bs-danger-rgb), 1)" },
			{ name: "warning", var: "rgba(var(--bs-warning-rgb), 1)" },
			{ name: "info", var: "rgba(var(--bs-info-rgb), 1)" },
			{ name: "link", var: "rgba(var(--bs-link-color-rgb), 1)" },
			{ name: "light", var: "rgba(var(--bs-light-rgb), 1)" },
			{ name: "dark", var: "rgba(var(--bs-dark-rgb), 1)" },
			{ name: "black", var: "rgba(var(--bs-black-rgb), 1)" },
			{ name: "white", var: "rgba(var(--bs-white-rgb), 1)" },
			{ name: "body", var: "rgba(var(--bs-body-color-rgb), 1)" },
			{ name: "body-emphasis", var: "rgba(var(--bs-emphasis-bg-rgb), 1)" },
			{ name: "body-secondary", var: "rgba(var(--bs-secondary-bg-rgb), 1)" },
			{ name: "body-tertiary", var: "rgba(var(--bs-tertiary-bg-rgb), 1)" },
		];

		const border = [
			{ name: "primary", var: "rgba(var(--bs-primary-rgb), 1)" },
			{ name: "secondary", var: "rgba(var(--bs-secondary-rgb), 1)" },
			{ name: "success", var: "rgba(var(--bs-success-rgb), 1)" },
			{ name: "danger", var: "rgba(var(--bs-danger-rgb), 1)" },
			{ name: "warning", var: "rgba(var(--bs-warning-rgb), 1)" },
			{ name: "info", var: "rgba(var(--bs-info-rgb), 1)" },
			{ name: "link", var: "rgba(var(--bs-link-color-rgb), 1)" },
			{ name: "light", var: "rgba(var(--bs-light-rgb), 1)" },
			{ name: "dark", var: "rgba(var(--bs-dark-rgb), 1)" },
			{ name: "black", var: "rgba(var(--bs-black-rgb), 1)" },
			{ name: "white", var: "rgba(var(--bs-white-rgb), 1)" },
			{ name: "body", var: "rgba(var(--bs-body-color-rgb), 1)" },
			{ name: "body-emphasis", var: "rgba(var(--bs-emphasis-bg-rgb), 1)" },
			{ name: "body-secondary", var: "rgba(var(--bs-secondary-bg-rgb), 1)" },
			{ name: "body-tertiary", var: "rgba(var(--bs-tertiary-bg-rgb), 1)" },
		];

		aColorDB = [
			`
			/* 
			src/core/css/aColor.ts 
			---------------------- */
			`,
			color
				.map((i) => {
					return `
.link-normal-${i.name},
.link-active-${i.name}.active,
.active .link-active-${i.name} {
	color: ${i.var} !important;
}`;
				})
				.join(""),
			color
				.map((i) => {
					return `
.link-hover-${i.name}:hover,
.link-hover-${i.name}:focus,
.link-hover-${i.name}:active {
	color: ${i.var} !important;
}`;
				})
				.join(""),
			bgcolor
				.map((i) => {
					return `
.link-bg-${i.name},
.link-active-bg-${i.name}.active,
.active .link-active-bg-${i.name} {
	background-color: ${i.var} !important;
}`;
				})
				.join(""),
			bgcolor
				.map((i) => {
					return `
.link-hover-bg-${i.name}:hover,
.link-hover-bg-${i.name}:focus,
.link-hover-bg-${i.name}:active {
	background-color: ${i.var} !important;
}`;
				})
				.join(""),
			border
				.map((i) => {
					return `
.link-border-${i.name},
.link-active-border-${i.name}.active,
.active .link-active-border-${i.name} {
	border-color: ${i.var} !important;
}`;
				})
				.join(""),
			border
				.map((i) => {
					return `
.link-hover-border-${i.name}:hover,
.link-hover-border-${i.name}:focus,
.link-hover-border-${i.name}:active {
	border-color: ${i.var} !important;
}`;
				})
				.join(""),
		].join("");

		return aColorDB;
	}
};
// let aColorDB: string | undefined = undefined;
// export const aColor = () => {
// 	if (aColorDB) {
// 		return aColorDB;
// 	} else {
// 		const color = [
// 			{ name: "primary", var: "rgba(var(--bs-primary-rgb), 1) !important" },
// 			{ name: "secondary", var: "rgba(var(--bs-secondary-rgb), 1) !important" },
// 			{ name: "success", var: "rgba(var(--bs-success-rgb), 1) !important" },
// 			{ name: "danger", var: "rgba(var(--bs-danger-rgb), 1) !important" },
// 			{ name: "warning", var: "rgba(var(--bs-warning-rgb), 1) !important" },
// 			{ name: "info", var: "rgba(var(--bs-info-rgb), 1) !important" },
// 			{ name: "link", var: "rgba(var(--bs-link-color-rgb), 1) !important" },
// 			{ name: "light", var: "rgba(var(--bs-light-rgb), 1) !important" },
// 			{ name: "dark", var: "rgba(var(--bs-dark-rgb), 1) !important" },
// 			{ name: "black", var: "rgba(var(--bs-black-rgb), 1) !important" },
// 			{ name: "white", var: "rgba(var(--bs-white-rgb), 1) !important" },
// 			{ name: "body", var: "rgba(var(--bs-body-color-rgb), 1) !important" },
// 			{ name: "body-emphasis", var: "rgba(var(--bs-emphasis-color-rgb), 1) !important" },
// 			{ name: "body-secondary", var: "rgba(var(--bs-secondary-color-rgb), 1) !important" },
// 			{ name: "body-tertiary", var: "rgba(var(--bs-tertiary-color-rgb), 1) !important" },
// 		];

// 		const bgcolor = [
// 			{ name: "primary", var: "rgba(var(--bs-primary-rgb), 1) !important" },
// 			{ name: "secondary", var: "rgba(var(--bs-secondary-rgb), 1) !important" },
// 			{ name: "success", var: "rgba(var(--bs-success-rgb), 1) !important" },
// 			{ name: "danger", var: "rgba(var(--bs-danger-rgb), 1) !important" },
// 			{ name: "warning", var: "rgba(var(--bs-warning-rgb), 1) !important" },
// 			{ name: "info", var: "rgba(var(--bs-info-rgb), 1) !important" },
// 			{ name: "link", var: "rgba(var(--bs-link-color-rgb), 1) !important" },
// 			{ name: "light", var: "rgba(var(--bs-light-rgb), 1) !important" },
// 			{ name: "dark", var: "rgba(var(--bs-dark-rgb), 1) !important" },
// 			{ name: "black", var: "rgba(var(--bs-black-rgb), 1) !important" },
// 			{ name: "white", var: "rgba(var(--bs-white-rgb), 1) !important" },
// 			{ name: "body", var: "rgba(var(--bs-body-color-rgb), 1) !important" },
// 			{ name: "body-emphasis", var: "rgba(var(--bs-emphasis-bg-rgb), 1) !important" },
// 			{ name: "body-secondary", var: "rgba(var(--bs-secondary-bg-rgb), 1) !important" },
// 			{ name: "body-tertiary", var: "rgba(var(--bs-tertiary-bg-rgb), 1) !important" },
// 		];

// 		const border = [
// 			{ name: "primary", var: "rgba(var(--bs-primary-rgb), 1) !important" },
// 			{ name: "secondary", var: "rgba(var(--bs-secondary-rgb), 1) !important" },
// 			{ name: "success", var: "rgba(var(--bs-success-rgb), 1) !important" },
// 			{ name: "danger", var: "rgba(var(--bs-danger-rgb), 1) !important" },
// 			{ name: "warning", var: "rgba(var(--bs-warning-rgb), 1) !important" },
// 			{ name: "info", var: "rgba(var(--bs-info-rgb), 1) !important" },
// 			{ name: "link", var: "rgba(var(--bs-link-color-rgb), 1) !important" },
// 			{ name: "light", var: "rgba(var(--bs-light-rgb), 1) !important" },
// 			{ name: "dark", var: "rgba(var(--bs-dark-rgb), 1) !important" },
// 			{ name: "black", var: "rgba(var(--bs-black-rgb), 1) !important" },
// 			{ name: "white", var: "rgba(var(--bs-white-rgb), 1) !important" },
// 			{ name: "body", var: "rgba(var(--bs-body-color-rgb), 1) !important" },
// 			{ name: "body-emphasis", var: "rgba(var(--bs-emphasis-bg-rgb), 1) !important" },
// 			{ name: "body-secondary", var: "rgba(var(--bs-secondary-bg-rgb), 1) !important" },
// 			{ name: "body-tertiary", var: "rgba(var(--bs-tertiary-bg-rgb), 1) !important" },
// 		];

// 		aColorDB = [
// 			`
// 			/*
// 			src/core/css/aColor.ts
// 			---------------------- */
// 			`,
// 			color
// 				.map((i) => {
// 					return `
// .link-normal-${i.name} a,
// .link-active-${i.name} a.active,
// .link-normal-${i.name} a *,
// .link-active-${i.name} a.active *,
// .link-normal-${i.name} a.nav-link,
// .link-active-${i.name} a.active.nav-link,
// a.link-normal-${i.name},
// a.link-active-${i.name}.active,
// a.link-normal-${i.name} *,
// a.link-active-${i.name}.active *,
// a.link-normal-${i.name}.nav-link,
// a.link-active-${i.name}.active.nav-link {
// 	color:${i.var};
// }
// `;
// 				})
// 				.join("\n"),
// 			color
// 				.map((i) => {
// 					return `
// .link-hover-${i.name} a:hover,
// .link-hover-${i.name} a:hover *,
// .link-hover-${i.name} a.nav-link:hover,
// a.link-hover-${i.name}:hover,
// a.link-hover-${i.name}:hover *,
// a.link-hover-${i.name}.nav-link:hover,
// .link-hover-${i.name} a:focus,
// .link-hover-${i.name} a:focus *,
// .link-hover-${i.name} a.nav-link:focus,
// a.link-hover-${i.name}:focus,
// a.link-hover-${i.name}:focus *,
// a.link-hover-${i.name}.nav-link:hover,
// .link-hover-${i.name} a:active,
// .link-hover-${i.name} a:active *,
// .link-hover-${i.name} a.nav-link:active,
// a.link-hover-${i.name}:active,
// a.link-hover-${i.name}:active *,
// a.link-hover-${i.name}.nav-link:active {
// 	color:${i.var};
// }
// `;
// 				})
// 				.join("\n"),
// 			bgcolor
// 				.map((i) => {
// 					return `
// .link-bg-${i.name} a,
// .link-bg-${i.name} a.nav-link,
// .link-active-bg-${i.name} a.active,
// .link-active-bg-${i.name} a.nav-link.active,
// a.link-bg-${i.name},
// a.link-bg-${i.name}.nav-link,
// a.link-active-bg-${i.name}.active,
// a.link-active-bg-${i.name}.nav-link.active {
// 	background-color:${i.var};
// }
// `;
// 				})
// 				.join("\n"),
// 			bgcolor
// 				.map((i) => {
// 					return `
// .link-hover-bg-${i.name} a:hover,
// .link-hover-bg-${i.name} a:hover.nav-link,
// a.link-hover-bg-${i.name}:hover,
// a.link-hover-bg-${i.name}:hover.nav-link,
// .link-hover-bg-${i.name} a:focus,
// .link-hover-bg-${i.name} a:focus.nav-link,
// a.link-hover-bg-${i.name}:focus,
// a.link-hover-bg-${i.name}:focus.nav-link,
// .link-hover-bg-${i.name} a:active,
// .link-hover-bg-${i.name} a:active.nav-link,
// a.link-hover-bg-${i.name}:active,
// a.link-hover-bg-${i.name}:active.nav-link {
// 	background-color:${i.var};
// }
// `;
// 				})
// 				.join("\n"),
// 			border
// 				.map((i) => {
// 					return `
// .link-border-${i.name} a,
// .link-border-${i.name} a.nav-link,
// .link-active-border-${i.name} a.active,
// .link-active-border-${i.name} a.nav-link.active,
// a.link-border-${i.name},
// a.link-border-${i.name}.nav-link,
// a.link-active-border-${i.name}.active,
// a.link-active-border-${i.name}.nav-link.active {
// 	border-color:${i.var};
// }
// `;
// 				})
// 				.join("\n"),
// 			border
// 				.map((i) => {
// 					return `
// .link-hover-border-${i.name} a:hover,
// .link-hover-border-${i.name} a:hover.nav-link,
// a.link-hover-border-${i.name}:hover,
// a.link-hover-border-${i.name}:hover.nav-link,
// .link-hover-border-${i.name} a:focus,
// .link-hover-border-${i.name} a:focus.nav-link,
// a.link-hover-border-${i.name}:focus,
// a.link-hover-border-${i.name}:focus.nav-link,
// .link-hover-border-${i.name} a:active,
// .link-hover-border-${i.name} a:active.nav-link,
// a.link-hover-border-${i.name}:active,
// a.link-hover-border-${i.name}:active.nav-link {
// 	border-color:${i.var};
// }
// `;
// 				})
// 				.join("\n"),
// 		].join("\n");

// 		return aColorDB;
// 	}
// };
