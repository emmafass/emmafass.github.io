var doc = document;

// Change Project Info
try {
  doc.getElementById("project1").addEventListener("click", function(){
    doc.getElementById("project1").style.borderBottom = '4px solid rgb(91, 192, 222)';
    doc.getElementById("description-title").innerHTML = 'Big Event';
    doc.getElementById("description-btn").innerHTML = 'See Project';
    doc.getElementById("description").innerHTML = 'A web portal for volunteers and job site requestors to create and manage an account for the Big Event - a day of volunteering at UVA.';
    doc.getElementById("description-link").href = 'https://cs3240sp17g15.herokuapp.com/login/?next=/';
    resetProjects("project2", "project3", "project4");
  });
} catch(err) {}

try {
  doc.getElementById("project2").addEventListener("click", function(){
    doc.getElementById("project2").style.borderBottom = '4px solid rgb(91, 192, 222)';
    doc.getElementById("description-title").innerHTML = 'Banking Script';
    doc.getElementById("description-btn").innerHTML = 'See Project';
    doc.getElementById("description").innerHTML = 'A script run in Google Apps Script that uses Plaid to pull past transactions into a Google Sheet for analysis.';
    doc.getElementById("description-link").href = 'https://github.com/emmafass/plaid-google-scripts';
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

