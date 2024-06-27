export const disableScroll = () => {
    const body = document.querySelector('body');
    if (body && body.style.position !== "fixed") {
        const heightScroll = window.pageYOffset;
        const hasScrollbar = () => document.body.offsetHeight > window.innerHeight;

        if (hasScrollbar()) {
            body.style.cssText = `top: ${-heightScroll}px; position: fixed; overflow-y: scroll;`;
        } else {
            body.style.cssText = `top: ${-heightScroll}px; position: fixed;`;
        }
    }
}
