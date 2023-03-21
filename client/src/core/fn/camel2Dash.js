export const camel2Dash = (value) => {
    return value.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
};
