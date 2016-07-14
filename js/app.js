$(document).ready(function(){
var burgerButton = $('.menu-btn');
var menuNav = $('.menu-bar');
var menuA = menuNav.find("a")
var body = $("html, body");

	
//PSGE SCROLLING	
body.stop().animate({scrollTop: 0}, "500");
	
	menuA.on("click", function(event){
        event.preventDefault;
		//console.log($(this).attr("href"));
        
//       var jumpTo = $(this).attr("href");
//       var position = $(jumpTo).position().top;
//       
//       body.stop().animate({scrollTop: position}, "1000");
//        
       
    });
	
	
	
	
	
	
//HAMBURGER MENU
 
    burgerButton.on('click', function(event) {
        //menuNav.slideToggle("slow");
		menuNav.toggleClass("menu-for-mobile");
        console.log('2');
    })
 
    $(window).on('resize load', function(event) {
        if (window.matchMedia("(min-width: 640px)").matches) {
			menuNav.addClass("menu-for-desktop");
		    menuNav.removeClass("menu-for-mobile");
        } else if (window.matchMedia("(max-width: 639px)").matches) {
			menuNav.removeClass("menu-for-mobile");
		    menuNav.removeClass("menu-for-desktop");
        }
    })
	menuA.on('click', function(event) {
         if (window.matchMedia("(max-width: 639px)").matches) {
			menuNav.removeClass("menu-for-mobile");
        }
    })
	
	//LOGOWANIE
	
	$(".log_btn").on('click', function(event){
		console.log("test.log")
		$(".logging").slideToggle("fast");
	})
	
	
	
//Kafelki - sekcja programy	
$(".tile").on("click", function(event){
	console.log("test");
	$(this).hide().next().toggle().css("background-color", "rgba(215, 44, 44, 0.5)")
	
//	animate({
//		opacity: 0.3,
//	},2000)	
})	

$(".open-prog").on("click", function(event){
	$(this).hide().prev().show()
})


});