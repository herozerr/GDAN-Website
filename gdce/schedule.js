class Event {
constructor(name, host, times, description, location, locationURL) {
this.name = name;
this.host = host;
this.times = times;
this.description = description;
this.location = location;
this.locationURL = locationURL;
}

getName() {
return this.name;
}
getHost() {
return this.host;
}
getTimes() {
return this.times;
} 
getDescription() {
return this.description;
}
getLocation() {
return this.location;
}
getLocationURL() {
return this.locationURL;
}

}

function start() {

let Events = [];

function convertUnixToDate(time) {
let date = new Date(time);
console.log('day: ' + date.getDay());
let day = '';
switch (date.getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
let AMPM = date.getHours();
if (AMPM > 12) {AMPM = 'PM'}
else {AMPM = 'AM';}
let retVal = `${day}, July ${date.getDate()}, ${date.getHours()%12}:${String(date.getMinutes()).padEnd(2, '0')} ${AMPM}`
return retVal;
}

function createEventItem(event) {


let container = document.createElement('div');
container.className = "schedule-item";
let icon = document.createElement('img');
icon.className = "schedule-icon";
icon.src = `./Assets/EventHosts/${event.getHost()}.png`;
container.appendChild(icon);

let infoWrapper = document.createElement("div");
infoWrapper.className = "schedule-info-wrapper";

let name = document.createElement("p");
name.className = "schedule-name";
name.innerHTML = event.getName();
infoWrapper.appendChild(name);

let host = document.createElement("p");
host.className = "schedule-host";
host.innerHTML = event.getHost();
infoWrapper.appendChild(host);

let time = document.createElement("p");
time.className = "schedule-time";
let timeList = event.getTimes();
console.log(timeList);
let timeStart = convertUnixToDate(timeList[0]);
let timeEnd = convertUnixToDate(timeList[1]);
time.innerHTML = timeStart + " - " + timeEnd;
infoWrapper.appendChild(time);

let description = document.createElement("p");
description.className = "schedule-description";
description.innerHTML = event.getDescription();
infoWrapper.appendChild(description);

let location = document.createElement("p");
location.className = "schedule-location";
if (event.getLocationURL() != null) {
        location.innerHTML = "Location: " + `<a href='${event.getLocationURL()}' target='_blank'>${event.getLocation()}</a>`;
    }
    else {
            location.innerHTML = "Location: " + event.getLocation();
            }
        infoWrapper.appendChild(location);
        
        container.appendChild(infoWrapper);
        return container;
        
        
    }
    
    function loadEvents() {
        console.log('loading events...');
        console.log(Events);
        console.log(Events.length);
        const schedule = document.getElementById('schedule-wrapper');
        for (let i = 0; i < Events.length; i++) {
            let event = createEventItem(Events[i]);
            console.log(event);
            
            schedule.appendChild(event);
        }
    }
    
    
    event1 = new Event(
        "Build Jam", // event name
        "Herozer", // host name
        [1784271600000, 1784962800000], // start&endtime
        "Enjoy building for a week as everyone streams and donates!", // description string
        "Geometry Dash", // location string
        null // location URL
    )

    event2 = new Event(
        "Meccha Chameleon X Geometry Dash",
        "risp",
        [1784397600000, 1784408400000],
        "Up to 15 Geometry Dash YouTubers / Streamers will be going against each other in Meccha chameleon",
        "Meccha Chameleon",
        null
    )

    event3 = new Event(
        "GeoGuessr x Geometry Dash YouTuber Tournament",
        "MathGenius",
        [1784746800000, 1784764800000],
        "Hello everyone! As part of the 2026 GD Charity Event, I am hosting a GeoGuessr tournament with many of your favorite Geometry Dash YouTubers!<br>Which Geometry Dash YouTuber will reign victorious and be crowned the \"Champion of the Dashlands\"? Tune in to find out...",
        "youtube.com/@mathgeniusgd",
        "https:/\/youtube.com/@mathgeniusgd"
    )

    event4 = new Event(
        "Dashers take on Splatoon 3 Tournament",
        "lunaaakh",
        [1784764800000, 1784778300000],
        "For at minimum 2 hours, myself, AlePlayz, Sonicstep and symspace will be participating in a Splatoon Tournament as a full GD community-based team! It will be joyful and whimsical, AND for every individual game we win, i will be giving 5$ to the charity.<br>I will be streaming it on my twitch, so I hope you can come support our goofy shenanigans! :lunaaaSilly:",
        "https://www.twitch.tv/lunaaakh",
        "https:/\/www.twitch.tv/lunaaakh"
    )
    
    Events = [
        event1,
        event2,
        event3,
        event4
    ];
    
    
    loadEvents();
}