function myFunction() {
    if (menu_close.style.width === '100%') {
        menu_close.style.width = '0%';
    } else {
        
        menu_close.style.width = '100%';
    };
}

var classname = document.getElementsByClassName("nav_item_close");
var menu_close = document.querySelector(".mobileNav");
var menu_button = document.querySelector(".menu-button");
menu_button.addEventListener('click', myFunction, false);
var i;

function closeFunction() { 
    return menu_close.style.width = "0%";
};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', closeFunction, false);
}

document.addEventListener('click', function(e) {
	var target = e.target || e.srcElement;
	if(target != menu_close && target != menu_button) {
		menu_close.style.width = "0%";
	}
}, false);

$(".items").on("click", function() {
  //event.preventDefault();
  var el = $(this).attr("href");
  $('html, body').animate({
    scrollTop: $(el).offset().top
  }, 'slow');
});
