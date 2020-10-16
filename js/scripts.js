$(document).ready(function() {
  $("button#submit").click(function (event) {
    
    var name = $("input#uname").val();
    var email = $("input#email").val();
    var message = $("textarea#t-area").val();

    if (email.length > 5 && email.includes('@') && email.includes('.') && name.length > 3 && message.length >= 15){
      alert("Thanks For contacting us");
    }
    else{
      event.preventDefault();
      alert("invalid User name or email and Message should be more than 15 character ");
    }

  });
});