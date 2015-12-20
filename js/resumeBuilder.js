/* Developed by Harry Staley for project 2 of the Udacity Front End Web Devlopmer Nanodegree */
/* This javascript file contains elements of my resume */

// VARIABLE DECLARATIONS

// biographical information JSON
var bio = {
	"name" : "Harry Staley",
	"role" : "Web Developer and Data Analyst",
	"contactMe" : {
		"mobile" : "330-718-1876",
		"email" : "staleyh@gmail.com",
		"github" : "maogm316"
	},
  "welcomeMessage" : "Welcome to my online resume.",
	"skills" : ["VBA", "HTML 5", "CSS 3", "Computer Programming", "Basic Command LIne Linux", "SAP Web Intelligence", "Advanced Excel"],
	"bioPic" : "images/TBHF_Photo.jpg"
};

// projects JSON
var projects = {
  "projects" : [
    {
      "title" : "[project title]",
      "dates" : "[project dates]",
      "description" : "[project description]",
      "images" : "[project images]"
    }
  ]
};

// work experience JSON
var work = {
  "jobs": [
    {
      "position" : "Procurement Systems Analyst",
      "employer" : "U.S. Army: MIssion and Installation Contracting Command",
      "location" : "San Antonio, TX, US",
      "dates" : "2011 - Present",
      "description" : "Anylize data in multiple forms as well as work on software projects on an as needed basis."
    },
    {
      "position" : "Data Analyst",
      "employer" : "Scholastic Inc.",
      "location" : "Telework",
      "dates" : "2009 - 2011",
      "description" : "Anylize data in multiple forms as well as work on software projects on an as needed basis."
    },
    {
      "position" : "Laptop Support Technician",
      "employer" : "Teletech",
      "location" : "Springfield, MO, US",
      "dates" : "2008 - 2009",
      "description" : "Suport HP customers with laptop suport issues while selling products to aleviate future issues."
    }
  ]
};

// education JSON
var education = {
  "schools" : [
		{
			"name" : "Central Bible College",
			"city" : "Springfield, MO, US",
			"degrees" : ["B.A.", "A.A."],
			"majors" : ["Youth Minestry/Bible", "Deaf Minestry"],
			"datesAttended" : "1997 - 2007"
		},
		{
			"name" : "Ozarks Technical Community College",
			"city" : "Springfield, MO, US",
			"degrees" : ["A.A.S.", "Certificate"],
			"majors" : ["Business and Marketing", "Computer Information Technology"],
			"datesAttended" : "2005 - 2009"
		},
		{
			"name" : "St. Phillips College",
			"city" : "San Antonio, TX, US",
			"degrees" : ["A.S."],
			"majors" : ["Computer Science", "Mathematics"],
			"datesAttended" : "2014 - Present"
		},
		{
			"name" : "Texas A&M San Antonio",
			"city" : "San Antonio, TX, US",
			"degrees" : ["B.S."],
			"majors" : ["Computer Science", "Mathematics"],
			"datesAttended" : "2015 - Present"
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
    }
  ]
};

// MAIN CODE BLOCK



// returns the location of a mouse click to the console.
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

// add a button to execute the internationalize function on the main page
$("#main").append(internationalizeButton);

// display each of the sections of the resume
displayWork();
displayHeader();

// FUNCTION DEFINITIONS

function displayHeader() {
  if (bio !== null) { 
    // add all of the main items to the header
    $("#header").append(
      HTMLheaderName.replace("%data%", bio.name)+
      HTMLheaderRole.replace("%data%", bio.role)+
      HTMLskillsStart
    );

    // iterate through the skills adding each of them to the header
    for (var i in bio.skills) {
      $("#skills").append(
        HTMLskills.replace("%data%", bio.skills[i])
      );
    };
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

// this function internationalizes the name
function inName(name) {
  var name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}
