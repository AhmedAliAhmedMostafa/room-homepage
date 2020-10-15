// navigation menu
document.querySelector('.menu-button').addEventListener('click',toggleMenu);
document.querySelector('.top-nav__close_button')
.addEventListener('click',toggleMenu);
function toggleMenu(){
  const logoSection = document.querySelector('.logo-container');
  const menu = document.querySelector('.top-nav');
  logoSection.classList.toggle('hide');
  menu.classList.toggle('hide');
}
// slider
var desktop = window.matchMedia('(min-width:700px)');
const imgMobile = ['./images/mobile-image-hero-1.jpg',
'./images/mobile-image-hero-2.jpg',
'./images/mobile-image-hero-3.jpg'];
const imgDesktop = ['./images/desktop-image-hero-1.jpg',
'./images/desktop-image-hero-2.jpg',
'./images/desktop-image-hero-3.jpg'];

const heading = ['Discover innovative ways to decorate' ,'We are available all across the globe' ,'Manufactured with the best materials'];

const body = ["  We provide unmatched quality, comfort, and style for property owners across the country. \n Our experts combine form andnfunction in bringing your vision to life. Create a room in your  own style with our collection and make your property a reflection of you and what you love." 

,"With stores all over the world, it's easy for you to find furniture for your home or place of business.\n Locally, we’re in most major cities throughout the country. Find the branch nearest you using our\n  store locator.<br> Any questions? Don't hesitate to contact us today." 

,"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology\n to ensure that every product is made as perfect and as consistent as possible. With three decades of \n experience in this industry, we understand what customers want for their home and office."]
let sliderPointer = 0;
function nextSlide(direction){
  const imgElement = document.querySelector('.slider-photo__source');
  const headingElement = document.querySelector('.description__heading');
  const bodyElement = document.querySelector('.description__body');
  if(direction=='right'){
    sliderPointer = (sliderPointer+1)%3;
  }
  else{
    if(sliderPointer!=0)
    {
      sliderPointer--;
    }
    else
      sliderPointer = 2;
  }
  if(desktop.matches)
    imgElement.setAttribute('src',imgDesktop[sliderPointer]);
  else
    imgElement.setAttribute('src',imgMobile[sliderPointer]);

  headingElement.innerHTML = heading[sliderPointer];
  bodyElement.innerHTML = body [sliderPointer];
}
