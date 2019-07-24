(function() {
    'use strict';








    // Arrow down click's action
    document.querySelector("#bookmarks-arrow").children[0].addEventListener('click', function(e){
        document.querySelector("#bookmarks").classList.toggle("activated");
    });

})()  