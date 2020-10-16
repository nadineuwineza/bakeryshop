// $(document).ready(function(){
//     $(".btn btn-dark").click(function () {
//         alert('Thank you!')
//     });
// });


function myFunction() {
  var text;
  if (confirm("Thank you for contacting us! ")) {
    text = "Thank you for contacting us!";
  } 
//   else {
//     txt = "You pressed Cancel!";
//   }
  document.getElementById("demo").innerHTML = text;
}