export const enableScroll = () => {
    const body = document.querySelector('body');
    const heightTop = body && body.style.top;

    if (heightTop) {
        body.style.cssText = "top: auto; position: static; overflow-y: auto;";
        window.scrollTo({
            top: -parseInt(heightTop, 10),
            // @ts-ignore
            behavior: "instant"
        });
    }
}
