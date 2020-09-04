(function ($) {
  "use strict";

  $(window).load(function () {
    $(".dom-loader").fadeOut("slow", function () {
      $(".dom-preloader").delay(300).fadeOut("slow");
    });
  });

  var toggleButton = $(".dom-menu-toggle"),
    nav = $(".dom-main-navigation");

  toggleButton.on("click", function (e) {
    e.preventDefault();
    toggleButton.toggleClass("is-clicked");
    nav.slideToggle();
  });

  nav.find("li a").on("click", function () {
    toggleButton.toggleClass("is-clicked");
    nav.fadeOut();
  });

  var sections = $("section"),
    navigation_links = $(".dom-route");

  sections.waypoint({
    handler: function (direction) {
      var active_section;

      active_section = $("section#" + this.element.id);

      if (direction === "up") active_section = active_section.prev();

      var active_link = $(
        '.dom-route[href="#' + active_section.attr("id") + '"]'
      );

      navigation_links.parent().removeClass("current");
      active_link.parent().addClass("current");
    },

    offset: "25%",
  });

  $(".dom-route").on("click", function (e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        800,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });

  var pxShow = 300;
  var fadeInTime = 400;
  var fadeOutTime = 400;

  jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() >= pxShow) {
      jQuery(".dom-go-top").fadeIn(fadeInTime);
    } else {
      jQuery(".dom-go-top").fadeOut(fadeOutTime);
    }
  });
})(jQuery);
