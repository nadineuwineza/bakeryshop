var totalPrice=0;

$(document).ready(function(){

});
$(document).ready(function(){
    $("#deliver-check").click(function () {
      if ($(this).is(":checked")) {
          $("#deli-hide").show();
          sumTotal= sumTotal+10;
      } else {
          $("#deli-hide").hide();
          sumTotal=sumTotal-10;
      }
  });