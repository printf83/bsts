export interface bsClassFormatter {
	shared?: boolean;
	value?: (string | number | boolean)[];

	format?: string;
	formatValue?: string;
	formatTrue?: string;
	formatFalse?: string;
}
