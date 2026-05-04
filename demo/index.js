import { core, b, h, t, c } from "@printf83/bsts";
import { title, container } from "./container.js";
import { navbar } from "./component/navbar.js";
import {
	button,
	buttonDisabled,
	buttonOutline,
	buttonSizing,
	buttonBlock,
	buttonGroup,
	buttonCheckbox,
	buttonRadio,
	buttonToolbar,
	buttonVertical,
	buttonDropdown,
	buttonSplit,
} from "./component/button.js";
import { typography, typographySecondary, leadParagraph, bodyText, textColor } from "./component/typography.js";
import { blockquote, blockquoteCenter, blockquoteEnd } from "./component/blockquote.js";
import { table } from "./component/table.js";
import {
	form,
	select,
	textarea,
	fileInput,
	formRadio,
	formCheckbox,
	formSwitch,
	formRange,
	formButton,
	formDisabled,
	formValidation,
	formWeight,
	formInputAddon,
	formFloatingLabel,
} from "./component/form.js";
import { navTabs, navPills, breadcrumb, pagination } from "./component/nav.js";
import { alert, callout, badge, badgePill } from "./component/indicators.js";
import { progress, progressColor, progressMultibar, progressStriped, progressAnimated } from "./component/progress.js";
import { list, listWithBadges, listColor, listActive, listCustom } from "./component/list.js";
import { card, cardOutline, cardExample1, cardExample2, accordion } from "./component/card.js";
import { modal, offcanvas, popover, tooltip, toast } from "./component/dialog.js";

const main = [
	new h.div({ container: true, display: "flex", flex: "column", gap: 5 }, [
		title("Navbars"),
		container("column", "", navbar()),
		title("Buttons"),
		container("row", "", button()),
		container("row", "Disabled", buttonDisabled()),
		container("row", "Outline", buttonOutline()),
		container("row", "Sizing", buttonSizing()),
		container("column", "Block", buttonBlock()),
		container("row", "Button group", buttonGroup()),
		container("row", "Checkbox", buttonCheckbox()),
		container("row", "Radio", buttonRadio()),
		container("row", "Toolbar", buttonToolbar()),
		container("row", "Vertical", buttonVertical()),
		container("row", "Dropdown", buttonDropdown()),
		container("row", "Split", buttonSplit()),
		title("Typography"),
		container("column", "", typography()),
		container("column", "With secondary text", typographySecondary()),
		container("column", "Lead paragraph", leadParagraph()),
		container("column", "Body text", bodyText()),
		container("column", "Text color", textColor()),
		title("Blockquote"),
		container("column", "", blockquote()),
		container("column", "", blockquoteCenter()),
		container("column", "", blockquoteEnd()),
		title("Table"),
		container("column", "", table()),
		title("Form"),
		container("column", "", form()),
		container("column", "Select", select()),
		container("column", "Textarea", textarea()),
		container("column", "File input", fileInput()),
		container("column", "Radio", formRadio()),
		container("column", "Checkbox", formCheckbox()),
		container("column", "Switch", formSwitch()),
		container("column", "Range", formRange()),
		container("row", "Button", formButton()),
		container("column", "Disabled", formDisabled()),
		container("column", "Validation", formValidation()),
		container("column", "Weight", formWeight()),
		container("column", "Input addon", formInputAddon()),
		container("column", "Floating label", formFloatingLabel()),
		title("Nav"),
		container("column", "Tabs", navTabs()),
		container("column", "Pills", navPills()),
		container("column", "Breadcrumb", breadcrumb()),
		container("column", "Pagination", pagination()),
		title("Indicators"),
		container("column", "Alert", alert()),
		container("column", "Callout", callout()),
		container("row", "Badge", badge()),
		container("row", "Badge pill", badgePill()),
		title("Progress"),
		container("column", "Basic", progress()),
		container("column", "Color", progressColor()),
		container("column", "Multibar", progressMultibar()),
		container("column", "Striped", progressStriped()),
		container("column", "Animated", progressAnimated()),
		title("List groups"),
		container("column", "", list()),
		container("column", "With badge", listWithBadges()),
		container("column", "Color", listColor()),
		container("column", "Active action", listActive()),
		container("column", "Custom content", listCustom()),
		title("Containers"),
		container("column", "Card", card()),
		container("column", "Card outline", cardOutline()),
		container("column", "Kitchen sink", cardExample1()),
		container("column", "", cardExample2()),
		title("Accordion"),
		container("column", "", accordion()),
		title("Dialog"),
		container("row", "Modal", modal()),
		container("row", "Offcanvas", offcanvas()),
		container("row", "Popover", popover()),
		container("row", "Tooltip", tooltip()),
		container("row", "Toast", toast()),
	]),
];

core.documentReady(() => {
	const body = document.getElementById("main");
	if (!body) return;

	core.replaceChild(body, main);
});
