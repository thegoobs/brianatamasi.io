var curr_scroll_pos = 0;
var is_down = false;
//slide navbar down from top
$(window).scroll(function() {
	var new_scroll_pos = $(this).scrollTop();

	if (new_scroll_pos > curr_scroll_pos && is_down == false) {
		$(".navbar").animate({top: "0px"}, 250);
		is_down = true;
	}

	else if (new_scroll_pos < curr_scroll_pos && is_down == true) {
		$(".navbar").animate({top: "-100px"}, 250);
		is_down = false;	
	}

	curr_scroll_pos = new_scroll_pos;
});


$(".navbar-burger").on("click", function() {
  $(".navbar-menu").toggleClass("is-active");
  $(".navbar-burger").toggleClass("is-active"); 
}); 

$(".nav-a").on("click", function() {
	if (this.hash !== "") {
		let scroll_to = $(this.hash).offset().top - 100;
		$("html, body").animate({scrollTop: scroll_to}, 800);
	}
})