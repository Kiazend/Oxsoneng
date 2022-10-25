/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
 $(()=>{  //DOCUMENT ON LOAD

$("#hamburger").on("click", function () {
    $("#hamburger").hide(100);
    $("#cross").slideDown(200);
    $(".nav-item").slideDown(200);
});

$("#cross").on("click", function () {
    $(".nav-item").slideUp(200);
    $("#cross").slideUp(200);
    $("#hamburger").show(100);
});

})