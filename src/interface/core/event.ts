export interface event {
	afterprint?: EventListener;
	beforeprint?: EventListener;
	beforeunload?: EventListener;
	errorscript?: EventListener;
	hashchange?: EventListener;
	load?: EventListener;
	message?: EventListener;
	offline?: EventListener;
	online?: EventListener;
	pagehide?: EventListener;
	pageshow?: EventListener;
	popstate?: EventListener;
	resize?: EventListener;
	storage?: EventListener;
	unload?: EventListener;

	blur?: EventListener;
	change?: EventListener;
	contextmenu?: EventListener;
	focus?: EventListener;
	input?: EventListener;
	invalid?: EventListener;
	reset?: EventListener;
	search?: EventListener;
	select?: EventListener;
	submit?: EventListener;

	keydown?: EventListener;
	keypress?: EventListener;
	keyup?: EventListener;

	click?: EventListener;
	dblclick?: EventListener;
	mousedown?: EventListener;
	mousemove?: EventListener;
	mouseout?: EventListener;
	mouseover?: EventListener;
	mouseup?: EventListener;
	mousewheel?: EventListener;
	wheel?: EventListener;

	drag?: EventListener;
	dragend?: EventListener;
	dragenter?: EventListener;
	dragleave?: EventListener;
	dragover?: EventListener;
	dragstart?: EventListener;
	drop?: EventListener;
	scroll?: EventListener;

	copy?: EventListener;
	cut?: EventListener;
	paste?: EventListener;

	abort?: EventListener;
	canplay?: EventListener;
	canplaythrough?: EventListener;
	cuechange?: EventListener;
	durationchange?: EventListener;
	emptied?: EventListener;
	ended?: EventListener;
	error?: EventListener;
	loadeddata?: EventListener;
	loadedmetadata?: EventListener;
	loadstart?: EventListener;
	pause?: EventListener;
	play?: EventListener;
	playing?: EventListener;
	progress?: EventListener;
	ratechange?: EventListener;
	seeked?: EventListener;
	seeking?: EventListener;
	stalled?: EventListener;
	suspend?: EventListener;
	timeupdate?: EventListener;
	volumechange?: EventListener;
	waiting?: EventListener;

	toggle?: EventListener;

	[key: string]: EventListener | undefined;
}
