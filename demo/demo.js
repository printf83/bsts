import { core, b, h, t } from "@printf83/bsts";
import { containerCol, containerRow } from "./container.js";
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

const main = [
	new h.div({ container: true, display: "flex", flex: "column", gap: 5 }, [
		...containerCol(1, "Navbars", navbar()),
		...containerRow(1, "Buttons", button()),
		...containerRow(2, "Disabled", buttonDisabled()),
		...containerRow(2, "Outline", buttonOutline()),
		...containerRow(2, "Sizing", buttonSizing()),
		...containerCol(2, "Block", buttonBlock()),
		...containerRow(2, "Button group", buttonGroup()),
		...containerRow(2, "Checkbox", buttonCheckbox()),
		...containerRow(2, "Radio", buttonRadio()),
		...containerRow(2, "Toolbar", buttonToolbar()),
		...containerRow(2, "Vertical", buttonVertical()),
		...containerRow(2, "Dropdown", buttonDropdown()),
		...containerRow(2, "Split", buttonSplit()),
		...containerCol(1, "Typography", typography()),
		...containerCol(2, "With secondary text", typographySecondary()),
		...containerCol(2, "Lead paragraph", leadParagraph()),
		...containerCol(2, "Body text", bodyText()),
		...containerCol(2, "Text color", textColor()),
		...containerCol(1, "Blockquote", blockquote()),
		...containerCol(2, "", blockquoteCenter()),
		...containerCol(2, "", blockquoteEnd()),
		...containerCol(1, "Table", table()),
		...containerCol(1, "Form", form()),
		...containerCol(2, "Select", select()),
		...containerCol(2, "Textarea", textarea()),
		...containerCol(2, "File input", fileInput()),
		...containerCol(2, "Radio", formRadio()),
		...containerCol(2, "Checkbox", formCheckbox()),
		...containerCol(2, "Switch", formSwitch()),
		...containerCol(2, "Range", formRange()),
		...containerRow(2, "Button", formButton()),
		...containerCol(2, "Disabled", formDisabled()),
		...containerCol(2, "Validation", formValidation()),
		...containerCol(2, "Weight", formWeight()),
		...containerCol(2, "Input addon", formInputAddon()),
		...containerCol(2, "Floating label", formFloatingLabel()),
		...containerCol(1, "Nav Tabs", navTabs()),
		...containerCol(2, "Nav Pills", navPills()),
		...containerCol(2, "Breadcrumb", breadcrumb()),
		...containerCol(2, "Pagination", pagination()),
	]),
];

core.documentReady(() => {
	const body = document.getElementById("main");
	if (!body) return;

	core.replaceChild(body, main);
});
