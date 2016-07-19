$(document).ready(function(){
	
var burgerButton = $('.menu-btn');
var menuNav = $('.menu-bar');
var menuA = menuNav.find("a")
var body = $("html, body");	

	
//PAGE SCROLLING	
	//body.stop().animate({scrollTop: 0}, 500);
	
	menuA.on("click", function(event){
		event.preventDefault();
       
		var jumpTo = $(this).attr("href");
		var position = $(jumpTo).position().top;
		
		body.animate({scrollTop: position + "px"}, 1500);  
		
	
//		$.smoothScroll({
//    		scrollElement: jumpTo,
//			scrollTarget: position
//  		});
//  			return false
       
    });

	
//HAMBURGER MENU
 
    burgerButton.on('click', function(event) {
        //menuNav.slideToggle("slow");
		menuNav.toggleClass("menu-for-mobile");
    })
 
    $(window).on('resize load', function(event) {
        if (window.matchMedia("(min-width: 850px)").matches) {
			menuNav.addClass("menu-for-desktop");
		    menuNav.removeClass("menu-for-mobile");
        } else if (window.matchMedia("(max-width: 849px)").matches) {
			menuNav.removeClass("menu-for-mobile");
		    menuNav.removeClass("menu-for-desktop");
        }
    })
	menuA.on('click', function(event) {
         if (window.matchMedia("(max-width: 850px)").matches) {
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
		$(this).hide().next().fadeToggle("fast")
	//		.animate({
	//		opacity: 1,
	//	},2000)	
	})	

	$(".open-prog").on("click", function(event){
		$(this).hide().prev().show()
	})

	//BUTTON_UP
	var topPosition = $("#wrap-0").position().top;
	
	$(".scroll-btn-up").on("click", function(event){
		body.animate({scrollTop: topPosition}, 1500); 
	})
	
	
	
	//SCROLL
	$(function() {
		$.scrollify({
			section : ".scroll-plug",
		});
	});
});