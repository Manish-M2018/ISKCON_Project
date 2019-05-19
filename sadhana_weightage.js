$(document).ready(function() {
  $("#submit_button").click(function(){


    var x = $("#x").val();
    var y = $("#y").val();
    var z = $("#z").val();
    var w = $("#w").val();

    $("#japa_warning").html("");
    $("#hearing_warning").html("");
    $("#reading_warning").html("");
    $("#aarti_warning").html("");

    //Empty field validation
    if($("#x").val() == "")
    {
        $("#japa_warning").html("<h5>**empty field</h5>");
        return false;
    }
    if($("#y").val() == "")
    {
        $("#hearing_warning").html("<h5>**empty field</h5>");
        return false;
    }
    if($("#z").val() == "")
    {
        $("#reading_warning").html("<h5>**empty field</h5>");
        return false;
    }
    if($("#w").val() == "")
    {
        $("#aarti_warning").html("<h5>**empty field</h5>");
        return false;
    }

    if(isNaN(x) || isNaN(y) || isNaN(z) || isNaN(w))
    {
      alert("Must input numbers");
      return false;
    }
    //End of empty field validation

    var xx = parseInt($("#x").val(),10);
    var yy = parseInt(y,10);
    var zz = parseInt(z,10);
    var ww = parseInt(w,10);


    if(xx + yy + zz + ww < 100)
    {
      alert("Hare Krishna. Total sadhana should not be lesser than 100%");
      return false;
    }
    else if(xx + yy + zz + ww > 100)
    {
      alert("Hare Krishna. Total sadhana should not be greater than 100%");
      return false;
    }
    else
    {
        alert("Hare Krishna. Your sadhana weightage has been set!")
    }
  });
});
