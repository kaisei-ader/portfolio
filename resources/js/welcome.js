import Typed from "typed.js/src/typed";

new Typed('.typed', {
  strings: ["Welcome to My Portfolio.", "Let's scroll down."],
  typeSpeed: 10,
  startDelay: 2700,
  backspeed: 20,
  loop: false,
  showCursor: false,
  backDelay: 500
});

var sheader = $("header"),
    animationClass = "is-animation";

$(window).scroll(function () {
  var value = $(this).scrollTop();
  if (value > 100) {
    sheader.addClass(animationClass);
  } else {
    sheader.removeClass(animationClass);
  }
});

$(".scroll").css({
  opacity: '0'
});
setTimeout(function () {
  $(".scroll").stop().animate({
    opacity: '1'
  });
}, 6500);

$(".down").click(function () {
  var speed = 700;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  jQuery('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
});

$(window).scroll(function () {
  $(".about_content,.card,.skill_card_list,.title_all").each(function () {
    var fade = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowheight = $(window).height();

    if (scroll > fade - windowheight + windowheight / 5) {
      $(this).addClass("fade_on");
    } else {
      $(this).removeClass("fade_on");
    }
  });
});