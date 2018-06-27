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