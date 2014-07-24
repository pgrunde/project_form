$(document).ready(function() {

  $('#contact_info_selector').click(function() {
    $('#stage').empty().append("<span>Contact Info</span>");
  });

  $('#text_selector').click(function() {
    $('#stage').empty().append("<span>Text</span>");
  });

  $('#textarea_selector').click(function() {
    $('#stage').empty().append("<span>Text Area</span>");
  });

  $('#checkbox_selector').click(function() {
    $('#stage').empty().append("<span>Checkbox</span>");
  });

  $('#radio_selector').click(function() {
    $('#stage').empty().append("<span>Radio</span>");
  });

  $('#date_selector').click(function() {
    $('#stage').empty().append("<span>Date</span>");
  });

  $('#dropdown_selector').click(function() {
    $('#stage').empty().append("<span>Dropdown</span>");
  });

  $('#file_selector').click(function() {
    $('#stage').empty().append("<span>Add File</span>");
  });

});