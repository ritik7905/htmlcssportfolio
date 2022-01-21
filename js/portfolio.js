let allCourse = document.querySelector('#all')
let js = document.querySelector('#js')
let design = document.querySelector('#design')

var all = [
  { img: './assets/images/1.jpg', title: 'CRUD' },
  { img: './assets/images/2.jpg', title: 'CRUD' },
  { img: './assets/images/3.jpg', title: 'CRUD' },
  { img: './assets/images/4.jpg', title: 'CRUD' },
  { img: './assets/images/5.jpg', title: 'CRUD' },
  { img: './assets/images/6.jpg', title: 'CRUD' },
  { img: './assets/images/7.jpg', title: 'CRUD' },
  { img: './assets/images/8.jpg', title: 'CRUD' },
  { img: './assets/images/9.jpg', title: 'CRUD' },
  { img: './assets/images/5.jpg', title: 'CRUD' },
  { img: './assets/images/11.jpg', title: 'CRUD' },
  { img: './assets/images/12.jpg', title: 'CRUD' },
]

var javascript = [
  { img: './assets/images/7.jpg', title: 'CRUD' },
  { img: './assets/images/8.jpg', title: 'CRUD' },
  { img: './assets/images/9.jpg', title: 'CRUD' },
  { img: './assets/images/5.jpg', title: 'CRUD' },
  { img: './assets/images/11.jpg', title: 'CRUD' },
  { img: './assets/images/12.jpg', title: 'CRUD' },
]

var webDesign = [
  { img: './assets/images/1.jpg', title: 'CRUD' },
  { img: './assets/images/2.jpg', title: 'CRUD' },
  { img: './assets/images/3.jpg', title: 'CRUD' },
  { img: './assets/images/4.jpg', title: 'CRUD' },
  { img: './assets/images/5.jpg', title: 'CRUD' },
]

var links = [
  'https://ritik7905.github.io/Razor-Pay/',
  'https://ritik7905.github.io/Razor-Pay/',
  'https://ritik7905.github.io/Razor-Pay/',
  'https://ritik7905.github.io/Razor-Pay/',
  'https://ritik7905.github.io/Razor-Pay/'
]
var counter = 0
myProjects(all)
function myProjects(work) {
  var output = ''

  for (let i = 0; i < work.length; i++) {
    output += `<div class= "course_box">
    <li>
    <a href=${links[counter]} target="_blank">

    <img src="${work[i]['img']}" alt="">
    <h1>${work[i]['title']}</h1></div>
    </a>
        </li>
    `
  
}
document.querySelector('.portfolio_wrapper').innerHTML = output

// ?for links





}


// for all courses
allCourse.style.backgroundColor = '#FF724C';
allCourse.addEventListener('click', () => {
  allCourse.style.backgroundColor = '#FF724C';
 
  
  js.style = 'none'
  allCourse.style.borderRadius = '5px'
  allCourse.style.color = 'white'
  allCourse.style.transition = 'all 0.5s'
  myProjects(all)
})
// for javacourses
js.addEventListener('click', () => {
  js.style.backgroundColor = '#FF724C'
  js.style.color = 'white'
  design.style = 'none'
  js.style.transition = 'all 0.5s'
  allCourse.style = 'none'
  myProjects(javascript)
})
// for WebDesign
design.addEventListener('click', () => {
  design.style.backgroundColor = '#FF724C'
  design.style.color = 'white'
  design.style.transition = 'all 0.5s'
  js.style = 'none'
  myProjects(webDesign)
})

