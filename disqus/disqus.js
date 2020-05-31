
(function () {
    window.disqus = {
        showDisqus: function (elementId, urlPart, pageIdentifier) {

            var disqus_config = function () {
                this.page.url = "https://altandenter.github.io/" + urlPart;
                this.page.identifier = pageIdentifier;
            };
            var elem = document.getElementById(elementId);

            let d = document, s = d.createElement('script');
            s.src = 'https://https-altandenter-github-io.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        }
    };
})();