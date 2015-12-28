/* Developed by Harry Staley for project 2 of the Udacity Front End Web Devlopmer Nanodegree */
/* This javascript file contains elements of my resume */

// VARIABLE DECLARATIONS

// biographical information JSON
var bio = {
	"name" : "Harry Staley",
	"role" : "Web Developer and Data Analyst",
	"contacts" : {
		"mobile" : "330-718-1876",
		"email" : "staleyh@gmail.com",
		"github" : "maogm316",
    "location" : "San Antonio, TX",
    "LinkedIn" : "harrystaley"
	},
  "welcomeMessage" : "Empowering people through technology.",
	"skills" : ["VBA", "HTML 5", "CSS 3","JSON","jQuery","Java Script", "Computer Programming", "Basic Command LIne Linux", "SAP Web Intelligence", "Advanced Excel"],
	"bioPic" : "images/TBHF_Photo.jpg"
};

// education JSON
var education = {
  "schools" : [
    {
      "name" : "Central Bible College",
      "location" : "Springfield, MO",
      "degrees" : "B.A., A.A.",
      "majors" : "Youth Minestry/Bible, Deaf Minestry",
      "dates" : "1997 - 2007"
    },
    {
      "name" : "Ozarks Technical Community College",
      "location" : "Springfield, MO",
      "degrees" : "A.A.S., Certificate",
      "majors" : "Business and Marketing, Computer Information Technology",
      "dates" : "2005 - 2009"
    },
    {
      "name" : "St. Phillips College",
      "location" : "San Antonio, TX",
      "degrees" : "A.S.",
      "majors" : ["Computer Science", "Mathematics"],
      "dates" : "2014 - Present"
    },
    {
      "name" : "Texas A&M San Antonio",
      "location" : "San Antonio, TX",
      "degrees" : "B.S.",
      "majors" : "Computer Science, Mathematics",
      "dates" : "2015 - Present"
    }
  ],

  "onlineCourses" : [
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "dates": "Dec 2015",
      "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    },
    {
      "title": "Responsive Web Ddsign Fundamentals",
      "school": "Udacity",
      "dates": "Dec 2015",
      "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    },
    {
      "title": "Responsive Images",
      "school": "Udacity",
      "dates": "Dec 2015",
      "url": "https://www.udacity.com/course/responsive-images--ud882"
    },
    {
      "title": "Javascript Basics",
      "school": "Udacity",
      "dates": "Dec 2015",
      "url": "https://www.udacity.com/course/javascript-basics--ud804"
    },
    {
      "title": "Intro to JQUERY",
      "school": "Udacity",
      "dates": "Dec 2015",
      "url": "https://www.udacity.com/course/intro-to-jquery--ud245"
    }
  ]
};

// projects JSON
var projects = {
  "project" : [
    {
      "title" : "Online Portfolio",
      "dates" : "Dec 2015",
      "description" : "Online Portfolio for my Udacity Projects",
      "images" : "images/Online_Portfolio_Screenshot.png"
    }
  ]
};

// work experience JSON
var work = {
  "jobs": [
    {
      "position" : "Procurement Systems Analyst",
      "employer" : "U.S. Army: MIssion and Installation Contracting Command",
      "location" : "Fort Sam Houston, TX",
      "dates" : "2011 - Present",
      "description" : "Anylize data in multiple forms as well as work on software projects on an as needed basis."
    },
    {
      "position" : "Data Analyst",
      "employer" : "Scholastic Inc.",
      "location" : "New York, NY",
      "dates" : "2009 - 2011",
      "description" : "Anylize data in multiple forms as well as work on software projects on an as needed basis."
    },
    {
      "position" : "Laptop Support Technician",
      "employer" : "Teletech",
      "location" : "Springfield, MO",
      "dates" : "2008 - 2009",
      "description" : "Suport HP customers with laptop suport issues while selling products to aleviate future issues."
    }
  ]
};

// MAIN CODE

// add a button to execute the internationalize function on the main page
$("#main").append(internationalizeButton);

// display each of the sections of the resume
displayWork();
displayHeader();
displayProjects();
displayMap();
displayEducation();
displayFooter();

// FUNCTION DEFINITIONS

// this funciton displays the header of the page
function displayHeader() {
  if (bio !== null) { 
    // add all of the main items to the header
    $("#headerInfo").append(
      HTMLheaderName.replace("%data%", bio.name),
      HTMLheaderRole.replace("%data%", bio.role),
      HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage),
      HTMLskillsStart
    );

    $("#profilePic").append(
      HTMLbioPic.replace("%data%", bio.bioPic)
    );

    // iterate through the skills adding each of them to the header
    for (var i in bio.skills) {
      $("#skills").append(
        HTMLskills.replace("%data%", bio.skills[i])
      );
    };

    // adds the contact list to the header
    $("#topContacts").append(
      HTMLlocation.replace("%data%", bio.contacts.location),
      HTMLmobile.replace("%data%", bio.contacts.mobile),
      HTMLemail.replace("%data%", bio.contacts.email),
      HTMLgithub.replace("%data%", bio.contacts.github),
      HTMLlinkedIn.replace("%data%", bio.contacts.LinkedIn)
    );
  }
}

// this functions displays the data contained in the work JSON
function displayWork() {
  for (var i in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(
      HTMLworkEmployer.replace("%data%", work.jobs[i].employer),
      HTMLworkTitle.replace("%data%", work.jobs[i].position),
      HTMLworkLocation.replace("%data%", work.jobs[i].location),
      HTMLworkDates.replace("%data%", work.jobs[i].dates),
      HTMLworkDescription.replace("%data%", work.jobs[i].description)
    );
  };
}

// this function displays the data contained in the project JSON
function displayProjects() {
  for (var i in projects.project) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(
      HTMLprojectTitle.replace("%data%", projects.project[i].title),
      HTMLprojectDates.replace("%data%", projects.project[i].dates),
      HTMLprojectDescription.replace("%data%", projects.project[i].description),
      HTMLprojectImage.replace("%data%", projects.project[i].images)
    )
  };
}

// this function displays the data contained in the educaiton JSON
function displayEducation() {
  // append schools to resume
  for (var i in education.schools) {
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(
      HTMLschoolName.replace("%data%", education.schools[i].name),
      HTMLschoolDegree.replace("%data%", education.schools[i].degrees),
      HTMLschoolDates.replace("%data%", education.schools[i].dates),
      HTMLschoolLocation.replace("%data%", education.schools[i].location),
      HTMLschoolMajor.replace("%data%", education.schools[i].majors)
    );
  };

  // add online classes section
  $(".education-entry:last").append(HTMLonlineClasses);

  // append online classes to resume
  for (var i in education.onlineCourses) {
    $(".education-entry:last").append(
      HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title),
      HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school),
      HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates),
      HTMLonlineURL.replace("%data%", education.onlineCourses[i].url)
    );
  };
}

// this function calls the googleMaps API based upon the data contained in the location attributes in all JSONS
function displayMap() {
  $("#mapDiv").append(googleMap);
}

function displayFooter() {
  // adds the contact list to the header
  $("#footerContacts").append(
    HTMLmobile.replace("%data%", bio.contacts.mobile),
    HTMLemail.replace("%data%", bio.contacts.email),
    HTMLgithub.replace("%data%", bio.contacts.github),
    HTMLlinkedIn.replace("%data%", bio.contacts.LinkedIn)
  );
}

// this function internationalizes the name
function inName(name) {
  var name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}