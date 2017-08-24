// Mac Animation
var doc = document;
var count = 0;
var myListener = function(e) {
  count = count + 1;
  console.log(count);
  if (count > 235)
    doc.getElementById("mac").src = "images/Mac-Screen-17.png";
  else if (count > 220)
    doc.getElementById("mac").src = "images/Mac-Screen-16.png";
  else if (count > 205)
    doc.getElementById("mac").src = "images/Mac-Screen-15.png";
  else if (count > 190)
    doc.getElementById("mac").src = "images/Mac-Screen-14.png";
  else if (count > 175)
    doc.getElementById("mac").src = "images/Mac-Screen-13.png";
  else if (count > 160)
    doc.getElementById("mac").src = "images/Mac-Screen-12.png";
  else if (count > 145)
    doc.getElementById("mac").src = "images/Mac-Screen-11.png";
  else if (count > 130)
    doc.getElementById("mac").src = "images/Mac-Screen-10.png";
  else if (count > 115)
    doc.getElementById("mac").src = "images/Mac-Screen-9.png";
  else if (count > 100)
    doc.getElementById("mac").src = "images/Mac-Screen-8.png";
  else if (count > 85)
    doc.getElementById("mac").src = "images/Mac-Screen-7.png";
  else if (count > 70)
    doc.getElementById("mac").src = "images/Mac-Screen-6.png";
  else if (count > 55)
    doc.getElementById("mac").src = "images/Mac-Screen-5.png";
  else if (count > 50)
    doc.getElementById("mac").src = "images/Mac-Screen-4.png";
  else if (count > 35)
    doc.getElementById("mac").src = "images/Mac-Screen-3.png";
  else if (count > 20)
    doc.getElementById("mac").src = "images/Mac2.svg";
  else if (count > 5)
    doc.getElementById("mac").src = "images/Mac1.svg"; 
};

// Change Project Info
try {
  doc.getElementById("project1").addEventListener("click", function(){
    doc.getElementById("project1").style.borderBottom = '4px solid rgb(91, 192, 222)';
    doc.getElementById("description-title").innerHTML = 'Lokahi';
    doc.getElementById("description-btn").innerHTML = 'See Project';
    doc.getElementById("description").innerHTML = 'An application to crowdsource information about investment opportunities and collaborate with other potential investors.';
    doc.getElementById("description-link").href = 'https://cs3240sp17g15.herokuapp.com/login/?next=/';
    resetProjects("project2", "project3", "project4");
  });
} catch(err) {}

try {
  doc.getElementById("project2").addEventListener("click", function(){
    doc.getElementById("project2").style.borderBottom = '4px solid rgb(91, 192, 222)';
    doc.getElementById("description-title").innerHTML = 'Rapid Recipes';
    doc.getElementById("description-btn").innerHTML = 'See Project';
    doc.getElementById("description").innerHTML = 'Coming Soon';
    doc.getElementById("description-link").href = '#';
    resetProjects("project1", "project3", "project4");
  });
} catch(err) {}

try {
  doc.getElementById("project3").addEventListener("click", function(){
    doc.getElementById("project3").style.borderBottom = '4px solid rgb(91, 192, 222)';
    doc.getElementById("description-title").innerHTML = 'Fashion Quiz';
    doc.getElementById("description-btn").innerHTML = 'See Project';
    doc.getElementById("description").innerHTML = 'Coming Soon';
    doc.getElementById("description-link").href = '#';
    resetProjects("project2", "project1", "project4");
  });
} catch(err) {}

try {
  doc.getElementById("project4").addEventListener("click", function(){
    doc.getElementById("project4").style.borderBottom = '4px solid rgb(91, 192, 222)';
    doc.getElementById("description-title").innerHTML = 'Ibingi';
    doc.getElementById("description-btn").innerHTML = 'See Project';
    doc.getElementById("description").innerHTML = 'Coming Soon';
    doc.getElementById("description-link").href = '#';
    resetProjects("project2", "project3", "project1");
  });
} catch(err) {}

var resetProjects = function(p1, p2, p3){
  doc.getElementById(p1).style.borderBottom = '0px';
  doc.getElementById(p2).style.borderBottom = '0px';
  doc.getElementById(p3).style.borderBottom = '0px';
}

