(function() {
    'use strict';

    /* ---------------------
    --------- INIT ---------
    ---------------------- */

    // Set the correct locales
    let objects = document.getElementsByTagName('*');
    for(let i = 0; i < objects.length; i++) {
        if (objects[i].dataset && objects[i].dataset.i18n) {
            objects[i].innerHTML = chrome.i18n.getMessage(objects[i].dataset.i18n);
        }
    }

    // Set the correct Preferences
    chrome.storage.sync.get("weekday", function(items){
        if(items.weekday == 'off') 
            toggleWeekDay(false);
        else
            toggleWeekDay(true);
    });

    chrome.storage.sync.get("date", function(items){
        if(items.date == 'off') 
            toggleDate(false);
        else
            toggleDate(true);
    });

    let dmySeparator = '/';
    chrome.storage.sync.get("dateSeparator", function(items){
        dmySeparator = items.dateSeparator;
        document.querySelector("#preferences-date-separator > input").value = dmySeparator;
    });

    let hourSeparator = ': ';
    chrome.storage.sync.get("hourSeparator", function(items){
        hourSeparator = items.hourSeparator;
        document.querySelector("#preferences-hour-separator > input").value = hourSeparator;
    });

    chrome.storage.sync.get("clock", function(items){
        if(items.clock == 'off') 
            toggleClock(false);
        else
            toggleClock(true);
    });

    chrome.storage.sync.get("seconds", function(items){
        if(items.seconds == 'off') 
            toggleSeconds(false);
        else
            toggleSeconds(true);
    });

    chrome.storage.sync.get("bookmarksAlwaysOn", function(items){
        if(items.bookmarksAlwaysOn == 'on') 
            toggleBookmarks(true);
        else
            toggleBookmarks(false);
    });

    /* ---------------------
    --------- DATE ---------
    ---------------------- */
    setInterval(function() {
        let date = new Date;
        
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();

        let weekday = date.getDay();
        let hours = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds(); 

        document.querySelector("#week-day").innerHTML = weekdayToText(weekday);
        document.querySelector("#d-m-y").innerHTML = formatDate(day, month, year, dmySeparator);
        document.querySelector("#hour #h").innerHTML = fixHours(hours);
        document.querySelector("#hour #m").innerHTML = hourSeparator + " " + fixMins(mins);
        document.querySelector("#hour #s").innerHTML = hourSeparator + " " + fixSecs(secs);
    }, 500);

    /* ---------------------
    ------- SETTINGS -------
    --------------------- -*/

    // Settings icon click
    document.querySelector("#header_settings").children[0].addEventListener('click', function(e){
        document.querySelector("#settings").classList.toggle("activated");
    });

    // Settings tabs
    let settings_tab = document.querySelectorAll("#settings_navigation > button");
    let settings_tabcontent = document.querySelectorAll("#settings_content > div");
    for(let i = 0; i < settings_tab.length; i++) {
        settings_tab[i].addEventListener('click', function(e){
            // remove activated from all tab links
            settings_tab.forEach( button => {
                button.classList.remove('activated');
            });
            // remove activated from all tab content
            settings_tabcontent.forEach( tabcontent => {
                tabcontent.classList.remove('activated');
            });

            settings_tab[i].classList.add('activated');
            settings_tabcontent[i].classList.add('activated');
        });
    }

    // Day settings
    document.querySelector("#preferences-day > input").addEventListener('change', function(e) {
        if(e.target.checked)
            toggleWeekDay(true);
        else
            toggleWeekDay(false);
    });

    // Date settings
    document.querySelector("#preferences-date > input").addEventListener('change', function(e) {
        if(e.target.checked)
            toggleDate(true);
        else
            toggleDate(false);   
    });

    document.querySelector("#preferences-date-separator > input").addEventListener('change', function(e){
        dmySeparator = e.target.value;
        chrome.storage.sync.set({ "dateSeparator" : dmySeparator });
    });

    // Clock settings
    document.querySelector("#preferences-clock > input").addEventListener('change', function(e) {
        if(e.target.checked)
            toggleClock(true);
        else
            toggleClock(false);
    });

    document.querySelector("#preferences-seconds > input").addEventListener('change', function(e) {
        if(e.target.checked)
            toggleSeconds(true);
        else
            toggleSeconds(false);
    });

    document.querySelector("#preferences-hour-separator").addEventListener('change', function(e){
        hourSeparator = e.target.value;
        chrome.storage.sync.set({ "hourSeparator" : hourSeparator });
    });

    // Bookmarks settings
    document.querySelector("#preferences-bookmarks-on > input").addEventListener('change', function(e) {
        if(e.target.checked)
            toggleBookmarks(true)
        else
            toggleBookmarks(false)
    });

    /* ---------------------
    ------- BOOKMARKS ------
    --------------------- -*/

    // BOOKMARKS ARROW DOWN CLICK
    document.querySelector("#bookmarks-arrow").children[0].addEventListener('click', function(e){
        document.querySelector("#bookmarks").classList.toggle("activated");
    });

})()  