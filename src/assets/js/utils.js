export function isWebp() {
  return new Promise((res) => {
    const webP = new Image();
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    webP.onload = () => {
      res(webP.height === 2);
    };
    webP.onerror = () => {
      res(webP.height === 2);
    };
  });
}

export function isMobile() {
  return navigator.userAgent.indexOf('Mobile') > 0;
}
