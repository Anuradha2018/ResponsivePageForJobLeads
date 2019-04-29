function calcMargin() {
  let sizeScreen = $(window).outerWidth();
  if (sizeScreen > 1119) {
    let marginContainer = $(document).outerWidth() - $(".main").outerWidth();
    let marginRightPopup = marginContainer / 2;
    $(".popup").css({ top: 0, right: marginRightPopup, position: "absolute" });
  }
}
$(".popup__close").click(function() {
  $(".popup").hide();
  $(".box__content--footer").fadeIn(100);
});

$(".box__content--footer a").click(function() {
  $(".popup").removeAttr("style");
  calcMargin();
  let sizeScreen = $(window).outerWidth();
  if (sizeScreen > 1119) {
    $(".box__content--footer").fadeOut();
    $(".popup").fadeIn();
  } else {
    $(".popup").css({ position: "absolute", "margin-bottom": 0 });
    $(".box__content--footer").hide();
    $(".popup").fadeIn();
  }
});
