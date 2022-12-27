
const decorder = {
	userSelect: { format: "user-select-$1" },
    pointerEvent: { format: "pe-$1" },
    position: { format: "position-$1"},
	overflow: { format: "overflow-$1" },

	textAlign: { format: "text-$1" },
	verticalAlign: { format: "align-$1" },

	opacity: { format: "opacity-$1" },
	bgOpacity: { format: "bg-opacity-$1"},
	textOpacity: { format: "text-opacity-$1"},

	btnColor: { format: "btn-$1"},
	btnOutlineColor: { format: "btn-outline-$1"},
	alertColor: { format: "alert-$1"},

	textBgColor: { format: "text-bg-$1"},
	textColor: { format: "text-$1"},
	linkColor: { format: "link-$1"},
	bgColor: { format: "bg-$1"},

	textTransform: { format: "text-$1"},
	textDecoration: { format: "text-decoration-$1"},
	lineHeight: { format: "lh-$1"},

	fontSize: { format: "fs-$1"},
	fontWeight: { format: "fw-$1"},

	top: { format: "top-$1"},
	bottom: { format: "bottom-$1"},
	start: { format: "start-$1"},
	end: { format: "end-$1"},
	tMiddle: { format: "translate-middle-$1", formatTrue: "translate-middle"},

    height: { format: "h-$1"},
	width: { format: "w-$1"},
	maxHeight: { format: "mh-$1"},
	maxWidth: { format: "mw-$1"},
	minViewHeight: { format: "min-vh-$1"},
	minViewWidth: { format: "min-vw-$1"},
	viewHeight: { format: "vh-$1"},
    viewWeight: { format: "vw-$1"},
    
    placeholderAnimation: { format: "placeholder-$1"},
    placeholderWeight: { format: "placeholder-$1", formatValue: "placeholder $1"},
    
    shadow: { format: "shadow-$1", formatTrue: "shadow", formatFalse: "shadow-none" },

	border: { format: "border-$1", formatTrue: "border", formatFalse: "border-0" },
	borderNone: { format: "border border-$1-0", formatTrue: "border-0" },
	borderColor: { format: "border-$1", formatValue: "border" },
	borderOpacity: { format: "border-opacity-$1", formatValue: "border" },
	borderWidth: { format: "border-$1", formatValue: "border" },

	rounded: { format: "rounded-$1", formatTrue: "rounded", formatFalse: "rounded-0" },
	roundedNone: { format: "rounded-$1-0", formatTrue: "rounded-0", formatFalse: "rounded", formatValue: "rounded" },
	roundedSize: { format: "rounded-$1", formatValue: "rounded" },

	padding: { format: "p-$1"},
	paddingX: { format: "px-$1"},
	paddingY: { format: "py-$1"},
	paddingTop: { format: "pt-$1"},
	paddingBottom: { format: "pb-$1"},
	paddingStart: { format: "ps-$1"},
	paddingEnd: { format: "pe-$1"},

	margin: { format: "m-$1"},
	marginX: { format: "mx-$1"},
	marginY: { format: "my-$1"},
	marginTop: { format: "mt-$1"},
	marginBottom: { format: "mb-$1"},
	marginStart: { format: "ms-$1"},
	marginEnd: { format: "me-$1"},

	gap: { format: "gap-$1"},
	gutter: { format: "g-$1"},
	gutterX: { format: "gx-$1"},
	gutterY: { format: "gy-$1"},

	display: { format: "d-$1"},
	print: { format: "d-print-$1"},
	container: {format: "container-$1",formatTrue: "container"},

	flex: {format: "flex-$1"},
	float: {format: "float-$1"},
	order: {format: "order-$1"},
	offset: {format: "offset-$1"},
	alignContent: {format: "align-content-$1"},
	justifyContent: {format: "justify-content-$1"},
	alignItem: {format: "align-items-$1"},
	alignSelf: {format: "align-self-$1"},
	visible: {formatTrue: "visible",formatFalse: "invisible"},
	textWrap: {formatTrue: "text-wrap",formatFalse: "text-nowrap"},
	fontItalic: {formatTrue: "fst-italic",formatFalse: "fst-normal"},
	bgGradient: {formatTrue: "bg-gradient"},
	wordBreak: {formatTrue: "text-break"},
	monospace: { formatTrue: "font-monospace"},
	placeholder: {formatTrue: "placeholder"},
    row: { formatTrue: "row", formatFalse: null},
	col: {format: "col-$1", formatTrue: "col"},
	rowCol: {format: "row-cols-$1"},
}