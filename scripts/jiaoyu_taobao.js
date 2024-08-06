(() => {
    new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE && node.matches('div.tbdx-reactx-watermark-text, div.tbdx-reactx-copyright'))
                    node.remove();
            });
        })
    }).observe(document.body, { childList: true, subtree: true });
})();
