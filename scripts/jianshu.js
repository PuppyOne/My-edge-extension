(() => {
    new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE && node.firstChild?.firstChild?.matches('div._23ISFX-mask')) {
                    node.remove();
                    document.body.style = null;
                    console.log('removed');
                }
            });
        })
    }).observe(document.body, { childList: true });
})()