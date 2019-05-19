$(document).ready(function(){

  $("#japa_form").hide();
  $("#hearing_form").hide();
  $("#reading_form").hide();
  $("#aarti_form").hide();

  var japa_count = 0;

  $("#japa").click(function(){
    if(japa_count == 0)
    {
      $("#japa_form").show();

      $("#japa_opt1").click(function(){
        $("#japa_opt2").prop("checked",false);
        $("#japa_opt3").prop("checked",false);
      });
      $("#japa_opt2").click(function(){
        $("#japa_opt1").prop("checked",false);
        $("#japa_opt3").prop("checked",false);
      });
      $("#japa_opt3").click(function(){
        $("#japa_opt1").prop("checked",false);
        $("#japa_opt2").prop("checked",false);
      });
      japa_count = 1;
    }
    else {
      count = 0;
      $("#japa_form").hide();
    }

  });

  $("#hearing").click(function(){
    $("#hearing_form").show();
  });

  $("#reading").click(function(){
    $("#reading_form").show();
  });

  $("#aarti").click(function(){
    $("#aarti_form").show();
  });

});
