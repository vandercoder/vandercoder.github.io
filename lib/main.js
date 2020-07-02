'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello There!');
});

function changeStack(stack) {
  var stackFile = getStackHtml(stack);

  $("#container-stack").fadeOut("slow", function () {
    $("#container-stack").load(stackFile, function () {
      $("#container-stack").fadeIn("slow");
    });
  });

  return false;
};

function getStackHtml(stack) {
  var stackHtmlName = stack.toLowerCase();
  stackHtmlName = stackHtmlName.replace(/ /g, "_");

  var stackFile = "_" + stackHtmlName + ".html";

  return stackFile;
}

$(".stack-option").click(function () {
  var stack = $(this).text();
  changeStack(stack);
});

$("#container-stack").load("_ruby_on_rails.html");