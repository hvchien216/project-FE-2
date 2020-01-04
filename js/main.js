var tabs = document.getElementsByClassName("hero");
var tabHeaders = document.querySelectorAll("ul.tab-hero-avatar>li");

function ShowTab(event, index) {
  //   for (i = 0; i < tabHeaders.length; i++) {
  //     tabHeaders[i].className = "";
  //   }
  //   event.target.className = "selected";
  // Hiển thị tab được chọn
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  tabs[index].style.display = "block";
}
// Slideshow
var slider = document.getElementById("slider-top");
var slideIndex = 0;
function showSlide(index) {
  if (index >= 3) {
    index = 0;
    slideIndex = 0;
  }
  for (i = 1; i < slider.children.length; i++) {
    slider.children[i].style.opacity = 0;
  }
  slider.children[index].style.opacity = 1;
  slideIndex++;
  setTimeout(function() {
    showSlide(slideIndex);
  }, 2500);
}
showSlide(slideIndex);

//HOCVIEN
var slideIndexx = 1;
var slidess = document.getElementsByClassName("slides");

function showSlider(index) {
  for (i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";
  }
  if (index > slidess.length) {
    slideIndexx = 1;
    index = 1;
  }
  if (index < 1) {
    slideIndexx = slidess.length;
    index = slidess.length;
  }

  slidess[index - 1].style.display = "block";
}
showSlider(slideIndexx);
var preBtn = document.getElementById("truoc");
var nextBtn = document.getElementById("sau");

function showNextSlider() {
  slideIndexx++;
  showSlider(slideIndexx);
}

nextBtn.onclick = showNextSlider;

function showPreSlider() {
  slideIndexx--;
  showSlider(slideIndexx);
}

preBtn.onclick = showPreSlider;

setInterval(showNextSlider, 4000);

// HOCVIEN-Map
// var slideInitial = 0;
var items = document.getElementsByClassName("item");
for (i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function() {
    for (i = 0; i < items.length; i++) {
      items[i].classList.remove("actived");
    }
    this.classList.add("actived");
  });
}
// showSlide();
