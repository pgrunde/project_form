$(document).ready(function() {

  $('#contact_info_selector').click(function() {
    $('#stage').empty().append("<p>Contact Info</p>");
  });

  $('#text_selector').click(function() {
    $('#stage').empty().append("<p>Text</p>");
  });

  $('#textarea_selector').click(function() {
    $('#stage').empty().append("<p>Text Area</p>");
  });

  $('#checkbox_selector').click(function() {
    $('#stage').empty().append("<p>Checkbox</p>");
  });

  $('#radio_selector').click(function() {
    $('#stage').empty().append("<p>Radio</p>");
  });

  $('#date_selector').click(function() {
    $('#stage').empty().append("<p>Date</p>");
  });

  $('#dropdown_selector').click(function() {
    $('#stage').empty().append("<p>Dropdown</p>");
  });

  $('#file_selector').click(function() {
    $('#stage').empty().append("<p>Add File</p>");
  });

});