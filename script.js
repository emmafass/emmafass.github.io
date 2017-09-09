var doc = document;

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
    doc.getElementById("description").innerHTML = 'An application that allows users to find recipes based on the ingredients they currently have at home and other restrictions.';
    doc.getElementById("description-link").href = 'https://agile-hamlet-35858.herokuapp.com/index.php';
    resetProjects("project1", "project3", "project4");
  });
} catch(err) {}

try {
  doc.getElementById("project3").addEventListener("click", function(){
    doc.getElementById("project3").style.borderBottom = '4px solid rgb(91, 192, 222)';
    doc.getElementById("description-title").innerHTML = 'RGG Educare';
    doc.getElementById("description-btn").innerHTML = 'See Project';
    doc.getElementById("description").innerHTML = "A wordpress website built for a daycare in Cape Town, South Africa that allows the owner to control the company's online presence.";
    doc.getElementById("description-link").href = 'https://rggeducareblog.wordpress.com/';
    resetProjects("project2", "project1", "project4");
  });
} catch(err) {}

try {
  doc.getElementById("project4").addEventListener("click", function(){
    doc.getElementById("project4").style.borderBottom = '4px solid rgb(91, 192, 222)';
    doc.getElementById("description-title").innerHTML = 'Bodega Dolium';
    doc.getElementById("description-btn").innerHTML = 'See Project';
    doc.getElementById("description").innerHTML = 'While participating in a 2 week study abroad program in Mendoza, Argentina, I consulted for a winery called Bodega Dolium. I helped the staff take better control of their online presence by transitioning their old website to a Weebly site.';
    doc.getElementById("description-link").href = 'http://bodegadolium.weebly.com/';
    resetProjects("project2", "project3", "project1");
  });
} catch(err) {}

var resetProjects = function(p1, p2, p3){
  doc.getElementById(p1).style.borderBottom = '0px';
  doc.getElementById(p2).style.borderBottom = '0px';
  doc.getElementById(p3).style.borderBottom = '0px';
}

