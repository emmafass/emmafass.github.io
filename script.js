// Mac Animation
var count = 0;
var myListener = function(e) {
  count = count + 1;
  console.log(count);
  if (count > 85)
    document.getElementById("mac").src = "images/Mac-Screen-17.png";
  else if (count > 80)
    document.getElementById("mac").src = "images/Mac-Screen-16.png";
  else if (count > 75)
    document.getElementById("mac").src = "images/Mac-Screen-15.png";
  else if (count > 70)
    document.getElementById("mac").src = "images/Mac-Screen-14.png";
  else if (count > 65)
    document.getElementById("mac").src = "images/Mac-Screen-13.png";
  else if (count > 60)
    document.getElementById("mac").src = "images/Mac-Screen-12.png";
  else if (count > 55)
    document.getElementById("mac").src = "images/Mac-Screen-11.png";
  else if (count > 50)
    document.getElementById("mac").src = "images/Mac-Screen-10.png";
  else if (count > 45)
    document.getElementById("mac").src = "images/Mac-Screen-9.png";
  else if (count > 40)
    document.getElementById("mac").src = "images/Mac-Screen-8.png";
  else if (count > 35)
    document.getElementById("mac").src = "images/Mac-Screen-7.png";
  else if (count > 30)
    document.getElementById("mac").src = "images/Mac-Screen-6.png";
  else if (count > 25)
    document.getElementById("mac").src = "images/Mac-Screen-5.png";
  else if (count > 20)
    document.getElementById("mac").src = "images/Mac-Screen-4.png";
  else if (count > 15)
    document.getElementById("mac").src = "images/Mac-Screen-3.png";
  else if (count > 10)
    document.getElementById("mac").src = "images/Mac-Screen-2.png";
  else if (count > 5)
    document.getElementById("mac").src = "images/Mac-Screen-1.png"; 
};

// Change Project Info
try {
  document.getElementById("project1").addEventListener("click", function(){
    document.getElementById("project1").style.borderBottom = '4px solid rgb(91, 192, 222)';
    document.getElementById("description-title").innerHTML = 'Lokahi';
    document.getElementById("description").innerHTML = 'Coming Soon';
    document.getElementById("description-btn").innerHTML = 'Coming Soon';
    resetProjects("project2", "project3", "project4");
  });
} catch(err) {}

try {
  document.getElementById("project2").addEventListener("click", function(){
    document.getElementById("project2").style.borderBottom = '4px solid rgb(91, 192, 222)';
    document.getElementById("description-title").innerHTML = 'Rapid Recipes';
    document.getElementById("description").innerHTML = 'Coming Soon';
    document.getElementById("description-btn").innerHTML = 'Coming Soon';
    resetProjects("project1", "project3", "project4");
  });
} catch(err) {}

try {
  document.getElementById("project3").addEventListener("click", function(){
    document.getElementById("project3").style.borderBottom = '4px solid rgb(91, 192, 222)';
    document.getElementById("description-title").innerHTML = 'Fashion Quiz';
    document.getElementById("description").innerHTML = 'Coming Soon';
    document.getElementById("description-btn").innerHTML = 'Coming Soon';
    resetProjects("project2", "project1", "project4");
  });
} catch(err) {}

try {
  document.getElementById("project4").addEventListener("click", function(){
    document.getElementById("project4").style.borderBottom = '4px solid rgb(91, 192, 222)';
    document.getElementById("description-title").innerHTML = 'Ibingi';
    document.getElementById("description").innerHTML = 'Coming Soon';
    document.getElementById("description-btn").innerHTML = 'Coming Soon';
    resetProjects("project2", "project3", "project1");
  });
} catch(err) {}

var resetProjects = function(p1, p2, p3){
  document.getElementById(p1).style.borderBottom = '0px';
  document.getElementById(p2).style.borderBottom = '0px';
  document.getElementById(p3).style.borderBottom = '0px';
}

