document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello There!');
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$("navbar-mobile").click(function () {

});


function changeStack(stack) {
  let stackFile = getStackHtml(stack);

  $("#container-stack").fadeOut("slow", function () {
    $("#container-stack").load(stackFile, function () {
      $("#container-stack").fadeIn("slow");
    });
  });

  return false;
};

function getStackHtml(stack) {
  let stackHtmlName = stack.toLowerCase();
  stackHtmlName = stackHtmlName.replace(/ /g, "_");

  let stackFile = "_" + stackHtmlName + ".html";

  return stackFile;
}

$(".stack-option").click(function () {
  let stack = $(this).text();
  $("li a.is-active").removeClass("is-active");
  $(this).addClass('is-active')
  changeStack(stack);
 
});

$("#container-stack").load("_ruby_on_rails.html");


