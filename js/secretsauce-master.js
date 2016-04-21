// Smooth Scolling - All Pages
//https://css-tricks.com/snippets/jquery/smooth-scrolling/
// needs jquery <1.12.0
$(function() {

$("a[href*=#]:not([href=#testimonialSlider])").click(function() {
  if (
    location.pathname.replace(/^\//,") == this.pathname.replace(/^\//,") ||
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
    if (target.length) {
      $("html,body").animate({
        scrollTop: target.offset().top
      }, 400);
      return false;
    }
  }
});

});
