
// add and remove class after scrolling

var scrollPos = window.scrollY;
var header = document.getElementById("navbar");

function add_class_on_scroll() {
  header.classList.add("navbar-small");
}

function remove_class_on_scroll() {
  header.classList.remove("navbar-small");
}

window.addEventListener('scroll', function () {

  // here update the value
  scrollPos = window.scrollY;

  if (scrollPos > 10) {
    add_class_on_scroll();
  }
  else {
    remove_class_on_scroll();
  }

});



// git year
document.getElementById("year").innerHTML = new Date().getFullYear();
