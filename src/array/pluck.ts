export const pluck = (elements:any[], field:any) => {
    return elements.map((element) => { element[field] });
}