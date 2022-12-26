declare let base5: 0 | 1 | 2 | 3 | 4 | 5;
declare let baseColumn: "auto" | typeof base5;
declare let baseViewPort: "sm" | "md" | "lg" | "xl" | "xxl";
declare let spacer: typeof baseColumn | `${typeof baseViewPort}-${typeof baseColumn}`;
export { spacer };
