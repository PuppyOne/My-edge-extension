(() => {
    const x = document.querySelector('input#map-goto-x[type="text"]'),
        z = document.querySelector('input#map-goto-z[type="text"]'),
        mapCanvas = document.querySelector("canvas#map-canvas");
    mapCanvas?.addEventListener("contextmenu", () => {
        if (x.value && z.value)
            navigator.clipboard.writeText(`/tp ${x.value} ~ ${z.value}`);
    });
})();
