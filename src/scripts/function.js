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

function formatDate(day, month, year) {
    let separartor_symbol = "/";
    return day + separartor_symbol + (month+1) + separartor_symbol + year;
}

function formatHour(hours, mins, secs) {
    let separartor_symbol = ":";
    return fixHours(hours) + separartor_symbol + fixMins(mins) + separartor_symbol + fixSecs(secs);
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