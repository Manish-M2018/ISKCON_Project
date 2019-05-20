$(document).ready(function(){

  var japa_count = 0;
  var hearing_count = 0;
  var reading_count = 0;
  var aarti_count = 0;

  $("#japa_form").hide();
  $("#hearing_form").hide();
  $("#reading_form").hide();
  $("#aarti_form").hide();

  // setTimeout(function(){ alert("Hare Krishna , customize your sadhana by selecting the options and then entering the amount of Sadhana you have committed to."); }, 3000);


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

      $("#japa_confirm_button").click(function(){
        alert("Japa is confirm");
      });
      japa_count = 1;
    }
    else {
      japa_count = 0;
      $("#japa_form").hide();
    }
  });

  $("#hearing").click(function(){

    if(hearing_count == 0)
    {
      $("#hearing_form").show();



      hearing_count = 1;
    }
    else {
      $("#hearing_form").hide();
      hearing_count = 0;
    }
  });

  $("#reading").click(function(){
    if(reading_count == 0)
    {
      $("#reading_form").show();
      reading_count = 1;
    }
    else {
      $("#reading_form").hide();
      reading_count = 0;
    }
  });

  $("#aarti").click(function(){
    if(aarti_count == 0)
    {
      $("#aarti_form").show();
      aarti_count = 1;
    }
    else {
      $("#aarti_form").hide();
      aarti_count = 0;
    }
  });

});
