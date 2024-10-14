(() => {
    const newSpeedArray = [2.5, 3, 4];

    new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE && node.matches('div.bpx-player-ctrl-btn.bpx-player-ctrl-playbackrate')) {
                    // 复制更多倍速选择
                    const ul = node.querySelector('ul.bpx-player-ctrl-playbackrate-menu'),
                        li = ul.firstElementChild;
                    newSpeedArray.reverse().forEach(speed => {
                        const newLi = li.cloneNode(false);
                        newLi.dataset.value = speed
                        newLi.innerText = `${speed}x`;
                        li.before(newLi);
                    });
                }
            });
        })
    }).observe(document.body, { childList: true, subtree: true });
})();
