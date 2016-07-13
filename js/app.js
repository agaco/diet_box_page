$(document).ready(function(){
//    
//var $navMenu = $(".navbar");
//var $buttonNav = $(".menu_btn");
//	
//	$buttonNav.on("click", function(event){
//		$navMenu.show("slow");
//		$(this).toggle();
//	})

//	$(window).on("resize", function(){
//		if (window.matchMedia("(min-width: 600px)")) {
//			$navMenu.css("display", "flex");
//		}
//	});
	
	
$(".tile").on("click", function(event){
	console.log("test");
	$(this).hide().next().toggle().css("background-color", "rgba(215, 44, 44, 0.5)")
	
//	animate({
//		opacity: 0.3,
//	},2000)	
})	

$(".open").on("click", function(event){
	$(this).hide().prev().show()
})

});