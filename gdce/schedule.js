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
        const schedule = document.getElementById('schedule-wrapper');
        for (let i = 0; i < Events.length; i++) {
            let event = createEventItem(Events[i]);
            schedule.appendChild(event);
        }
    }
    
    Events = [

        
    ];

    
    
    loadEvents();
}