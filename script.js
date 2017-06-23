var onScrollHandler = function() {
  console.log("test")
  var newImageUrl = document.getElementById("mac").src;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  // TODO: Write a switch case statement
  if (scrollTop <= 10) {
     newImageUrl = "images/Mac-Screen-0.png"
  }
  if (scrollTop > 10) {
     newImageUrl = "images/Mac-Screen-1.png"
  }
  if (scrollTop > 15) {
     newImageUrl = "images/Mac-Screen-2.png"
  }
  if (scrollTop > 15) {
     newImageUrl = "images/Mac-Screen-3.png"
  }
  if (scrollTop > 20) {
     newImageUrl = "images/Mac-Screen-4.png"
  }
  if (scrollTop > 25) {
     newImageUrl = "images/Mac-Screen-5.png"
  }
  if (scrollTop > 30) {
     newImageUrl = "images/Mac-Screen-6.png"
  }
  if (scrollTop > 35) {
     newImageUrl = "images/Mac-Screen-7.png"
  }
  if (scrollTop > 40) {
     newImageUrl = "images/Mac-Screen-8.png"
  }
  if (scrollTop > 45) {
     newImageUrl = "images/Mac-Screen-9.png"
  }
  if (scrollTop > 50) {
     newImageUrl = "images/Mac-Screen-10.png"
  }
  if (scrollTop > 55) {
     newImageUrl = "images/Mac-Screen-11.png"
  }
  if (scrollTop > 60) {
     newImageUrl = "images/Mac-Screen-12.png"
  }
  if (scrollTop > 65) {
     newImageUrl = "images/Mac-Screen-13.png"
  }
  if (scrollTop > 70) {
     newImageUrl = "images/Mac-Screen-14.png"
  }
  if (scrollTop > 80) {
     newImageUrl = "images/Mac-Screen-15.png"
  }
  if (scrollTop > 85) {
     newImageUrl = "images/Mac-Screen-16.png"
  }
  if (scrollTop > 90) {
     newImageUrl = "images/Mac-Screen-17.png"
  }
  document.getElementById("mac").src = newImageUrl;
};
document.addEventListener("scroll", onScrollHandler);