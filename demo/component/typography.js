import { core, b, h } from "@printf83/bsts";

export const typography = () => {
	return [
		new h.h1("h1. Bootstrap heading"),
		new h.h2("h2. Bootstrap heading"),
		new h.h3("h3. Bootstrap heading"),
		new h.h4("h4. Bootstrap heading"),
		new h.h5("h5. Bootstrap heading"),
		new h.h6("h6. Bootstrap heading"),
	];
};

export const typographySecondary = () => {
	return [
		new h.h1(["h1. Heading", new h.small({ textColor: "body-secondary" }, " with faded secondary text")]),
		new h.h2(["h2. Heading", new h.small({ textColor: "body-secondary" }, " with faded secondary text")]),
		new h.h3(["h3. Heading", new h.small({ textColor: "body-secondary" }, " with faded secondary text")]),
		new h.h4(["h4. Heading", new h.small({ textColor: "body-secondary" }, " with faded secondary text")]),
		new h.h5(["h5. Heading", new h.small({ textColor: "body-secondary" }, " with faded secondary text")]),
		new h.h6(["h6. Heading", new h.small({ textColor: "body-secondary" }, " with faded secondary text")]),
	];
};

export const leadParagraph = () => {
	return new h.p({ lead: true }, "This is a lead paragraph. It stands out from regular paragraphs.");
};

export const bodyText = () => {
	return [
		new h.p(["You can use the mark tag to ", new h.mark("highlight"), " text."]),
		new h.p(new h.del("This line of text is meant to be treated as deleted text.")),
		new h.p(new h.s("This line of text is meant to be treated as no longer accurate.")),
		new h.p(new h.ins("This line of text is meant to be treated as an addition to the document.")),
		new h.p(new h.u("This line of text will render as underlined.")),
		new h.p(new h.small("This line of text is meant to be treated as fine print.")),
		new h.p(new h.strong("This line rendered as bold text.")),
		new h.p(new h.em("This line rendered as italicized text.")),
	];
};

export const textColor = () => {
	const data = [
		{ textColor: "primary" },
		{ textColor: "primary-emphasis" },
		{ textColor: "secondary" },
		{ textColor: "secondary-emphasis" },
		{ textColor: "success" },
		{ textColor: "success-emphasis" },
		{ textColor: "danger" },
		{ textColor: "danger-emphasis" },
		{ textColor: "warning", bgColor: "dark" },
		{ textColor: "warning-emphasis" },
		{ textColor: "info", bgColor: "dark" },
		{ textColor: "info-emphasis" },
		{ textColor: "light", bgColor: "dark" },
		{ textColor: "light-emphasis" },
		{ textColor: "dark" },
		{ textColor: "dark-emphasis" },
		{ textColor: "body" },
		{ textColor: "body-emphasis" },
		{ textColor: "body-secondary" },
		{ textColor: "body-tertiary" },
		{ textColor: "black" },
		{ textColor: "white", bgColor: "dark" },
		{ textColor: "black", textOpacity: 50 },
		{ textColor: "white", textOpacity: 50, bgColor: "dark" },
	];
	return data.map((i) => {
		return new h.p(
			{
				bgColor: i.bgColor,
				textColor: i.textColor,
				textOpacity: i.textOpacity,
			},
			[`.text-${i.textColor}`, i.textOpacity ? `.text-opacity-${i.textOpacity}` : ""]
		);
	});
};
