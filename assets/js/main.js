/*=============== CHANGE BACKGROUND HEADER ===============*/


const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER PRODUCTS ===============*/


let swiperProducts = new Swiper(".products__container", {

    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
		1024: {
			spaceBetween: 72,
		},
  	},
});


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 


const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== DARK LIGHT THEME ===============*/ 


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data, .products__container, .footer__container, .footer__info, .testimonials, .about-text, .section__title, .home section, .video-hero, .gallery-container, .contact, .contact-container`)
sr.reveal(`.home__images`, {delay: 600, origin: 'bottom'})
sr.reveal(`.new__card, .brand__img`, {interval: 100})
sr.reveal(`.collection__explore:nth-child(1)`, {origin: 'right'})
sr.reveal(`.collection__explore:nth-child(2)`, {origin: 'left'})

/*=============== CONTACT FORM ===============*/

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

/*=============== TESTIMONIALS SWIPER (SWIPER JS) ===============*/

const swiper = new Swiper('.js-testimonials-slider', {
    grabCursor: true,
    spaceBetween: 30,
    pagination:{
        el: '.js-testimonials-pagination',
        clickable: true
    },
    breakpoints:{
        767:{
            slidesPerView: 2
        }
        }
});

/*=============== ABOUT TYPER ===============*/

const div = document.querySelector(".about-text");
const text = "Welcome to A.J.Holmes Building. We have created this website to allow those looking for an experienced and reliable builder to view the range of services we provide, along with photos of some previous projects and all-important testimonials from our very satisfied customers. \nA.J.Holmes is a family-run firm providing all aspects of building work, including a full project management service. We are well known and respected throughout the West Dorset, East Devon and South Somerset areas for our exceptional level of craftsmanship. We have been trading since 2004 working entirely on recommendations from previous customers which is testament to the high standard of workmanship and professionalism we offer. We offer free no-obligation estimates for jobs of any size. Should you wish to make an enquiry, please call or email us. We look forward to hearing from you!";

function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    // If we reached the end of the string 
    if (i === text.length - 1) {
       return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 50);
}

textTypingEffect(div, text);