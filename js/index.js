var myVar;

function myFunction() {
    
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("loading-image").style.display = "none";
  document.getElementById("myPage").style.display = "block";
}
function dieuHuong(){
    location.assign("https://login.microsoftonline.com/");
  }
// When the user clicks on the button, scroll down 800px
var isMobileDevice = navigator.userAgent.match(/iPad|iPhone|iPod/i) != null 
    || screen.width <= 480;
function dieuHuong1(){

      document.documentElement.scrollTop = 710;
    
};


//Scroll on top
//Get the button:
mybutton = document.getElementById("btn_onTop");

// When the user scrolls down 710px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 710 || document.documentElement.scrollTop > 710) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; 
  
}