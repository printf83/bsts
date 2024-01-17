/*
Dropdown menu styling overrides.

Defines CSS classes to customize the Bootstrap dropdown menu component with additional padding, border radius, and spacing between items.

The .dropdown-menu.custom-style-1 class adds extra padding.

The .dropdown-item rules add border radius and bottom margin between items.

The .dropdown-divider rule adds extra margin around dividers.
*/
export const dropdownMenuStyle = `
/* 
src/core/css/dropdownMenuStyle.ts 
--------------------------------- */

.dropdown-menu.custom-style-1{
    padding:calc(var(--bs-dropdown-spacer)*2);
}

.dropdown-menu.custom-style-1 .dropdown-item {
    border-radius: var(--bs-dropdown-border-radius);
}

.dropdown-menu.custom-style-1 .dropdown-item:not(:last-child) {
    margin-bottom: calc(var(--bs-dropdown-spacer)*2);
}

.dropdown-menu.custom-style-1 .dropdown-divider {
    margin: calc(var(--bs-dropdown-spacer)*2) calc(var(--bs-dropdown-spacer)*-2);
}

`;
