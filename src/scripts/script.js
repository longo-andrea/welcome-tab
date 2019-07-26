(function() {
    'use strict';


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
        document.querySelector("#d-m-y").innerHTML = formatDate(day, month, year);
        document.querySelector("#hour").innerHTML = formatHour(hours, mins, secs);
    }, 500);

    /* ---------------------
    ------- SETTINGS -------
    --------------------- -*/

    // Settings icon click
    document.querySelector("#header_settings").children[0].addEventListener('click', function(e){
        document.querySelector("#settings").classList.toggle("activated");
    });

    // Settings tabs
    let settings_tab = document.querySelectorAll("#settings_naviagation > button");
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

    /* ---------------------
    ------- BOOKMARKS ------
    --------------------- -*/

    // BOOKMARKS ARROW DOWN CLICK
    document.querySelector("#bookmarks-arrow").children[0].addEventListener('click', function(e){
        document.querySelector("#bookmarks").classList.toggle("activated");
    });

})()  