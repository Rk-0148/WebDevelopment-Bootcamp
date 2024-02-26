$("button").css("border", "solid 2px black"); // by default selects all the buttons needs to specify extra details to select individual buttons
console.log($("h1").css("font-size"));

$("h1").toggleClass("big-title");

$("h1").css("color", "black");

$("h1").click(function () {
  $("h1").css("color", "red");
});

$("button").click(function () {
  $("p").css("color", "darkblue");
  $("p").css("fontSize", "30px");
});

$(document).keypress(function (event) {
  console.log(event.key);
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "pink");
});

$("button").on("click", function () {
  $("h1").slideToggle();
});
