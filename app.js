//CLASS

class Bus {
    //the different properties that bus objects should have
    constructor (name, stops, colour, monFriTimes, FriTimes){
        this.name = name;
        this.stops = stops;
        this.monFriTimes = monFriTimes;
        //more properties will go here
    }

// getStops function that all bus objects will get
getStops (){
    //not the actual function. just a demo
    console.log ("this function will get all the stops for" + this.name)
    console.log (this.stops)
}
// mosre function objects go here
}

//OBJECTS
var awapuni = new Bus ("Awapuni", awapuniStops, "#469238", awapuniTimesMonFri, awapuniTimesFriOnly)

var rugby = new Bus ()

//JQUERY STUFF
$(document).ready(function(){



});
