(() => {
  let commentsLoaded = false;

  function loadComments(){
    // If comments are already loaded, or we don't require them, return.
    if (commentsLoaded) return;
    if (!document.querySelector('.comments.container')) return;
    commentsLoaded = true;

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.10";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  function analytics(){
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-2547771-24', 'auto');
    ga('send', 'pageview');
  }

  addEventListener('scroll', () => {
    // defer comments loading until first scroll.
    loadComments();
  });
  addEventListener('load', () => {
    // defer analytics until the page has loaded.
    analytics();
  });
})();
