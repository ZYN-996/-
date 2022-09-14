export const isElementNotInViewport = function (el) {
    if (el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top >=
            (window.innerHeight || document.documentElement.clientHeight) ||
            rect.bottom <= 0
        );
    }
};
