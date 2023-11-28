let sliderTrigger = document.getElementsByClassName("slider-trigger")[0];
let slider = document.getElementsByClassName('slider-parent')[0];
let desc = document.getElementsByClassName('desc')[0];
let venue = document.getElementsByClassName('venue')[0];
let featuredImage = document.getElementsByClassName('featured-image')[0];
let title = document.getElementsByClassName('title')[0];

sliderTrigger.addEventListener( "click" , function(el){
	if(slider.classList.contains("active")){  
		slider.classList.remove("active"); 
	}else{ 
        slider.classList.add("active"); 
	}
});

window.addEventListener("load", function() {
    desc.classList.add("slide-bottom");
    venue.classList.add("slide-right");
    featuredImage.classList.add("slide-bottom2");
    title.classList.add("slide-left");
 });


$(document).ready(function(){
	$('#hamburger-menu').click(function(){
		$(this).toggleClass('open');
    });	

    // $('.anim-left').animate({
    //     opacity: 1,
    //     left: "-15%",
    //   }, 1000, function() {
    //     // Animation complete.
    // });

    // $('.anim-right').animate({
    //     opacity: 1,
    //     left: "60%",
    //   }, 1200, function() {
    //     // Animation complete.
    // });

    // $('.anim-bottom1').delay(1000).animate({
    //     opacity: 1,
    //     bottom: "-5vh",
    //   }, 900, function() {
    //     // Animation complete.
    // });

    // $('.anim-bottom2').delay(400).animate({
    //     opacity: 1,
    //     bottom: "5vh",
    //   }, 900, function() {
    //     // Animation complete.
    // });
});






