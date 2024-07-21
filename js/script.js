/*search-form button */
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () =>{
	searchForm.classList.toggle("active");

	shoppingCart.classList.remove("active");
	navbar.classList.remove("active");
	};


/*cart button  */
let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () =>{
	shoppingCart.classList.toggle("active");

	searchForm.classList.remove("active");
	navbar.classList.remove("active");
	};


/*menu or toggler icon  */
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () =>{
	navbar.classList.toggle("active");
	
	searchForm.classList.remove("active");
	shoppingCart.classList.remove("active");
	};


/* profile button  */
/*let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () =>{
	loginForm.classList.toggle("active");
	
	searchForm.classList.remove("active");
	navbar.classList.remove("active");
	shoppingCart.classList.remove("active");
	};*/



/* to make only one active will appear on screen */
window.onscroll = () =>
{
	searchForm.classList.remove("active");
	shoppingCart.classList.remove("active");
	navbar.classList.remove("active");
};

/* to use swiper we have to follow this code*/
var swiper = new Swiper(".review-slider",{
 	loop:true,
	spaceBetween: 20,
	autoplay: {
		delay:7500,
		disableOnInteraction: false,
	},
	
	breakpoints: {
	 0: {
	   slidesPerView: 1,
	},
	768: {
	   slidesPerView: 2,
	},
	1020: {
	   slidesPerView: 3, 
	},
      },
});


