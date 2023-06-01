let aColorDB: string | undefined = undefined;
export const aColor = () => {
	if (aColorDB) {
		return aColorDB;
	} else {
		const col = [
			"primary",
			"secondary",
			"success",
			"danger",
			"warning",
			"info",
			"light",
			"dark",
			"black",
			"white",
			"body",
			"body-emphasis",
			"body-secondary",
			"body-tertiary",
		];

		aColorDB = [
			col
				.map((i) => {
					return `
                        .link-normal-${i} a > *,
                        .link-hover-${i} a:hover > *,
                        .link-active-${i} a.active > *,
                        .link-normal-${i} a.nav-link,
                        .link-hover-${i} a.nav-link:hover,
                        .link-active-${i} a.active.nav-link {
                            color:rgba(var(--bs-${i}-rgb), 1);
                        }
                        `;
				})
				.join("\n"),
			col
				.map((i) => {
					return `
                        .link-active-bg-${i} a.active > *,
                        .link-active-bg-${i} a.nav-link.active {
                            background-color:rgba(var(--bs-${i}-rgb), 1);
                        }
                        `;
				})
				.join("\n"),
		].join("\n");

		return aColorDB;
	}
};
