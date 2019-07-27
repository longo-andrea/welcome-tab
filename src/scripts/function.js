// DATE FORMATTING FUNCTION

function weekdayToText(weekday) {
    if(weekday == 0)
        return "Sunday";
    else if(weekday == 1)
        return "Monday" 
    else if(weekday == 2)
        return "Thursday"         
    else if(weekday == 3)
        return "Wednesday"         
    else if(weekday == 4)
        return "Tuesday"         
    else if(weekday == 5)
        return "Friday"         
    else if(weekday == 6)
        return "Saturday"         
}

function formatDate(day, month, year, dmySeparator) {
    return day + dmySeparator + (month + 1) + dmySeparator + year;
}

function fixHours(hours) {
    if(hours < 10)
        return 0 + "" + hours;
    return hours;
}

function fixMins(mins) {
    if(mins < 10)
        return 0 + "" + mins;
    return mins;
}

function fixSecs(secs) {
    if(secs < 10)
        return 0 + "" + secs;
        return secs;
}

function toggleWeekDay(target) {
    if(target == true) {
        document.querySelector("#preferences-day > input").checked = true;
        document.querySelector("#week-day").style.display = 'inline';
        chrome.storage.sync.set({ "weekday" : "on" });
    }
    else {
        document.querySelector("#preferences-day > input").checked = false;
        document.querySelector("#week-day").style.display = 'none';
        chrome.storage.sync.set({ "weekday" : "off" });
    }
}

function toggleDate(target) {
    if(target == true) {
        document.querySelector("#preferences-date > input").checked = true;
        document.querySelector("#d-m-y").style.display = 'inline';
        chrome.storage.sync.set({ "date" : "on" });
    }
    else {
        document.querySelector("#preferences-date > input").checked = false;
        document.querySelector("#d-m-y").style.display = 'none';
        chrome.storage.sync.set({ "date" : "off" });
    }
}

function toggleClock(target) {
    if(target == true) {
        document.querySelector("#preferences-clock > input").checked = true;
        document.querySelector("#hour").style.display = 'inline';
        chrome.storage.sync.set({ "clock" : "on" });
    }
    else {
        document.querySelector("#preferences-clock > input").checked = false;
        document.querySelector("#hour").style.display = 'none';
        chrome.storage.sync.set({ "clock" : "off" });
    }
}

function toggleSeconds(target) {
    if(target == true) {
        document.querySelector("#preferences-seconds > input").checked = true;
        document.querySelector("#hour #s").style.display = 'inline';
        chrome.storage.sync.set({ "seconds" : "on" });
    }
    else {
        document.querySelector("#preferences-seconds > input").checked = false;
        document.querySelector("#hour #s").style.display = 'none';
        chrome.storage.sync.set({ "seconds" : "off" });
    }
}

function toggleBookmarks(target) {
    if(target == true) {
        document.querySelector("#bookmarks").classList.add('activated')
        document.querySelector("#preferences-bookmarks-on > input").checked = true;
        chrome.storage.sync.set({ "bookmarksAlwaysOn" : "on" });
    }
    else {
        document.querySelector("#bookmarks").classList.remove('activated')
        document.querySelector("#preferences-bookmarks-on > input").checked = false;
        chrome.storage.sync.set({ "bookmarksAlwaysOn" : "off" });
    }
}