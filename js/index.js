$("#deliver-check").click(function (event) {
if ($(this).is(":checked")) {
  $('input#street').attr("required",true);
} else {
  $('input#street').attr("required",false);
}
});
$("#order-form").submit(function(){  
  var address= $("#street").val();
    if ($("#deliver-check").is(":checked")){
      alert("Thank you for contacting us! Consider your order as done! Your order will be delivered at "+ address);
  } else {
    alert("Thank you for contacting us! Consider your order as done!");
  }
    shoppingCart.clearCart();
    displayCart();
  });