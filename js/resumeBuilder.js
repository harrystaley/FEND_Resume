/* Developed by Harry Staley for project 2 of the Udacity Front End Web Devlopmer Nanodegree */
/* This javascript file contains elements of my resume */
// VARIABLE DECLARATIONS
// BIO INFORMATION JSON
var bio;
$.ajax({
  url: "data/bio.json",
  dataType: "jsonp"
}).done(function(data) {
  bio = data;
});

// EDUCATION JSON
var education;
$.getJSON('data/education.json', function(data) {
  education = data;
});

// PROJECTS JSON
var projects;
$.getJSON('data/projects.json', function(data) {
  projects = data;
});

// WORK EXPERIENCE JSON
var work;
$.getJSON('data/work.json', function(data) {
  work = data;
});

// FUNCTION DEFINITIONS

// this funciton displays the header of the page
bio.display = function() {
    // add all of the main items to the header
    $('#header').prepend(
      HTMLheaderName.replace('%data%', bio.name),
      HTMLheaderRole.replace('%data%', bio.role)
    );

    $('#headerInfo').append(
      HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage),
      HTMLskillsStart
    );

    $('#profilePic').append(
      HTMLbioPic.replace('%data%', bio.biopic)
    );

    // iterate through the skills adding each of them to the header
    for (var skill = 0; skill < bio.skills.length; skill++) {
      $('#skills').append(
        HTMLskills.replace('%data%', bio.skills[skill])
      );
    }

    // adds the contact list to the header
    $('#topContacts').append(
      HTMLlocation.replace('%data%', bio.contacts.location),
      HTMLmobile.replace('%data%', bio.contacts.mobile),
      HTMLemail.replace('%data%', bio.contacts.email),
      HTMLgithub.replace('%data%', bio.contacts.github),
      HTMLlinkedin.replace('%data%', bio.contacts.linkedin)
    );

    // adds the contact list to the footer
    $('#footerContacts').append(
      HTMLmobile.replace('%data%', bio.contacts.mobile),
      HTMLemail.replace('%data%', bio.contacts.email),
      HTMLgithub.replace('%data%', bio.contacts.github),
      HTMLlinkedin.replace('%data%', bio.contacts.linkedin)
    );
  } // end function display bio

// this functions displays the data contained in the work JSON
work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
      $('#workExperience').append(HTMLworkStart);
      $('.work-entry:last').append(
        HTMLworkEmployer.replace('%data%', work.jobs[job].employer).replace('#', work.jobs[job].url) +
        HTMLworkTitle.replace('%data%', work.jobs[job].title),
        HTMLworkLocation.replace('%data%', work.jobs[job].location),
        HTMLworkDates.replace('%data%', work.jobs[job].dates),
        HTMLworkDescription.replace('%data%', work.jobs[job].description)
      );
    }
  } // end function display work

// this function displays the data contained in the project JSON
projects.display = function() {
    for (var proj = 0; proj < projects.project.length; proj++) {
      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').append(
        HTMLprojectImage.replace('%data%', projects.project[proj].images),
        HTMLprojectTitle.replace('%data%', projects.project[proj].title).replace('#', projects.project[proj].url),
        HTMLprojectDates.replace('%data%', projects.project[proj].dates),
        HTMLprojectDescription.replace('%data%', projects.project[proj].description)
      );
    }
  } // end function displayProjects

// this function displays the data contained in the educaiton JSON
education.display = function() {
  // append schools to resume
  for (var school = 0; school < education.schools.length; school++) {
    $('#education').append(HTMLschoolStart);
    $('.education-entry:last').append(
      HTMLschoolName.replace('%data%', education.schools[school].name).replace('#', education.schools[school].url) +
      HTMLschoolDegree.replace('%data%', education.schools[school].degree),
      HTMLschoolDates.replace('%data%', education.schools[school].dates),
      HTMLschoolLocation.replace('%data%', education.schools[school].location),
      HTMLschoolMajor.replace('%data%', education.schools[school].majors)
    );
  } // end function displayEducation

  // add online classes section
  $('.education-entry:last').append(HTMLonlineClasses);

  // append online classes to resume
  for (var course = 0; course < education.onlineCourses.length; course++) {
    $('.education-entry:last').append(
      HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title).replace('#', education.onlineCourses[course].url),
      HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school),
      HTMLonlineDates.replace('%data%', education.onlineCourses[course].date)
    );
  }
}

// this function calls the googleMaps API based upon the data contained in the location attributes in all JSONS
function displayMap() {
    $('#mapDiv').append(googleMap);
  } // end funciton displayMap

// DISPLAY EACH RESUME SECTION
bio.display();
work.display();
projects.display();
education.display();
displayMap();