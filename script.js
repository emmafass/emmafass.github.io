// Mac Animation
var doc = document;
var move_count = 0;
var img_count = 1;
var img_name = "images/Mac-Screen-0.png";
var myListener = function(e) {
  move_count = move_count + 1;
  console.log(move_count);
  if ( (img_count*15) == move_count && img_count <= 17){
    img_name = "images/Mac-Screen-" + img_count.toString() + ".png";
    console.log(img_count + ": " + img_name);
    img_count = img_count + 1;
  } 
  doc.getElementById("mac").src = img_name; 
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

