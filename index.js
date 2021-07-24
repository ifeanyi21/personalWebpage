let button = document.getElementById("chk");
$(document).scroll(function(){
    if($(document).scrollTop()>300){
        $(".myBtn").css("display", "inline-block");
    }
    else{
        $(".myBtn").css("display", "none");
    }
});

$(window).on("load",function(){
    setTimeout(function(){
        $(".loader-wrapper").slideUp("slow");
    },1000)
});
function darkMode(){
    $("section").addClass("sectionDarkMode");
    $("h2,h3,i").addClass("headerDarkMode");
    $("p").addClass("paraDarkMode");
    $("h4").addClass("h4DarkMode");
    $(".ifeanyi-span").addClass("darkModeifeanyi-span");
    $(".label").addClass("labelDarkMode");
    $("#modeIconSun").addClass("iconDarkMode");
    $("#modeIconMoon").addClass("iconDarkMode");
    button.setAttribute("checked","true");
    localStorage.setItem("Mode","Dark-Mode");
}
function lightMode(){
    $("section").removeClass("sectionDarkMode");
    $("h2,h3,i").removeClass("headerDarkMode");
    $("p").removeClass("paraDarkMode");
    $("h4").removeClass("h4DarkMode");
    $(".ifeanyi-span").removeClass("darkModeifeanyi-span");
    $(".label").removeClass("labelDarkMode");
    $("#modeIconSun").removeClass("iconDarkMode");
    $("#modeIconMoon").removeClass("iconDarkMode");
    button.removeAttribute("checked");
    localStorage.setItem("Mode","Light-Mode");
}
function body (){
    if(localStorage.getItem("Mode")===null){
        localStorage.setItem("Mode","Light-Mode")
    }
    else if(localStorage.getItem("Mode")==="Light-Mode"){
        lightMode();
    }
    else if(localStorage.getItem("Mode")==="Dark-Mode"){
        darkMode();
    }
    
}
button.addEventListener("click",()=>{
    if(localStorage.getItem("Mode")==="Light-Mode"){
        darkMode();
        
        
    }
    else if(localStorage.getItem("Mode")==="Dark-Mode"){
    lightMode();
    }
})
