//navlinks menu mobile
const toggleButton = document.getElementsByClassName('btn-toggle')[0]
const navbarLinks = document.getElementsByClassName('menu-links', 'menusocial')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// scroll behavior
//function reveal() {
//  var reveals = document.querySelectorAll(".reveal");
//
//  for (var i = 0; i < reveals.length; i++) {
//    var windowHeight = window.innerHeight;
//    var elementTop = reveals[i].getBoundingClientRect().top;
//    var elementVisible = 150;
//
//    if (elementTop < windowHeight - elementVisible) {
//      reveals[i].classList.add("active");
//    } else {
//      reveals[i].classList.remove("active");
//    }
//  }
//}
//
//window.addEventListener("scroll", reveal);