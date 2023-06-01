export const tableResponsive = `
@media (max-width: 768px) {
    table.table.small[data-bs-responsive-title="bs-title-name"] {
        font-size: var(--bs-body-font-size);
    }

    table.table[data-bs-responsive-title="bs-title-name"] thead {
        display: none;
    }

    table.table[data-bs-responsive-title="bs-title-name"] tbody.table-group-divider{
        border:none;
    }
    
    table.table[data-bs-responsive-title="bs-title-name"] tbody tr {
        margin: 0;
        padding:1rem 0;
        display: block;

        border-top-width: var(--bs-border-width);
        border-top-color: var(--bs-table-border-color);
    }

    table.table[data-bs-responsive-title="bs-title-name"] tbody tr:first-of-type {
        border-top-width: var(--bs-border-width);
        border-top-color: var(--bs-table-border-color);
    }
    table.table[data-bs-responsive-title="bs-title-name"] tbody tr:last-of-type {
        border-bottom-width: var(--bs-border-width);
        border-bottom-color: var(--bs-table-border-color);    
    }

    table.table[data-bs-responsive-title="bs-title-name"] tbody tr:nth-of-type(2n-1) {
        /* background-color: rgba(var(--bs-body-color-rgb), 0.05); */
        background-color: var(--bs-table-striped-bg);
    }   

    table.table[data-bs-responsive-title="bs-title-name"] tbody td::before{
        content: attr(data-bs-title-name) ": ";
        color:var(--bs-emphasis-color);
        font-weight: 500;
        text-transform: capitalize;
        text-align: right;
        font-size: 0.75em;
        line-height: calc(var(--bs-body-line-height)*1.35);
    }

    table.table[data-bs-responsive-title="bs-title-name"] tbody td,
    table.table[data-bs-responsive-title="bs-title-name"] tbody th {
        border: none;
        padding: 0.125rem 1.5rem;
        display: grid;
        gap: 0.5rem;
    }

    table.table[data-bs-responsive-title="bs-title-name"] tbody td {
        grid-template-columns: var(--bs-responsive-columns);
    }
}
@media (max-width: 576px) {
    

    table.table[data-bs-responsive-title="bs-title-name"] tbody td::before{
        content: attr(data-bs-title-name);
        line-height: 0.25;
        text-align: left;
    }

    table.table[data-bs-responsive-title="bs-title-name"] tbody td:not(:last-of-type) {
        padding-bottom: 1.25rem;
    }

    table.table[data-bs-responsive-title="bs-title-name"] tbody td:first-of-type {
        padding-top: 0.75rem;
    }

    table.table[data-bs-responsive-title="bs-title-name"] tbody td {
        grid-template-columns: var(--bs-responsive-columns-xs);
    }
}
`;
