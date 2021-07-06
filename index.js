$(document).scroll(function(){
    if($(document).scrollTop()>300){
        $(".myBtn").css("display", "inline-block");
    }
    else{
        $(".myBtn").css("display", "none");
    }
});

$("#chk").click(function(){
$("section").toggleClass("sectionDarkMode");
$("h2,h3,i").toggleClass("headerDarkMode");
$("p").toggleClass("paraDarkMode");
 $("h4").toggleClass("h4DarkMode");
$(".ifeanyi-span").toggleClass("darkModeifeanyi-span");
$(".label").toggleClass("labelDarkMode");
$("#modeIconSun").toggleClass("iconDarkMode");
$("#modeIconMoon").toggleClass("iconDarkMode");
});
