function changeStack() {
    // get the contents of the link that was clicked
    var linkText = $(this).text();


    // replace the contents of the div with the link text
    // $('#container-stack').html(linkText);
    $( '#container-stack').replaceWith( "<h2>New heading</h2>" );
    // $( "#container" ).load( "_django.html" );


    // cancel the default action of the link by returning false
    return false;
};

$(".stack-option").click(function() {
  changeStack();
});