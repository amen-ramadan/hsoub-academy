

//////////////////////////////////////////////////

// هذه الدالة تحدد عدد الصور الذي سوف تظهر في اللايد
//  وسوف نستخدمها في الشرط الموجود أدناه

const changeSlideView = (slide) => {
  var swiper = new Swiper(".swiper", {
    slidesPerView: slide, // عدد الشرائح
    spaceBetween: 30, // المسافة بين الشريحة والاخرى
    autoplay: true,
    loop: true, // اعادة الصور
    pagination: { // نقاط التنقل
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

//////////////////////////////////////////////////

// check break point window 
const mql = window.matchMedia("(max-width:992px)");
// function 
const handleOrientationChange = (e) => {
  if (mql.matches) {
    changeSlideView(1);
  }
  else {
    changeSlideView(3);
  }
}
// start first time
handleOrientationChange();


// always change always start
mql.onchange = (e) => {
  handleOrientationChange(e);
};



/* // configs swiper
var swiper = new Swiper(".swiper", {
  slidesPerView: 3, // عدد الشرائح
  spaceBetween: 30, // المسافة بين الشريحة والاخرى
  autoplay: true,
  loop: true, // اعادة الصور
  pagination: { // نقاط التنقل
    el: ".swiper-pagination",
    clickable: true,
  },
}); */


