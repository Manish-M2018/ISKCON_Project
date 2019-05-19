var user, mobile, password1, password2, addr, pincode;
$(document).ready(function(){
    //When the submit button is clicked
    $("#sign_up").click(function(){

        $("#usernamealert").html("");
        $("#mobalert").html("");
        $("#passalert").html("");
        $("#confirmalert").html("");
        $("#warning_pincode").html("");

        //Empty field validation
        if($("#user").val() == "")
        {
            $("#usernamealert").html("<h5>**empty field</h5>");
            return false;
        }
        if($("#mobile").val() == "")
        {
          $("#mobalert").html("<h5>**empty field</h5>");
          return false;
        }
        if($("#password1").val() == "")
        {
          $("#passalert").html("<h5>**empty field</h5>");
          return false;
        }
        if($("#password2").val() == "")
        {
          $("#confirmalert").html("<h5>**empty field</h5>");
          return false;
        }
        if($("#state_select").val() == "")
        {
          $("#warning_loc").html("<h5>**empty field</h5>");
          return false;
        }
        if($("#addr").val() == "")
        {
          $("#warning_addr").html("<h5>**empty field</h5>");
          return false;
        }
        if($("#pincode").val() == "")
        {
          $("#warning_pincode").html("<h5>**empty field</h5>");
          return false;
        }
        //End of empty field validation

        // User name validation
        var user_length = $("#user").val().length; //length of user name
        var index = 0; //index to check for space
        index = $("#user").val().indexOf(' ');
        if(user_length < 6)
            $("#usernamealert").html("<i><h5>Username should be of minimum 6 characters</h5></i>");
        else if(index > 0)
            $("#usernamealert").html("<i><h5>No spaces allowed</h5></i>");
        //End of user name validation

        // Mobile no. validation
        if(isNaN($("#mobile").val()))
        {
          $("#mobalert").html("<h5>Please enter a valid mobile no.</h5>");
        }
        else
        {
        var mob_length = $("#mobile").val().toString().length;
        if(mob_length != 10)
          $("#mobalert").html("<h5>Please enter a valid mobile no.</h5>");
        }
        // End of mobile no. validation

        // Password validation
        var psw_length = $("#password1").val().length;
        if(psw_length < 6)
            $("#passalert").html("<h5>Password should be of minimum 6 characters</h5>");
        //End of password validation

        // Confirm password
        if($("#password1").val() != $("#password2").val())
            $("#confirmalert").html("<h5>Please check the password re-entered</h5>")
        // End of confirm password

        // Pincode validation
        if(isNaN($("#pincode").val()))
        {
          $("#warning_pincode").html("<h5>Please enter a valid pincode</h5>");
        }
        else
        {
        var pin_length = $("#pincode").val().toString().length;
        if(pin_length != 6)
          $("#warning_pincode").html("<h5>Please enter a valid pincode less</h5>");
        }
        // End of Pincode validation


      });

});
