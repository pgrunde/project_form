$(document).ready(function() {

  $('#contact_info_selector').click(function() {
    $('#stage_neutral').css("z-index","1");
  });

  $('#text_selector').click(function() {
    $('#staged_text').css("z-index","1");
    $('#staged_text_area').css("z-index","-1");
    $('#staged_checkbox').css("z-index","-1");
    $('#staged_radio').css("z-index","-1");
    $('#staged_date').css("z-index","-1");
    $('#staged_dropdown').css("z-index","-1");
    $('#stage_neutral').css("z-index","-1");

    $('#final_form').empty().append("text")
  });

  $('#textarea_selector').click(function() {
    $('#staged_text_area').css("z-index","1");
    $('#staged_text').css("z-index","-1");
    $('#staged_checkbox').css("z-index","-1");
    $('#staged_radio').css("z-index","-1");
    $('#staged_date').css("z-index","-1");
    $('#staged_dropdown').css("z-index","-1");
    $('#staged_neutral').css("z-index","-1");

    $('#final_form').empty().append("textarea")
  });

  $('#checkbox_selector').click(function() {
    $('#staged_checkbox').css("z-index","1");
    $('#staged_text').css("z-index","-1");
    $('#staged_text_area').css("z-index","-1");
    $('#staged_radio').css("z-index","-1");
    $('#staged_date').css("z-index","-1");
    $('#staged_dropdown').css("z-index","-1");
    $('#staged_neutral').css("z-index","-1");

    $('#final_form').empty().append("checkbox")
  });

  $('#radio_selector').click(function() {
    $('#staged_radio').css("z-index","1");
    $('#staged_text').css("z-index","-1");
    $('#staged_text_area').css("z-index","-1");
    $('#staged_checkbox').css("z-index","-1");
    $('#staged_date').css("z-index","-1");
    $('#staged_dropdown').css("z-index","-1");
    $('#staged_neutral').css("z-index","-1");

    $('#final_form').empty().append("radio")
  });

  $('#date_selector').click(function() {
    $('#staged_date').css("z-index","1");
    $('#staged_text').css("z-index","-1");
    $('#staged_text_area').css("z-index","-1");
    $('#staged_checkbox').css("z-index","-1");
    $('#staged_radio').css("z-index","-1");
    $('#staged_dropdown').css("z-index","-1");
    $('#staged_neutral').css("z-index","-1");

    $('#final_form').empty().append("date")
  });

  $('#dropdown_selector').click(function() {
    $('#staged_dropdown').css("z-index","1");
    $('#staged_text').css("z-index","-1");
    $('#staged_text_area').css("z-index","-1");
    $('#staged_checkbox').css("z-index","-1");
    $('#staged_radio').css("z-index","-1");
    $('#staged_date').css("z-index","-1");
    $('#staged_neutral').css("z-index","-1");

    $('#final_form').empty().append("dropdown")
  });
//
//  $('#file_selector').click(function() {
//    $('#stage').empty().append("<span>Add File</span>");
//  });

});