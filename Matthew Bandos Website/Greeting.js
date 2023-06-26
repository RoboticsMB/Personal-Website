document.addEventListener("DOMContentLoaded", function() {
    // Get the user's current date and time
    var currentTime = new Date();

    // Get the user's timezone offset in minutes
    var timezoneOffset = currentTime.getTimezoneOffset();

    // Convert the timezone offset to hours
    var timezoneOffsetHours = timezoneOffset / 60;

    // Get the user's current hour in their timezone
    var currentHour = currentTime.getHours() - timezoneOffsetHours;
	
	if (currentHour < 0) {
    	currentHour += 24;
	} else if (currentHour >= 24) {
    	currentHour -= 24;
	}

    // Define the greetings based on the time of day
    var morningGreeting = "Good morning!";
    var afternoonGreeting = "Good afternoon!";
    var eveningGreeting = "Good evening!";
    var defaultGreeting = "Hello!";

    // Determine the appropriate greeting based on the current hour
    var greeting;
    if (currentHour >= 0 && currentHour < 12) {
        greeting = morningGreeting;
    } else if (currentHour >= 12 && currentHour < 17) {
        greeting = afternoonGreeting;
    } else {
        greeting = eveningGreeting;
    }

    if (typeof greeting === "undefined") {
        greeting = defaultGreeting;
    }

    // Display the greeting on the website
    document.getElementById("greeting").textContent = greeting;
});