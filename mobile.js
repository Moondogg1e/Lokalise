const doc= document;
const menuOpen = doc.querySelector(".menu_btn");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");


menuOpen.addEventListener('click', ()=>{
    overlay.classList.toggle("overlay_active");
});

menuClose.addEventListener('click', ()=>{
    overlay.classList.toggle("overlay_active");
})


let scrollUp = document.getElementById("scroll_to_top");


let t;
function up() {
	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-150);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}

window.addEventListener('scroll', ()=>{
    scrollUp.hidden = (pageYOffset < document.documentElement.clientHeight);
});


