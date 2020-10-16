$(document).ready(function(){
    $("#deliver-check").click(function () {
        if ($(this).is(":checked")) {
            $("#deliver").show();
            sumTotal= sumTotal+10;
        } else {
            $("#deliver").hide();
            sumTotal=sumTotal-10;
        }
    });
});