"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropdownMenuStyle = void 0;
exports.dropdownMenuStyle = `
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
