document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello There!');
});

function changeStack(stack) {
  let stackFile = getStackHtml(stack);

  $("#container-stack").fadeOut("slow", function(){
    $("#container-stack").load(stackFile, function(){
      $("#container-stack").fadeIn("slow");
    });
  }); 

  
  return false;
};

function getStackHtml(stack) {
  let stackHtmlName = stack.toLowerCase();
  stackHtmlName = stackHtmlName.replace(/ /g, "_")

  let stackFile = "_" + stackHtmlName + ".html"

  return stackFile;
}

$(".stack-option").click(function() {
  let stack = $(this).text();
  changeStack(stack);
});

$("#container-stack").load("_ruby_on_rails.html");