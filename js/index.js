function myFunction() {
  var text;
  if (confirm("Thank you for contacting us! Consider your order as done!")) {
    text = "Thank you! ";
  } 
  document.getElementById("demo").innerHTML = text;
}