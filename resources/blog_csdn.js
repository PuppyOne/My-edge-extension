(() => {
    let toolbar = document.querySelector('div.toolbar-container'),
        content = document.querySelector('main div.blog-content-box');
    if (!toolbar || !content)
        return;
    let button = document.createElement('button');
    button.appendChild(document.createTextNode('copy'));
    button.classList.add('md_button');
    button.addEventListener('click', function () {
        content.contentEditable = 'true';
        document.addEventListener('copy', event => event.stopImmediatePropagation(), true);
        let article_content = document.querySelector("#article_content"),
            follow_text = document.querySelector('.follow-text'),
            hide_article_box = document.querySelector('.hide-article-box');
        if (article_content && follow_text && hide_article_box) {
            article_content.removeAttribute("style");
            follow_text.parentElement.remove();
            hide_article_box.remove();
        }
        content.querySelectorAll('img.look-more-preCode.contentImg-no-view').forEach(i => i.click());
        // content.querySelectorAll('div.hljs-button.signin.active').forEach(i => i.style.display = 'none');
        content.querySelectorAll('pre.set-code-show.prettyprint div.hljs-button.signin.active').forEach(i => {
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
        this.innerText = 'succ';
        setTimeout(() => this.remove(), 1000);
    });
    toolbar.appendChild(button);

    new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE && node.matches('div.passport-login-container')) {
                    node.remove();
                    button.innerText = 'rmvd';
                }
            });
        })
    }).observe(document.body, { childList: true, subtree: true });
})();