/*
Documentation for the main CSS rules exported from main.ts.

This exports some basic CSS rules that apply hover styling and cursor pointers to links and dropdowns throughout the application. The rules target common Bootstrap classes like nav-link and data-bs-toggle.

Serves as a centralized place to define shared/global CSS rules. Imported by other parts of the codebase that need these rules applied.
*/
export const main = `
/* 
src/core/css/main.ts 
---------------------- */

a:hover > *,
a.nav-link:hover,
[data-bs-toggle="collapse"]:hover,
.dropdown-item {
    cursor: pointer;
}

.bs-ico-bi i{
    display: inline-block !important;
}
`;
