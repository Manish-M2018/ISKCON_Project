$(document).ready(function(){
    $("#login_button").click(function(){
      $("#mobilejs").html("");
      $("#passmobjs").html("");

      //var state = $("#state_select").val();
      console.log($("#state_select_login").val())

      if($("#log_mobile_no").val() == "")
      {
          $("#mobilejs").html("<h5>**empty field</h5>");
          return false;
      }
      if($("#log_password").val() == "")
      {
          $("#passmobjs").html("<h5>**empty field</h5>");
          return false;
      }
      if($("#state_select_login").val() == "")
      {
        $("#state_warning").html("<h5>**empty field</h5>");
        return false;
      }

      // Mobile no. validation
      if(isNaN($("#log_mobile_no").val()))
      {
        $("#mobilejs").html("<h5>Please enter a valid mobile no.</h5>");
      }
      else
      {
      var mob_length = $("#log_mobile_no").val().toString().length;
      if(mob_length != 10)
        $("#mobilejs").html("<h5>Please enter a valid mobile no.</h5>");
      }
      // End of mobile no. validation

      // Password validation
      var psw_length = $("#log_password").val().length;
      if(psw_length < 6)
          $("#passmobjs").html("<h5>Password should be of minimum 6 characters</h5>");
      //End of password validation
    });
});
