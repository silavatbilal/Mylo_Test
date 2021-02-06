var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); 
}

var helpDeskslideIndex = 1;
showDivs(helpDeskslideIndex);

function plusDivs(n) {
  showDivs(helpDeskslideIndex += n);
}

function showDivs(n) {
  var e;
  var x = document.getElementsByClassName("helpDeskmySlides");
  if (n > x.length) {helpDeskslideIndex = 1}
  if (n < 1) {helpDeskslideIndex = x.length}
  for (e = 0; e < x.length; e++) {
    x[e].style.display = "none";  
  }
  x[helpDeskslideIndex-1].style.display = "block";  
}