var highlightNav = (function() {
    
  function init() {
    var pageHead = document.querySelector('.c-page-head');
    var pageHeadHeight = pageHead.offsetHeight;
    var banner = document.querySelector('.c-banner');
    var bannerPos = banner.offsetTop;
    
    function highlightNav() {
      if(window.scrollY >= (bannerPos - pageHeadHeight)) {
        pageHead.classList.add('c-page-head--is-active');
      } else {
        pageHead.classList.remove('c-page-head--is-active');
      }
    }
    
    // NOTES: 
    // - Really bad! should be throttling this, ran out of time.
    // - Should run on resize too.
    window.addEventListener('scroll', highlightNav);
  }
  
  return {
    init: init
  }
})();

highlightNav.init();