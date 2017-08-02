// Mac Animation
var count = 0;
var myListener = function(e) {
  count = count + 1;
  console.log(count);
  if (count > 235)
    document.getElementById("mac").src = "images/Mac-Screen-17.png";
  else if (count > 220)
    document.getElementById("mac").src = "images/Mac-Screen-16.png";
  else if (count > 205)
    document.getElementById("mac").src = "images/Mac-Screen-15.png";
  else if (count > 190)
    document.getElementById("mac").src = "images/Mac-Screen-14.png";
  else if (count > 175)
    document.getElementById("mac").src = "images/Mac-Screen-13.png";
  else if (count > 160)
    document.getElementById("mac").src = "images/Mac-Screen-12.png";
  else if (count > 145)
    document.getElementById("mac").src = "images/Mac-Screen-11.png";
  else if (count > 130)
    document.getElementById("mac").src = "images/Mac-Screen-10.png";
  else if (count > 115)
    document.getElementById("mac").src = "images/Mac-Screen-9.png";
  else if (count > 100)
    document.getElementById("mac").src = "images/Mac-Screen-8.png";
  else if (count > 85)
    document.getElementById("mac").src = "images/Mac-Screen-7.png";
  else if (count > 70)
    document.getElementById("mac").src = "images/Mac-Screen-6.png";
  else if (count > 55)
    document.getElementById("mac").src = "images/Mac-Screen-5.png";
  else if (count > 50)
    document.getElementById("mac").src = "images/Mac-Screen-4.png";
  else if (count > 35)
    document.getElementById("mac").src = "images/Mac-Screen-3.png";
  else if (count > 20)
    document.getElementById("mac").src = "images/Mac-Screen-2.png";
  else if (count > 5)
    document.getElementById("mac").src = "images/Mac-Screen-1.png"; 
};

// Change Project Info
try {
  document.getElementById("project1").addEventListener("click", function(){
    document.getElementById("project1").style.borderBottom = '4px solid rgb(91, 192, 222)';
    document.getElementById("description-title").innerHTML = 'Lokahi';
    document.getElementById("description-btn").innerHTML = 'See Project';
    document.getElementById("description").innerHTML = 'An application to crowdsource information about investment opportunities and collaborate with other potential investors.';
    document.getElementById("description-link").href = 'https://cs3240sp17g15.herokuapp.com/login/?next=/';
    resetProjects("project2", "project3", "project4");
  });
} catch(err) {}

try {
  document.getElementById("project2").addEventListener("click", function(){
    document.getElementById("project2").style.borderBottom = '4px solid rgb(91, 192, 222)';
    document.getElementById("description-title").innerHTML = 'Rapid Recipes';
    document.getElementById("description-btn").innerHTML = 'See Project';
    document.getElementById("description").innerHTML = 'Coming Soon';
    document.getElementById("description-link").href = '#';
    resetProjects("project1", "project3", "project4");
  });
} catch(err) {}

try {
  document.getElementById("project3").addEventListener("click", function(){
    document.getElementById("project3").style.borderBottom = '4px solid rgb(91, 192, 222)';
    document.getElementById("description-title").innerHTML = 'Fashion Quiz';
    document.getElementById("description-btn").innerHTML = 'See Project';
    document.getElementById("description").innerHTML = 'Coming Soon';
    document.getElementById("description-link").href = '#';
    resetProjects("project2", "project1", "project4");
  });
} catch(err) {}

try {
  document.getElementById("project4").addEventListener("click", function(){
    document.getElementById("project4").style.borderBottom = '4px solid rgb(91, 192, 222)';
    document.getElementById("description-title").innerHTML = 'Ibingi';
    document.getElementById("description-btn").innerHTML = 'See Project';
    document.getElementById("description").innerHTML = 'Coming Soon';
    document.getElementById("description-link").href = '#';
    resetProjects("project2", "project3", "project1");
  });
} catch(err) {}

var resetProjects = function(p1, p2, p3){
  document.getElementById(p1).style.borderBottom = '0px';
  document.getElementById(p2).style.borderBottom = '0px';
  document.getElementById(p3).style.borderBottom = '0px';
}

