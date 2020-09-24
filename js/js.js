$(document).ready(function () {
  $(".widget-iframe").addClass("chat_in");
  $(".widget-wrapper").addClass("widget-right");

  $(".widget-bubble").click(function () {
    $(".widget-iframe").toggleClass("chat_out").toggleClass("chat_in");
  });

  $(".widget-fab-main").click(function () {
    $(".widget-bubble").toggleClass("widget-expanded");
  });
  $(".widget-fab-pulse").click(function () {
    $(".widget-exp-pulse").toggleClass("widget-expanded");
  });
  $(".widget-fab-hover").click(function () {
    $(".widget-exp-hover").toggleClass("widget-expanded");
  });

  $(".widget-side-switcher-left").click(function () {
    $(".widget-wrapper").removeClass("widget-right").addClass("widget-left");
  });
  $(".widget-side-switcher-right").click(function () {
    $(".widget-wrapper").removeClass("widget-left").addClass("widget-right");
  });
});
