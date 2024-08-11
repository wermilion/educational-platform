export const disableScroll = () => {
  const body = document.querySelector("body");
  if (body && body.style.position !== "fixed") {
    const heightScroll = window.pageYOffset;
    body.style.cssText = `top: ${-heightScroll}px; position: fixed; overflow-y: scroll;`;
  }
};
