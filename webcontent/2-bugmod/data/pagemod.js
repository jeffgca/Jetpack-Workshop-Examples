/**
 * bugmod
 *
 * Utility functions for various UI tweaks to Mozilla's bugzilla.
 */
if(typeof(bugmod) == 'undefined') {
    var bugmod = {};
}

(function() {

this.listMod = function() {
    
    /* grab the link from the bottom */
    var raw = $("td.bz_query_edit").html();
    
    /* stick it up top */
    $("li.form").after("<li>" +
        '<span class="separator"> | <span>' +
        raw +
        "</li>"
    );
}

}).apply(bugmod);

bugmod.listMod();
