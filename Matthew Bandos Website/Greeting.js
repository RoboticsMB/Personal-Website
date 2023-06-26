document.addEventListener("DOMContentLoaded", function() {

    var currentTime = new Date();
	
	
	var currentHour = currentTime.getHours();
	
	if (currentHour < 0) {
    	currentHour += 24;
	} else if (currentHour >= 24) {
    	currentHour -= 24;
	}


    var morningGreeting = "Good morning!";
    var afternoonGreeting = "Good afternoon!";
    var eveningGreeting = "Good evening!";
    var defaultGreeting = "Hello!";


	

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

	
    document.getElementById("greeting").textContent = greeting;
});