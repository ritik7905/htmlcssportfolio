const owl = $('.owl-carousel')
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  color: 'red',
  center: true,
  animateOut: 'slideOutDown',
  animateIn: 'fadeIn',
  autoplay: true,
  autoplayTimeout: 2000,
  dots: false,
  autoplayHoverPause: true,
})
// Loader in JS;

var preLoader = document.getElementById('loading')

setTimeout(function myLoader() {
  preLoader.style.display = 'none'
}, 1500)

const sideBar = document.querySelector('.menu')

sideBar.addEventListener('click', () => {
  alert('Hello')
  const left = document.querySelector('.header')
  left.style.left = '100px'
})
