$(document).ready(function () {
  $(".widget-iframe").addClass("chat_in");

  $(".widget-bubble").click(function () {
    $(".widget-iframe").toggleClass("chat_out").toggleClass("chat_in");
  });

  $(".widget-fab").click(function () {
    $(".widget-exp").toggleClass("widget-expanded");
  });
});
