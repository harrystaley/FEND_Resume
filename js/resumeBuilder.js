/* Developed by Harry Staley for project 2 of the Udacity Front End Web Devlopmer Nanodegree */
/* This javascript file contains elements of my resume */
// VARIABLE DECLARATIONS
// BIO INFORMATION JSON
function displayBio() {$.getJSON('js/data/bio.json', function(data) {
    var bio = data;
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

  }).fail(function(e) {
        $('#header').prepend(
          'Bio data could not be loaded.'
        );
      }
    );;
}

// EDUCATION JSON
function displayEducation() {$.getJSON('js/data/education.json', function(data) {
    var education = data;
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
  }).fail(function(e) {
        $('#education').append(
          'Education data could not be loaded.'
        );
      }
    );
}

// PROJECTS JSON
function displayProjects() {$.getJSON('js/data/projects.json', function(data) {
    var projects = data;
   for (var proj = 0; proj < projects.project.length; proj++) {
      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').append(
        HTMLprojectImage.replace('%data%', projects.project[proj].images),
        HTMLprojectTitle.replace('%data%', projects.project[proj].title).replace('#', projects.project[proj].url),
        HTMLprojectDates.replace('%data%', projects.project[proj].dates),
        HTMLprojectDescription.replace('%data%', projects.project[proj].description)
      );
    }
  }).fail(function(e) {
        $('#projects').append(
          'Project data could not be loaded.'
        );
      }
    );
}

// WORK EXPERIENCE JSON
function displayWork() {$.getJSON('js/data/work.json', function(data) {
  var work = data;
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
}).fail(function(e) {
        $('#workExperience').append(
          'Work data could not be loaded.'
        );
      }
    );
}
// this function calls the googleMaps API based upon the data contained in the location attributes in all JSONS
function displayMap() {
    $('#mapDiv').append(googleMap);
  } // end funciton displayMap

displayBio();
displayEducation();
displayProjects();
displayWork();
displayMap();
