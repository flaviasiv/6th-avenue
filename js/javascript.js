//navlinks menu mobile

let menu_icon_box = document.querySelector(".btn-toggle");
let box = document.querySelector(".box");


menu_icon_box.onclick = function(){
    menu_icon_box.classList.toggle("active");
    box.classList.toggle("active_box");
}
document.onclick = function(e){
    if (!menu_icon_box.contains(e.target) && !box.contains(e.target) ) {
        menu_icon_box.classList.remove("active");
        box.classList.remove("active_box");
    }
}

// // scroll behavior
// let section = document.querySelectorAll("main");
// let menu = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   section.forEach((i) => {
//     let top = window.scrollY;
//     let offset = i.offsetTop - 150;
//     let height = i.offsetHeight;
//     let id = i.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       menu.forEach((link) => {
//         link.classList.remove("active");
//         document
//           .querySelector("header nav a[href*=" + id + "]", ".testemonycard")
//           .classList.add("active");
//       });
//     }
//   });
// };

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 10;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();