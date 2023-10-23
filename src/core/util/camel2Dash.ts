export const camel2Dash = (value?: string): string => {
	if (value) {
		return value.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
	} else {
		return "";
	}
};
