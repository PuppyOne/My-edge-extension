(() => {
    new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE && node.matches('div.tbdx-reactx-watermark-text, div.tbdx-reactx-copyright'))
                    node.remove();
            });
        })
    }).observe(document.body, { childList: true, subtree: true });
    // const startInterval = () => {
    //     let intervalId = setInterval(() => {
    //         try {
    //             document.querySelector('div.tbdx-reactx-watermark-text').remove();
    //             document.querySelector('div.tbdx-reactx-copyright-value').remove();
    //             clearTimeout(timeoutId);
    //             console.log('%csuccess', "color: green");
    //             clearInterval(intervalId);
    //         } catch (e) {
    //             console.log('%cretrying', 'color: blue');
    //         }
    //     }, 100);
    //     let timeoutId = setTimeout(() => {
    //         clearInterval(intervalId);
    //         console.log('%ctimeout', "color: red");
    //     }, 20000);
    // };
    // document.addEventListener('click', (event) => {
    //     if (event.target.matches('div.ChapterListRender--courseListBox--3mGkacv.ChapterListRender--show--2qDUYbi *')) {
    //         startInterval();
    //     }
    // });
    // startInterval();
})();
