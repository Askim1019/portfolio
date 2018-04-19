function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("wrapper").style.marginLeft = "250px";
    document.getElementById("menuIcon").style.display = "none";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("wrapper").style.marginLeft= "0";
    document.getElementById("menuIcon").style.display = "block";
    document.body.style.backgroundColor = "white";
}


(function() {

  'use strict';
  function typeEffect(element, speed) {
    var text = $(element).text();
    $(element).html('');
    
    var i = 0;
    var timer = setInterval(function() {
      if (i < text.length) {
        $(element).append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }
  
   
  var speed = 75;
  var delay = $('#h1intro').text().length * speed + speed;
  typeEffect($('#h1intro'), speed);

  setTimeout(function(){
    typeEffect($('#typeIt'), speed);
  }, delay);
  


  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

  var carousel = $(".carousel"),
    currdeg  = 0;

  $(".next").on("click", { d: "n" }, rotate);
  $(".prev").on("click", { d: "p" }, rotate);

  function rotate(e){
    if(e.data.d=="n"){
      currdeg = currdeg - 60;
    }
    if(e.data.d=="p"){
      currdeg = currdeg + 60;
    }
    carousel.css({
      "-webkit-transform": "rotateY("+currdeg+"deg)",
      "-moz-transform": "rotateY("+currdeg+"deg)",
      "-o-transform": "rotateY("+currdeg+"deg)",
      "transform": "rotateY("+currdeg+"deg)"
    });
  }

  $("#homelink").click(function(){
    $('html, body').animate({
      scrollTop: $('#wrapper').offset().top}, 1000);
    });

  $("#portlink").click(function(){
    $('html, body').animate({
      scrollTop: $('#portfolio').offset().top}, 1000);
    });
  
  $("#journeylink").click(function(){
    $('html, body').animate({
      scrollTop: $('.timeline-wrapper').offset().top},1000);
    });
  
})();