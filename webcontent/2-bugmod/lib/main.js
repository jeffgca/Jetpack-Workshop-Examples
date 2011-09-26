var workers = [];
var data = require("self").data;

 
function detachWorker(worker, workerArray) {
    var index = workerArray.indexOf(worker);
    if(index != -1) {
        workerArray.splice(index, 1);
    }
}
 
var pageMod = require("page-mod").PageMod({
    include: ['https://bugzilla.mozilla.org/buglist.cgi?*'],
    contentScriptWhen: 'end',
    contentScriptFile: [data.url("jquery.min.js"), data.url('pagemod.js')],
    onAttach: function(worker) {
        workers.push(worker);
        worker.on('detach', function () {
        detachWorker(this, workers);
      });
    }
});

/* for testing */
// var tabs = require("tabs");
// tabs.open("https://bugzilla.mozilla.org/buglist.cgi?list_id=1338213&short_desc=iframe&query_based_on=Jetpack-Open&query_format=advanced&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&short_desc_type=allwordssubstr&product=Add-on%20SDK&known_name=Jetpack-Open");