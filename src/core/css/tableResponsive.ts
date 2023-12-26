let tableResponsiveDB: string | undefined = undefined;
/**
 * Generates responsive CSS for tables to show on small screens.
 *
 * On small screens:
 * - Hides table header.
 * - Converts rows to vertical layout.
 * - Converts cells to grid layout.
 * - Shows cell label before cell content.
 *
 * Customizations:
 * - title: Table title for selector. Default: "bs-title-name".
 * - --bs-responsive-columns: Grid columns for cells. Default: auto-fit.
 * - --bs-responsive-columns-xs: Grid columns for cells on xs screens. Default: 1.
 *
 * Usage:
 * - Add attribute data-bs-responsive-title="myTable" to table.
 * - Add data-myTable="labelText" to cells.
 */
export const tableResponsive = (title?: string) => {
	if (tableResponsiveDB) {
		return tableResponsiveDB;
	} else {
		title ??= "bs-title-name";

		tableResponsiveDB = `
/* 
src/core/css/tableResponsive.ts 
------------------------------- */

@media (max-width: 768px) {
    table.table.small[data-bs-responsive-title="${title}"] {
        font-size: var(--bs-body-font-size);
    }

    table.table[data-bs-responsive-title="${title}"] thead {
        display: none;
    }

    table.table[data-bs-responsive-title="${title}"] tbody.table-group-divider{
        border:none;
    }
    
    table.table[data-bs-responsive-title="${title}"] tbody tr {
        margin: 0;
        padding:1rem 0;
        display: block;

        border-top-width: var(--bs-border-width);
        border-top-color: var(--bs-table-border-color);
    }

    table.table[data-bs-responsive-title="${title}"] tbody tr:first-of-type {
        border-top-width: var(--bs-border-width);
        border-top-color: var(--bs-table-border-color);
    }
    table.table[data-bs-responsive-title="${title}"] tbody tr:last-of-type {
        border-bottom-width: var(--bs-border-width);
        border-bottom-color: var(--bs-table-border-color);    
    }

    table.table[data-bs-responsive-title="${title}"] tbody tr:nth-of-type(2n-1) {
        /* background-color: rgba(var(--bs-body-color-rgb), 0.05); */
        background-color: var(--bs-table-striped-bg);
    }   

    table.table[data-bs-responsive-title="${title}"] tbody td::before{
        content: attr(data-${title}) ": ";
        color:var(--bs-emphasis-color);
        font-weight: 500;
        text-transform: capitalize;
        text-align: right;
        font-size: 0.75em;
        line-height: calc(var(--bs-body-line-height)*1.35);
    }

    table.table[data-bs-responsive-title="${title}"] tbody td,
    table.table[data-bs-responsive-title="${title}"] tbody th {
        border: none;
        padding: 0.125rem 1.5rem;
        display: grid;
        gap: 0.5rem;
        background-color: unset;
    }

    table.table[data-bs-responsive-title="${title}"] tbody td {
        grid-template-columns: var(--bs-responsive-columns);
    }
}
@media (max-width: 576px) {

    table.table[data-bs-responsive-title="${title}"] tbody td::before{
        content: attr(data-${title});
        line-height: 0.25;
        text-align: left;
    }

    table.table[data-bs-responsive-title="${title}"] tbody td:not(:last-of-type) {
        padding-bottom: 1.25rem;
    }

    table.table[data-bs-responsive-title="${title}"] tbody td:first-of-type {
        padding-top: 0.75rem;
    }

    table.table[data-bs-responsive-title="${title}"] tbody td {
        grid-template-columns: var(--bs-responsive-columns-xs);
    }
}
`;

		return tableResponsiveDB;
	}
};
