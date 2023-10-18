export interface global {
	id?: string;
	class?: string | (string | undefined)[];
	accesskey?: string;
	contenteditable?: "true";
	dir?: string;
	draggable?: string;
	lang?: string;
	spellcheck?: string;
	tabindex?: string | number;
	title?: string;
	translate?: string;

	hidden?: boolean;
	itemscope?: boolean;
	nomodule?: boolean;
	playsinline?: boolean;
	truespeed?: boolean;

	attrWidth?: string | number;
	attrHeight?: string | number;
	role?: string;
}
