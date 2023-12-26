/*
Sets the cursor to be a pointer when hovering over SVG icons 
inside links and buttons. This allows users to distinguish that 
the SVG is clickable.
*/
export const svgInLinkAndButton = `
/* 
src/core/css/svgInLinkAndButton.ts 
---------------------------------- */

a span.bs-ico-bi i,
a span.bs-ico-fa i,
button span.bs-ico-bi i,
button span.bs-ico-fa i{
    cursor: pointer;
}
`;
