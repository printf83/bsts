export const elemReady = (doc, callback) => {
    if (doc.readyState != "loading") {
        callback();
    }
    else {
        console.error("Cannot detect readyState");
        callback();
    }
};
export const documentReady = (callback) => {
    elemReady(document, () => {
        callback();
    });
};
