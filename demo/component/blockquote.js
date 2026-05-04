import { core, b, h } from "@printf83/bsts";

export const blockquote = () => {
	return new h.figure([
		new b.blockquote.container(new h.p("A well-known quote, contained in a blockquote element.")),
		new b.blockquote.caption(["Someone famous in ", new h.cite({ title: "Source Title" }, "Source Title")]),
	]);
};

export const blockquoteCenter = () => {
	return new h.figure({ textAlign: "center" }, [
		new b.blockquote.container(new h.p("A well-known quote, contained in a blockquote element.")),
		new b.blockquote.caption(["Someone famous in ", new h.cite({ title: "Source Title" }, "Source Title")]),
	]);
};

export const blockquoteEnd = () => {
	return new h.figure({ textAlign: "end" }, [
		new b.blockquote.container(new h.p("A well-known quote, contained in a blockquote element.")),
		new b.blockquote.caption(["Someone famous in ", new h.cite({ title: "Source Title" }, "Source Title")]),
	]);
};
