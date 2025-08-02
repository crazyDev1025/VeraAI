const injectStyles = () => {
    const e = document.querySelector("style[fs-components-cloak]");
    e?.remove();
    const n = document.createElement("style");
    n.setAttribute("fs-components-cloak", "cloak"),
      (n.textContent =
        '\n    [fs-marquee-instance],[fs-cnumbercount-instance]{ opacity: 0; }\n    [fs-consent-element="internal-component"],[fs-consent-element="banner"],[fs-consent-element="fixed-preferences"],[fs-consent-element="preferences"],[fs-consent-element="interaction"]{display:none}\n  '),
      document.head.appendChild(n);
  },
  initFsComponents = async (e) => {
    injectStyles();
    const n = window?.finsweetComponentsConfigLoading,
      t = document?.querySelector("script[fs-components-src]");
    if (void 0 !== import.meta && !t && !n) {
      document?.querySelector(
        'script[finsweet="components"][async][type="module"]'
      );
      const n = await import(import.meta.url),
        t = Object.keys(n) || [];
      return new Promise((n, o) => {
        const s = document.createElement("script"),
          c = `${e}?v=${new Date().getTime()}`;
        (s.src = c),
          (s.type = "module"),
          (s.async = !0),
          s.setAttribute("fs-components-src", import.meta.url),
          s.setAttribute("fs-components-installed", t?.join(",")),
          (s.onload = () => n()),
          (s.onerror = () => o(new Error("Failed to load script"))),
          document.head.appendChild(s);
      });
    }
  };
initFsComponents(
  "https://cdn.jsdelivr.net/npm/@finsweet/fs-components@2/fs-components.js"
);
export const consent = { expires: "", source: "/" };
