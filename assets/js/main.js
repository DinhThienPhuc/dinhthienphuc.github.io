(function ($) {
  "use strict";

  $(window).load(function () {
    $("#loader").fadeOut("slow", function () {
      $("#preloader").delay(300).fadeOut("slow");
    });
  });

  setTimeout(function () {
    $("#intro h1").fitText(1, { minFontSize: "42px", maxFontSize: "84px" });
  }, 100);

  var toggleButton = $(".menu-toggle"),
    nav = $(".main-navigation");

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
    navigation_links = $("#main-nav-wrap li a");

  sections.waypoint({
    handler: function (direction) {
      var active_section;

      active_section = $("section#" + this.element.id);

      if (direction === "up") active_section = active_section.prev();

      var active_link = $(
        '#main-nav-wrap a[href="#' + active_section.attr("id") + '"]'
      );

      navigation_links.parent().removeClass("current");
      active_link.parent().addClass("current");
    },

    offset: "25%",
  });

  $(".smoothscroll").on("click", function (e) {
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
    if (!$("#header-search").hasClass("is-visible")) {
      if (jQuery(window).scrollTop() >= pxShow) {
        jQuery("#go-top").fadeIn(fadeInTime);
      } else {
        jQuery("#go-top").fadeOut(fadeOutTime);
      }
    }
  });
})(jQuery);
