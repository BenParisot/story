$(document).ready(function() {
  $('#blanks form').submit(function() {
    $('.person1').append("blah");
    $('.person2').append("blah");
    $('.animal').append("blah");
    $('.exclamation').append();
    $('.verb').append();
    $('.noun').append();

    $('#story').show();

    event.preventDefault();
  });
});
