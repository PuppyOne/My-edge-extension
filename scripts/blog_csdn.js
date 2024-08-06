(() => {
    let toolbar = document.querySelector('div.toolbar-container'),
        content = document.querySelector('main div.blog-content-box');
    if (!toolbar || !content)
        return;
    document.addEventListener('copy', event => event.stopImmediatePropagation(), true);
    content.querySelectorAll('#content_views pre,#content_views pre code').forEach(element => {
        element.style.webkitUserSelect = 'unset';
        element.style.khtmlUserSelect = 'unset';
        element.style.mozUserSelect = 'unset';
        element.style.msUserSelect = 'unset';
        element.style.userSelect = 'unset';
    });
    let article_content = document.querySelector("#article_content"),
        follow_text = document.querySelector('.follow-text'),
        hide_article_box = document.querySelector('.hide-article-box');
    if (article_content && follow_text?.parentElement && hide_article_box) {
        article_content.removeAttribute("style");
        follow_text.parentElement.remove();
        hide_article_box.remove();
        console.log("expended content");
    }
    content.querySelectorAll('img.look-more-preCode.contentImg-no-view').forEach(i => i.click());
    content.querySelectorAll('div.hljs-button.signin.active').forEach(i => {
        i.dataset.title = 'copy';
        i.addEventListener('click', function () {
            navigator.clipboard.writeText(this.parentElement.innerText);
            this.dataset.title = 'copied';
            this.addEventListener('mouseout', function () {
                this.dataset.title = 'copy';
                this.style.opacity = '0.8';
            }, { once: true });
        });
    });
    new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE && node.matches('div.passport-login-container')) {
                    node.remove();
                    console.log("removed login mask")
                }
            });
        })
    }).observe(document.body, { childList: true, subtree: true });
})();