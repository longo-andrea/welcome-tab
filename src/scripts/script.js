(function() {
    'use strict';
    
    /* ---------------------
    --------- INIT ---------
    ---------------------- */

    // Set the correct locales
    let elements = document.getElementsByTagName('*');
    for(let i = 0; i < elements.length; i++) {
        if (elements[i].dataset && elements[i].dataset.i18n) {
            elements[i].innerHTML = chrome.i18n.getMessage(elements[i].dataset.i18n);
        }
    }

    let dmySeparator = window.localStorage.getItem('dateSeparator');
    if(dmySeparator == null)
        dmySeparator = '/';
    document.querySelector("#preferences-date-separator > input").value = dmySeparator;

    let hourSeparator = window.localStorage.getItem('hourSeparator');
    if(hourSeparator == null)
        hourSeparator = ' : ';
    document.querySelector("#preferences-hour-separator > input").value = hourSeparator;
    
    toggleWeekDay(window.localStorage.getItem('weekday') == 'on');
    
    toggleDate(window.localStorage.getItem('date') == 'on');
    
    toggleClock(window.localStorage.getItem('clock') == 'on');
    
    toggleSeconds(window.localStorage.getItem('seconds') == 'on');



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

    // Day toggle settings
    document.querySelector("#preferences-day > input").addEventListener('change', function(e) {
        if(e.target.checked)
            toggleWeekDay(true);
        else
            toggleWeekDay(false);
    });

    // Date toggle settings
    document.querySelector("#preferences-date > input").addEventListener('change', function(e) {
        if(e.target.checked)
            toggleDate(true);
        else
            toggleDate(false);   
    });

    document.querySelector("#preferences-date-separator > input").addEventListener('change', function(e){
        dmySeparator = e.target.value;
        window.localStorage.setItem("dateSeparator", dmySeparator);
    });

    // Clock toggles settings
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
        window.localStorage.setItem("hourSeparator", hourSeparator);
    });

})()  
